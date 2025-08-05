import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "community-fortune",

  initialize() {
    withPluginApi("0.8.13", (api) => {
      const siteSettings = api.container.lookup("service:site-settings");
      if (!siteSettings.community_fortune_enabled) {
        return;
      }

      // welcome-banner-below-input 위치에 컴포넌트 렌더링
      api.decoratePluginOutlet("welcome-banner-below-input", (content) => {
        return {
          component: "community-fortune",
        };
      });
    });
  },
};
