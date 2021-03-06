import { ButtonBase } from '@lit/button-base';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button-styles.js';
import { getStyleModule } from '@lit/polymer-style-module';

class LitButtonLumo extends ButtonBase {
  static get is() {
    return 'lit-button-lumo';
  }

  static get version() {
    return '0.1.0';
  }

  static get styles() {
    return [super.styles, getStyleModule('lumo-button')];
  }
}

customElements.define(LitButtonLumo.is, LitButtonLumo);
