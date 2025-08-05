import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "community-fortune",

  initialize() {
    withPluginApi("1.17.0", (api) => {
      const siteSettings = api.container.lookup("service:site-settings");
      if (!siteSettings.community_fortune_enabled) {
        return;
      }

      api.decorateWidget("header:after", (helper) => {
        return helper.h("div.community-fortune", "Your fortune content here");
      });
    });
  },
};