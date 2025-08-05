import Component from "@glimmer/component";
import I18n from "I18n";
import { tracked } from "@glimmer/tracking";

export default class CommunityFortuneComponent extends Component {
  @tracked fortune;

  constructor() {
    super(...arguments);
    this.fortune = this.getFortune();
  }

  getFortune() {
    const fortunes = I18n.t("community_fortune.fortunes");
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  }
}