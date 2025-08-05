import Component from "@ember/component";
import I18n from "I18n";
import { computed } from "@ember/object";

export default Component.extend({
  fortune: computed(function () {
    const fortunes = I18n.t("community_fortune.fortunes");
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  }),
});
