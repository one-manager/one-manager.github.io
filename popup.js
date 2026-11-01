(function () {
  "use strict";

  /* ============================================
     1) Haddii horey loo xiray → ha soo bixin
     ============================================ */
  const STORAGE_KEY = "maru_rename_popup_dismissed";
  if (localStorage.getItem(STORAGE_KEY) === "1") return;

  /* ============================================
     2) CSS — popup styling (vh, no animation)
     ============================================ */
  const css = `
    .rename-popup {
      position: fixed;
      top: calc(2vh * 0.9);
      left: 50%;
      transform: translateX(-50%);
      width: 92vw;
      max-width: calc(86vh * 0.9);
      z-index: 9999;
      display: flex;
      align-items: flex-start;
      gap: calc(1.4vh * 0.9);
      padding: calc(1.8vh * 0.9) calc(2vh * 0.9);
      border-radius: calc(1.4vh * 0.9);
      background: rgba(12, 18, 40, 0.97);
      border: calc(0.14vh * 0.9) solid rgba(0, 255, 213, 0.45);
      box-shadow: 0 0 calc(1.6vh * 0.9) rgba(0, 255, 213, 0.25);
      color: #f5f7ff;
      font-family: 'Inter', Arial, sans-serif;
      font-size: calc(1.65vh * 0.7);
      font-weight: 500;
      line-height: 1.55;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .rename-popup.show {
      opacity: 1;
    }

    /* Icon */
    .rename-popup .rp-icon {
      flex-shrink: 0;
      width: calc(3.8vh * 0.9);
      height: calc(3.8vh * 0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 255, 213, 0.14);
      border: calc(0.12vh * 0.9) solid rgba(0, 255, 213, 0.5);
      color: #00ffd5;
      font-size: calc(1.9vh * 0.7);
      margin-top: calc(0.2vh * 0.9);
    }

    /* Text */
    .rename-popup .rp-text {
      flex: 1;
      min-width: 0;
      text-align: left;
    }

    .rename-popup .rp-title {
      display: block;
      color: #00ffd5;
      font-weight: 700;
      font-size: calc(1.85vh * 0.7);
      letter-spacing: 0.3px;
      margin-bottom: calc(0.6vh * 0.9);
    }

    .rename-popup .rp-body {
      color: #e0e0e0;
      font-size: calc(1.55vh * 0.7);
      line-height: 1.6;
    }

    .rename-popup .rp-body strong {
      color: #00ffd5;
      font-weight: 600;
    }

    /* Close button (×) */
    .rename-popup .rp-close {
      flex-shrink: 0;
      width: calc(3.2vh * 0.9);
      height: calc(3.2vh * 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.06);
      border: calc(0.12vh * 0.9) solid rgba(255, 255, 255, 0.15);
      color: #fff;
      font-size: calc(2.2vh * 0.7);
      font-weight: 700;
      cursor: pointer;
      line-height: 1;
      padding: 0;
      font-family: inherit;
    }

    .rename-popup .rp-close:hover {
      background: rgba(255, 60, 60, 0.2);
      border-color: rgba(255, 80, 80, 0.6);
      color: #ff8080;
    }

    .rename-popup .rp-close:active {
      opacity: 0.6;
    }

    /* Mobile tweak */
    @media (max-width: 600px) {
      .rename-popup {
        font-size: calc(1.55vh * 0.7);
        padding: calc(1.6vh * 0.9) calc(1.8vh * 0.9);
        gap: calc(1.2vh * 0.9);
      }
      .rename-popup .rp-icon { width: calc(3.2vh * 0.9); height: calc(3.2vh * 0.9); }
      .rename-popup .rp-title { font-size: calc(1.7vh * 0.7); }
      .rename-popup .rp-body { font-size: calc(1.45vh * 0.7); }
    }
  `;

  /* ============================================
     3) CSS dheh <head>
     ============================================ */
  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ============================================
     4) HTML — abuur popup
     ============================================ */
  const popup = document.createElement("div");
  popup.className = "rename-popup";
  popup.setAttribute("role", "alert");
  popup.innerHTML = `
    <div class="rp-icon">★</div>
    <div class="rp-text">
      <span class="rp-title">Name Changed: MARU → MARUZENIX</span>
      <div class="rp-body">
        The name <strong>MARU</strong> is widely used across many platforms, by many users, and by many owners around the world. To avoid confusion and to keep our identity clear, we have officially renamed this brand to <strong>MARUZENIX</strong>. Same apps, same developer, same privacy-first approach — only the name is new. Thank you for your continued support!
      </div>
    </div>
    <button class="rp-close" type="button" aria-label="Close">×</button>
  `;

  /* ============================================
     5) Ku dar body (bilowga)
     ============================================ */
  document.body.prepend(popup);

  /* ============================================
     6) Soo bandhig — fade yar oo keliya (0.2s)
     ============================================ */
  requestAnimationFrame(() => {
    popup.classList.add("show");
  });

  /* ============================================
     7) × button — qari + keyd localStorage
     ============================================ */
  const closeBtn = popup.querySelector(".rp-close");
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");

    setTimeout(() => {
      if (popup.parentNode) popup.parentNode.removeChild(popup);
    }, 250);

    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (e) { /* private mode */ }
  });
})();