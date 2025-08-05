import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "community-fortune-telling",

  initialize() {
    withPluginApi("1.17.0", (api) => {
      const siteSettings = api.container.lookup("service:site-settings");
      if (!siteSettings.community_fortune_enabled) {
        return;
      }

      api.renderInOutlet("welcome-banner-below-input", () => {
        return {
          component: "community-fortune-telling",
          args: {}
        };
      });
    });
  },
};