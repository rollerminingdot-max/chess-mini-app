if (window.Telegram?.WebApp) {
  Telegram.WebApp.ready();
  Telegram.WebApp.expand();

  if (Telegram.WebApp.colorScheme === "light") {
    document.body.classList.add("light");
  }
}
