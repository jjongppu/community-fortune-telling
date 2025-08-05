import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "community-fortune",

  initialize() {
    withPluginApi("0.8.13", (api) => {
      const siteSettings = api.container.lookup("service:site-settings");

      if (!siteSettings.community_fortune_enabled) {
        return;
      }

      api.decorateWidget("header:before", (dec) => {
        const fortunes = I18n.t("community_fortune.fortunes");
        if (!fortunes || fortunes.length === 0) {
          return null;
        }

        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

        return dec.h("div.community-fortune", [
          dec.h("strong", I18n.t("community_fortune.fortune_label") + ": "),
          fortune,
        ]);
      });
    });
  },
};
