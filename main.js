(function initializeSite() {
  // NOTE: This is a client-side gate for convenience.
  // Anyone with dev tools can still view source; use server auth for real security.
  const sitePassword = "team4270";
  const authKey = "apstudy_auth_ok";
  const lastActiveKey = "apstudy_last_active_ms";
  const inactivityTimeoutMs = 45 * 60 * 1000;
  const maxAttempts = 3;
  const activityEvents = ["click", "keydown", "touchstart", "scroll"];
  let appInitialized = false;
  let activeOverlay = null;
  let logoutButton = null;
  let cancelReadAloud = function cancelReadAloudNoop() {};

  function nowMs() {
    return Date.now();
  }

  function updateLastActive() {
    localStorage.setItem(lastActiveKey, String(nowMs()));
  }

  function clearAuth() {
    sessionStorage.removeItem(authKey);
  }

  function hasTimedOut() {
    const lastActiveRaw = localStorage.getItem(lastActiveKey);
    const lastActiveMs = Number(lastActiveRaw);
    if (!Number.isFinite(lastActiveMs) || lastActiveMs <= 0) {
      return true;
    }
    return nowMs() - lastActiveMs > inactivityTimeoutMs;
  }

  function enableAuthenticatedFeatures() {
    if (appInitialized) {
      return;
    }
    appInitialized = true;

    window.toggle = function toggle(header) {
      const content = header.nextElementSibling;
      const chevron = header.querySelector(".chevron");
      if (!content || !chevron) {
        return;
      }
      content.classList.toggle("collapsed");
      chevron.style.transform = content.classList.contains("collapsed")
        ? "rotate(-90deg)"
        : "";
    };

    document.querySelectorAll(".chapter-content").forEach((contentElement) => {
      contentElement.classList.remove("collapsed");
    });

    setupReadAloud();
  }

  function setupReadAloud() {
    const mainEl = document.getElementById("main");
    if (!mainEl || !("speechSynthesis" in window)) {
      if (!("speechSynthesis" in window)) {
        console.warn("AP Study: speech synthesis is not available in this browser.");
      }
      return;
    }
    if (document.getElementById("apstudy-tts-dock")) {
      return;
    }

    const ttsCollapsedStorageKey = "apstudy_tts_panel_collapsed";

    function normalizeTtsText(raw) {
      return String(raw || "")
        .replace(/\s+/g, " ")
        .trim();
    }

    function stripTtsSubtree(root) {
      root.querySelectorAll(
        "script, style, mjx-container, mjx-assistive-mml, [aria-hidden=\"true\"], .chevron, .MathJax, .MathJax_SVG",
      ).forEach((node) => {
        node.remove();
      });
    }

    function extractPlainFromElement(element) {
      if (!element) {
        return "";
      }
      const clone = element.cloneNode(true);
      stripTtsSubtree(clone);
      return normalizeTtsText(clone.innerText);
    }

    function expandChapterForTts(chapterEl) {
      const content = chapterEl.querySelector(".chapter-content");
      if (!content || !content.classList.contains("collapsed")) {
        return;
      }
      content.classList.remove("collapsed");
      const header = chapterEl.querySelector(".chapter-header");
      const chevron = header && header.querySelector(".chevron");
      if (chevron) {
        chevron.style.transform = "";
      }
    }

    function buildReadAloudSegments() {
      const segments = [];
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
    }

    const dock = document.createElement("div");
    dock.id = "apstudy-tts-dock";
    dock.className = "apstudy-tts-dock";
    if (localStorage.getItem(ttsCollapsedStorageKey) === "1") {
      dock.classList.add("is-collapsed");
    }

    const showPanelBtn = document.createElement("button");
    showPanelBtn.type = "button";
    showPanelBtn.id = "apstudy-tts-show";
    showPanelBtn.className = "apstudy-tts-show-btn";
    showPanelBtn.textContent = "Read aloud";
    showPanelBtn.setAttribute("aria-controls", "apstudy-tts-bar");
    showPanelBtn.setAttribute("aria-label", "Show read aloud controls");

    const bar = document.createElement("div");
    bar.id = "apstudy-tts-bar";
    bar.className = "apstudy-tts-bar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Read aloud");
    bar.innerHTML = `
      <div class="apstudy-tts-inner">
        <div class="apstudy-tts-head">
          <span class="apstudy-tts-label">Read aloud</span>
          <button type="button" class="apstudy-tts-btn apstudy-tts-collapse" id="apstudy-tts-hide" aria-label="Hide read aloud panel">Hide</button>
        </div>
        <div class="apstudy-tts-controls">
          <button type="button" class="apstudy-tts-btn" id="apstudy-tts-play" aria-keyshortcuts="Space">Play</button>
          <button type="button" class="apstudy-tts-btn" id="apstudy-tts-pause" disabled>Pause</button>
          <button type="button" class="apstudy-tts-btn" id="apstudy-tts-stop" disabled>Stop</button>
          <div class="apstudy-tts-speed" id="apstudy-tts-speed-wrap">
            <label class="apstudy-tts-speed-label" for="apstudy-tts-rate">Speed</label>
            <div class="apstudy-tts-speed-row">
              <span class="apstudy-tts-speed-end" aria-hidden="true">Slow</span>
              <div class="apstudy-tts-speed-track">
                <input type="range" id="apstudy-tts-rate" class="apstudy-tts-rate" min="0.75" max="1.5" step="0.05" value="1" />
              </div>
              <span class="apstudy-tts-speed-end" aria-hidden="true">Fast</span>
              <span class="apstudy-tts-rate-badge" id="apstudy-tts-rate-value" aria-hidden="true">1×</span>
            </div>
          </div>
          <label class="apstudy-tts-voice-label" for="apstudy-tts-voice">Voice</label>
          <select id="apstudy-tts-voice" class="apstudy-tts-voice" aria-label="Voice"></select>
        </div>
      </div>
    `;
    dock.appendChild(showPanelBtn);
    dock.appendChild(bar);
    document.body.appendChild(dock);
    document.body.classList.add("has-tts-dock");

    function syncTtsPanelVisibility() {
      const collapsed = dock.classList.contains("is-collapsed");
      bar.setAttribute("aria-hidden", collapsed ? "true" : "false");
      showPanelBtn.setAttribute("aria-expanded", collapsed ? "false" : "true");
    }
    syncTtsPanelVisibility();

    showPanelBtn.addEventListener("click", () => {
      dock.classList.remove("is-collapsed");
      localStorage.removeItem(ttsCollapsedStorageKey);
      syncTtsPanelVisibility();
    });

    const hidePanelBtn = bar.querySelector("#apstudy-tts-hide");
    hidePanelBtn.addEventListener("click", () => {
      dock.classList.add("is-collapsed");
      localStorage.setItem(ttsCollapsedStorageKey, "1");
      syncTtsPanelVisibility();
    });

    const playBtn = bar.querySelector("#apstudy-tts-play");
    const pauseBtn = bar.querySelector("#apstudy-tts-pause");
    const stopBtn = bar.querySelector("#apstudy-tts-stop");
    const rateInput = bar.querySelector("#apstudy-tts-rate");
    const rateValue = bar.querySelector("#apstudy-tts-rate-value");
    const voiceSelect = bar.querySelector("#apstudy-tts-voice");

    let segmentQueue = [];
    let segmentIndex = 0;

    function clearActiveChapterHighlight() {
      document.querySelectorAll(".chapter.tts-active").forEach((el) => {
        el.classList.remove("tts-active");
      });
    }

    function updateTransportUi() {
      const synth = window.speechSynthesis;
      const speaking = synth.speaking;
      const paused = synth.paused;
      const hasReadable = buildReadAloudSegments().length > 0;
      playBtn.disabled =
        (!hasReadable && !(speaking && paused)) || (speaking && !paused);
      pauseBtn.disabled = !speaking || paused;
      stopBtn.disabled = !speaking && !paused;
      playBtn.textContent = "Play";
      playBtn.setAttribute(
        "aria-label",
        speaking && paused ? "Resume read aloud" : "Start read aloud from the top",
      );
    }

    function populateVoices() {
      const prevOpt = voiceSelect.selectedOptions[0];
      const prevName = prevOpt && prevOpt.dataset.voiceName;
      const prevLang = prevOpt && prevOpt.dataset.voiceLang;
      const voices = window.speechSynthesis.getVoices().filter((v) => v.lang && v.lang.startsWith("en"));
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
    }

    function pickVoiceForUtterance() {
      const list = window.speechSynthesis.getVoices().filter((v) => v.lang && v.lang.startsWith("en"));
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
      return fullList.find((v) => v.name === name && v.lang === lang) || fullList[0];
    }

    function speakFromIndex(cancelBeforeStart) {
      if (cancelBeforeStart) {
        window.speechSynthesis.cancel();
      }
      if (segmentIndex >= segmentQueue.length) {
        segmentQueue = [];
        segmentIndex = 0;
        clearActiveChapterHighlight();
        updateTransportUi();
        return;
      }

      const segment = segmentQueue[segmentIndex];
      if (!segment.text) {
        segmentIndex += 1;
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
        segmentIndex += 1;
        speakFromIndex(false);
      };
      utterance.onerror = () => {
        segmentIndex += 1;
        speakFromIndex(false);
      };
      window.speechSynthesis.speak(utterance);
      updateTransportUi();
    }

    cancelReadAloud = function cancelReadAloudImpl() {
      window.speechSynthesis.cancel();
      segmentQueue = [];
      segmentIndex = 0;
      clearActiveChapterHighlight();
      updateTransportUi();
    };

    playBtn.addEventListener("click", () => {
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
      segmentQueue = buildReadAloudSegments();
      segmentIndex = 0;
      if (!segmentQueue.length) {
        updateTransportUi();
        return;
      }
      speakFromIndex(true);
    });

    pauseBtn.addEventListener("click", () => {
      const synth = window.speechSynthesis;
      if (synth.speaking && !synth.paused) {
        synth.pause();
      }
      updateTransportUi();
    });

    stopBtn.addEventListener("click", () => {
      cancelReadAloud();
    });

    const speedWrap = bar.querySelector("#apstudy-tts-speed-wrap");

    function updateRateVisual() {
      if (!rateInput || !speedWrap) {
        return;
      }
      const min = Number(rateInput.min);
      const max = Number(rateInput.max);
      const val = Number(rateInput.value);
      const pct = max > min ? ((val - min) / (max - min)) * 100 : 33;
      speedWrap.style.setProperty("--rate-pct", `${pct}%`);
      const r = val;
      rateValue.textContent = `${r.toFixed(2).replace(/\.?0+$/, "")}×`;
    }

    rateInput.addEventListener("input", updateRateVisual);
    updateRateVisual();

    function onVoicesChanged() {
      populateVoices();
      updateTransportUi();
    }
    window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
    populateVoices();

    window.addEventListener("beforeunload", cancelReadAloud);

    window.addEventListener(
      "pagehide",
      () => {
        window.speechSynthesis.cancel();
      },
      { passive: true },
    );

    updateTransportUi();
  }

  function ensureLogoutButton() {
    if (logoutButton) {
      return;
    }
    logoutButton = document.createElement("button");
    logoutButton.type = "button";
    logoutButton.className = "logout-button";
    logoutButton.textContent = "Log out";
    logoutButton.addEventListener("click", () => {
      clearAuth();
      renderPasswordOverlay("You've been logged out. Enter password to continue.");
    });
    document.body.appendChild(logoutButton);
  }

  function renderPasswordOverlay(messageText) {
    if (activeOverlay) {
      return;
    }

    cancelReadAloud();

    const overlay = document.createElement("div");
    overlay.className = "auth-overlay";
    overlay.innerHTML = `
      <div class="auth-card">
        <h2 class="auth-title">Session locked</h2>
        <p class="auth-subtitle">${messageText}</p>
        <form class="auth-form" id="auth-form">
          <input class="auth-input" id="auth-input" type="password" placeholder="Enter password" autocomplete="current-password" required />
          <button class="auth-button" type="submit">Unlock</button>
          <div class="auth-error" id="auth-error"></div>
        </form>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
    activeOverlay = overlay;

    const form = overlay.querySelector("#auth-form");
    const input = overlay.querySelector("#auth-input");
    const errorElement = overlay.querySelector("#auth-error");
    let attempts = 0;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (input.value === sitePassword) {
        sessionStorage.setItem(authKey, "1");
        updateLastActive();
        overlay.remove();
        document.body.style.overflow = "";
        activeOverlay = null;
        enableAuthenticatedFeatures();
        ensureLogoutButton();
        return;
      }

      attempts += 1;
      const attemptsLeft = maxAttempts - attempts;
      if (attemptsLeft <= 0) {
        errorElement.textContent = "Too many attempts. Refresh to try again.";
        input.disabled = true;
        return;
      }
      errorElement.textContent = `Incorrect password. ${attemptsLeft} attempt(s) left.`;
      input.select();
    });

    input.focus();
  }

  function requirePasswordOrLock(messageText) {
    if (sessionStorage.getItem(authKey) === "1" && !hasTimedOut()) {
      updateLastActive();
      enableAuthenticatedFeatures();
      ensureLogoutButton();
      return;
    }

    clearAuth();
    renderPasswordOverlay(messageText);
  }

  function startActivityTracking() {
    activityEvents.forEach((eventName) => {
      document.addEventListener(eventName, () => {
        if (sessionStorage.getItem(authKey) === "1" && !activeOverlay) {
          updateLastActive();
        }
      }, { passive: true });
    });
  }

  function setupReturnChecks() {
    const onReturnToApp = () => {
      if (document.hidden) {
        return;
      }
      if (sessionStorage.getItem(authKey) === "1" && hasTimedOut()) {
        clearAuth();
        renderPasswordOverlay("You've been away for a while. Enter password to continue.");
      }
    };
    document.addEventListener("visibilitychange", onReturnToApp);
    window.addEventListener("focus", onReturnToApp);
  }

  startActivityTracking();
  setupReturnChecks();
  requirePasswordOrLock("Enter the password to access AP Study.");
})();
