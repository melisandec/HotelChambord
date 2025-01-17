document.addEventListener("DOMContentLoaded", () => {
  // Reservation button effect
  const reservationButton = document.getElementById("reservationButton");
  let lastScrollTop = 0;
  window.addEventListener(
    "scroll",
    () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      reservationButton.style.transform =
        scrollTop > lastScrollTop ? "translateY(100px)" : "translateY(0)";
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    { passive: true }
  );
  // Au clique il ouvre la page reservation.html
  reservationButton.addEventListener("click", () => {
    window.location.href = "reservation.html";
  });
  // fin butoun reservation

  // scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    scrollToTopBtn.classList.toggle("show", window.pageYOffset > 100);
  });
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // scroll to top button end

  // Commutateur de langue
  const languageSwitcher = document.querySelector(".language-selector");
  languageSwitcher.addEventListener("click", () => {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.includes("/fr/")
      ? currentUrl.replace("/fr/", "/en/")
      : currentUrl.replace("/en/", "/fr/");
    window.location.href = newUrl;
  });

  // Fade-in effect for sections
  const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -100px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  document.querySelectorAll(".fade-in-section").forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  // iframe lazy loading
  document.querySelectorAll("iframe.lazyload").forEach((iframe) => {
    iframe.src = iframe.dataset.src;
  });
});
