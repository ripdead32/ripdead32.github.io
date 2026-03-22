// global.js - Rip_Dead Site (no HTML edits needed)
(function() {
  // 1️⃣ Console Warning
  console.log(
    "%cSTOP! DO NOT INSERT ANYTHING HERE! IT COULD BREAK THE SITE!\n%cSeriously, leave the console alone!",
    "color: white; background-color: red; font-size: 16px; font-weight: bold; padding: 5px; border-radius: 3px;",
    "color: yellow; background-color: black; font-size: 14px; padding: 3px; border-radius: 2px;"
  );

  // 2️⃣ Wait until DOM ready
  function onReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(fn, 1);
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  onReady(function() {
    // Theme Toggle
    const themeIcon = document.getElementById("themeIcon");
    if (themeIcon) {
      themeIcon.addEventListener("click", () => {
        document.body.classList.toggle("light");
        themeIcon.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
      });
    }

    // Loader
    const loader = document.getElementById("loader");
    const bar = document.querySelector(".loader-bar");
    const text = document.getElementById("loader-text");

    if (loader && !sessionStorage.getItem('loaderShown')) {
      setTimeout(() => {
        if(bar) bar.classList.add("bar-hidden");
        loader.classList.add("centered");
        if(text) text.classList.add("text-show");

        setTimeout(() => {
          loader.classList.add("loader-hide");
          setTimeout(() => { loader.style.display = "none"; }, 800);
        }, 1200);

        sessionStorage.setItem('loaderShown', 'true');
      }, 3400);
    } else if (loader) {
      loader.style.display = "none";
    }
  });

})();
