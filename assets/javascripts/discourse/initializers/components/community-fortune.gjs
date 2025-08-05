import Component from "@glimmer/component";
import { hbs } from "ember-cli-htmlbars";
import I18n from "I18n";

export default class CommunityFortune extends Component {
  fortune = (() => {
    const fortunes = I18n.t("community_fortune.fortunes");
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  })();

  static template = hbs`
    <div class="community-fortune">
      <strong>{{i18n "community_fortune.fortune_label"}}:</strong> {{this.fortune}}
    </div>
  `;
}
