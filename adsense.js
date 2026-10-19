(function () {
  // Create <head> if it doesn't exist
  let head = document.head;

  if (!head) {
    head = document.createElement("head");
    document.documentElement.insertBefore(head, document.body);
  }

  // Google AdSense loader
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3548833231206197";
  script.setAttribute("crossorigin", "anonymous");
  head.appendChild(script);
})();
