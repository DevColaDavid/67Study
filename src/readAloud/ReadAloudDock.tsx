import { useEffect, useRef, useState } from "react";

const TTS_COLLAPSED_KEY = "apstudy_tts_panel_collapsed";

function normalizeTtsText(raw: string) {
  return String(raw || "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTtsSubtree(root: ParentNode) {
  root.querySelectorAll(
    'script, style, mjx-container, mjx-assistive-mml, [aria-hidden="true"], .chevron, .katex, .MathJax, .MathJax_SVG',
  ).forEach((node) => {
    node.remove();
  });
}

function extractPlainFromElement(element: Element | null) {
  if (!element) {
    return "";
  }
  const clone = element.cloneNode(true) as HTMLElement;
  stripTtsSubtree(clone);
  return normalizeTtsText(clone.innerText);
}

function expandChapterForTts(chapterEl: Element) {
  chapterEl.dispatchEvent(new Event("apstudy-force-expand-chapter", { bubbles: false }));
  const content = chapterEl.querySelector(".chapter-content");
  if (!content || !content.classList.contains("collapsed")) {
    return;
  }
  content.classList.remove("collapsed");
  const header = chapterEl.querySelector(".chapter-header");
  const chevron = header?.querySelector(".chevron") as HTMLElement | null;
  if (chevron) {
    chevron.style.transform = "";
  }
}

type Segment = { text: string; chapterEl: Element | null };

export function ReadAloudDock() {
  const [collapsed, setCollapsed] = useState(
    () => localStorage.getItem(TTS_COLLAPSED_KEY) === "1",
  );

  const segmentQueueRef = useRef<Segment[]>([]);
  const segmentIndexRef = useRef(0);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      console.warn("AP Study: speech synthesis is not available in this browser.");
      return;
    }

    const playBtn = document.getElementById("apstudy-tts-play") as HTMLButtonElement | null;
    const pauseBtn = document.getElementById("apstudy-tts-pause") as HTMLButtonElement | null;
    const stopBtn = document.getElementById("apstudy-tts-stop") as HTMLButtonElement | null;
    const rateInput = document.getElementById("apstudy-tts-rate") as HTMLInputElement | null;
    const rateValue = document.getElementById("apstudy-tts-rate-value") as HTMLSpanElement | null;
    const voiceSelect = document.getElementById("apstudy-tts-voice") as HTMLSelectElement | null;
    const speedWrap = document.getElementById("apstudy-tts-speed-wrap") as HTMLDivElement | null;

    if (!playBtn || !pauseBtn || !stopBtn || !rateInput || !rateValue || !voiceSelect || !speedWrap) {
      return;
    }

    const buildReadAloudSegments = (): Segment[] => {
      const mainEl = document.getElementById("main");
      if (!mainEl) {
        return [];
      }
      const segments: Segment[] = [];
      const titleBlock = mainEl.querySelector(".doc-title-block");
      if (titleBlock) {
        const intro = extractPlainFromElement(titleBlock);
        if (intro) {
          segments.push({ text: intro, chapterEl: null });
        }
      } else {
        const loneTitle = mainEl.querySelector(".doc-title");
        if (loneTitle) {
          const intro = extractPlainFromElement(loneTitle);
          if (intro) {
            segments.push({ text: intro, chapterEl: null });
          }
        }
      }
      const chapters = mainEl.querySelectorAll(".chapter");
      if (!chapters.length) {
        const full = extractPlainFromElement(mainEl);
        if (full) {
          if (!segments.length || full !== segments[0].text) {
            segments.length = 0;
            segments.push({ text: full, chapterEl: null });
          }
        }
        return segments.filter((s) => s.text.length > 0);
      }
      chapters.forEach((chapterEl) => {
        const heading = chapterEl.querySelector("h2");
        const content = chapterEl.querySelector(".chapter-content");
        const titlePart = heading ? extractPlainFromElement(heading) : "";
        const bodyPart = content ? extractPlainFromElement(content) : "";
        const combined = [titlePart, bodyPart].filter(Boolean).join(". ");
        if (combined) {
          segments.push({ text: combined, chapterEl });
        }
      });
      return segments.filter((s) => s.text.length > 0);
    };

    const clearActiveChapterHighlight = () => {
      document.querySelectorAll(".chapter.tts-active").forEach((el) => {
        el.classList.remove("tts-active");
      });
    };

    const updateTransportUi = () => {
      const synth = window.speechSynthesis;
      const speaking = synth.speaking;
      const paused = synth.paused;
      const hasReadable = buildReadAloudSegments().length > 0;
      playBtn.disabled =
        (!hasReadable && !(speaking && paused)) || (speaking && !paused);
      pauseBtn.disabled = !speaking || paused;
      stopBtn.disabled = !speaking && !paused;
      playBtn.setAttribute(
        "aria-label",
        speaking && paused ? "Resume read aloud" : "Start read aloud from the top",
      );
    };

    const populateVoices = () => {
      const prevOpt = voiceSelect.selectedOptions[0];
      const prevName = prevOpt?.dataset.voiceName;
      const prevLang = prevOpt?.dataset.voiceLang;
      const voices = window.speechSynthesis
        .getVoices()
        .filter((v) => v.lang && v.lang.startsWith("en"));
      const list = voices.length ? voices : window.speechSynthesis.getVoices();
      voiceSelect.innerHTML = "";
      list.forEach((voice, i) => {
        const opt = document.createElement("option");
        opt.value = String(i);
        opt.textContent = `${voice.name} (${voice.lang})`;
        opt.dataset.voiceName = voice.name;
        opt.dataset.voiceLang = voice.lang;
        voiceSelect.appendChild(opt);
      });
      if (prevName && prevLang) {
        const found = Array.from(voiceSelect.options).find(
          (o) => o.dataset.voiceName === prevName && o.dataset.voiceLang === prevLang,
        );
        if (found) {
          voiceSelect.value = found.value;
        }
      }
    };

    const pickVoiceForUtterance = (): SpeechSynthesisVoice | null => {
      const list = window.speechSynthesis
        .getVoices()
        .filter((v) => v.lang && v.lang.startsWith("en"));
      const fullList = list.length ? list : window.speechSynthesis.getVoices();
      const opt = voiceSelect.selectedOptions[0];
      if (!opt || !fullList.length) {
        return null;
      }
      const idx = Number(voiceSelect.value);
      if (Number.isFinite(idx) && fullList[idx]) {
        return fullList[idx];
      }
      const name = opt.dataset.voiceName;
      const lang = opt.dataset.voiceLang;
      return fullList.find((v) => v.name === name && v.lang === lang) || fullList[0] || null;
    };

    const updateRateVisual = () => {
      const min = Number(rateInput.min);
      const max = Number(rateInput.max);
      const val = Number(rateInput.value);
      const pct = max > min ? ((val - min) / (max - min)) * 100 : 33;
      speedWrap.style.setProperty("--rate-pct", `${pct}%`);
      rateValue.textContent = `${val.toFixed(2).replace(/\.?0+$/, "")}×`;
    };

    const cancelReadAloud = () => {
      window.speechSynthesis.cancel();
      segmentQueueRef.current = [];
      segmentIndexRef.current = 0;
      clearActiveChapterHighlight();
      updateTransportUi();
    };

    const speakFromIndex = (cancelBeforeStart: boolean) => {
      if (cancelBeforeStart) {
        window.speechSynthesis.cancel();
      }
      const queue = segmentQueueRef.current;
      let idx = segmentIndexRef.current;
      if (idx >= queue.length) {
        segmentQueueRef.current = [];
        segmentIndexRef.current = 0;
        clearActiveChapterHighlight();
        updateTransportUi();
        return;
      }
      const segment = queue[idx];
      if (!segment.text) {
        segmentIndexRef.current = idx + 1;
        speakFromIndex(false);
        return;
      }
      if (segment.chapterEl) {
        clearActiveChapterHighlight();
        segment.chapterEl.classList.add("tts-active");
        expandChapterForTts(segment.chapterEl);
        try {
          segment.chapterEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } catch {
          segment.chapterEl.scrollIntoView();
        }
      } else {
        clearActiveChapterHighlight();
      }
      const utterance = new SpeechSynthesisUtterance(segment.text);
      utterance.rate = Number(rateInput.value) || 1;
      const voice = pickVoiceForUtterance();
      if (voice) {
        utterance.voice = voice;
      }
      utterance.onend = () => {
        segmentIndexRef.current += 1;
        speakFromIndex(false);
      };
      utterance.onerror = () => {
        segmentIndexRef.current += 1;
        speakFromIndex(false);
      };
      window.speechSynthesis.speak(utterance);
      updateTransportUi();
    };

    const onPlay = () => {
      const synth = window.speechSynthesis;
      if (synth.speaking && synth.paused) {
        synth.resume();
        updateTransportUi();
        return;
      }
      if (synth.speaking && !synth.paused) {
        return;
      }
      populateVoices();
      segmentQueueRef.current = buildReadAloudSegments();
      segmentIndexRef.current = 0;
      if (!segmentQueueRef.current.length) {
        updateTransportUi();
        return;
      }
      speakFromIndex(true);
    };

    const onPause = () => {
      const synth = window.speechSynthesis;
      if (synth.speaking && !synth.paused) {
        synth.pause();
      }
      updateTransportUi();
    };

    const onVoicesChanged = () => {
      populateVoices();
      updateTransportUi();
    };

    playBtn.addEventListener("click", onPlay);
    pauseBtn.addEventListener("click", onPause);
    stopBtn.addEventListener("click", cancelReadAloud);
    rateInput.addEventListener("input", updateRateVisual);
    window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
    populateVoices();
    updateRateVisual();
    updateTransportUi();

    const onBeforeUnload = () => cancelReadAloud();
    window.addEventListener("beforeunload", onBeforeUnload);
    const onPageHide = () => {
      window.speechSynthesis.cancel();
    };
    window.addEventListener("pagehide", onPageHide, { passive: true });
    const onLock = () => cancelReadAloud();
    window.addEventListener("apstudy-lock", onLock);

    return () => {
      playBtn.removeEventListener("click", onPlay);
      pauseBtn.removeEventListener("click", onPause);
      stopBtn.removeEventListener("click", cancelReadAloud);
      rateInput.removeEventListener("input", updateRateVisual);
      window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("apstudy-lock", onLock);
      cancelReadAloud();
    };
  }, []);

  useEffect(() => {
    document.body.classList.add("has-tts-dock");
    return () => {
      document.body.classList.remove("has-tts-dock");
    };
  }, []);

  if (!("speechSynthesis" in window)) {
    return null;
  }

  const showPanel = () => {
    setCollapsed(false);
    localStorage.removeItem(TTS_COLLAPSED_KEY);
  };

  const hidePanel = () => {
    setCollapsed(true);
    localStorage.setItem(TTS_COLLAPSED_KEY, "1");
  };

  return (
    <div id="apstudy-tts-dock" className={`apstudy-tts-dock${collapsed ? " is-collapsed" : ""}`}>
      <button
        type="button"
        id="apstudy-tts-show"
        className="apstudy-tts-show-btn"
        aria-controls="apstudy-tts-bar"
        aria-label="Show read aloud controls"
        aria-expanded={!collapsed}
        onClick={showPanel}
      >
        Read aloud
      </button>
      <div
        id="apstudy-tts-bar"
        className="apstudy-tts-bar"
        role="region"
        aria-label="Read aloud"
        aria-hidden={collapsed}
      >
        <div className="apstudy-tts-inner">
          <div className="apstudy-tts-head">
            <span className="apstudy-tts-label">Read aloud</span>
            <button
              type="button"
              className="apstudy-tts-btn apstudy-tts-collapse"
              aria-label="Hide read aloud panel"
              onClick={hidePanel}
            >
              Hide
            </button>
          </div>
          <div className="apstudy-tts-controls">
            <button type="button" className="apstudy-tts-btn" id="apstudy-tts-play">
              Play
            </button>
            <button type="button" className="apstudy-tts-btn" id="apstudy-tts-pause">
              Pause
            </button>
            <button type="button" className="apstudy-tts-btn" id="apstudy-tts-stop">
              Stop
            </button>
            <div className="apstudy-tts-speed" id="apstudy-tts-speed-wrap">
              <label className="apstudy-tts-speed-label" htmlFor="apstudy-tts-rate">
                Speed
              </label>
              <div className="apstudy-tts-speed-row">
                <span className="apstudy-tts-speed-end" aria-hidden>
                  Slow
                </span>
                <div className="apstudy-tts-speed-track">
                  <input
                    type="range"
                    id="apstudy-tts-rate"
                    className="apstudy-tts-rate"
                    min={0.75}
                    max={1.5}
                    step={0.05}
                    defaultValue={1}
                  />
                </div>
                <span className="apstudy-tts-speed-end" aria-hidden>
                  Fast
                </span>
                <span className="apstudy-tts-rate-badge" id="apstudy-tts-rate-value" aria-hidden>
                  1×
                </span>
              </div>
            </div>
            <label className="apstudy-tts-voice-label" htmlFor="apstudy-tts-voice">
              Voice
            </label>
            <select id="apstudy-tts-voice" className="apstudy-tts-voice" aria-label="Voice" />
          </div>
        </div>
      </div>
    </div>
  );
}
