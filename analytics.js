(function () {
  // Create <head> if it doesn't exist
  let head = document.head;

  if (!head) {
    head = document.createElement("head");
    document.documentElement.insertBefore(head, document.body);
  }

  // Google Analytics loader
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-L1LD34YZDN";
  head.appendChild(script);

  // Google Analytics
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", "G-L1LD34YZDN");
})();