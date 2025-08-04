import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {
  if (!settings.community_fortune_enabled) {
    return;
  }

  api.onPageChange(() => {
    const search = document.querySelector(".search-container");
    if (!search || document.querySelector(".community-fortune")) {
      return;
    }

    const fortunes = I18n.t("community_fortune.fortunes");
    if (!fortunes || fortunes.length === 0) {
      return;
    }

    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const banner = document.createElement("div");
    banner.className = "community-fortune";
    banner.textContent = fortune;
    search.parentNode.insertBefore(banner, search);
  });
});
