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
