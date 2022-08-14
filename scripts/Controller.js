class Controller {
    constructor () {
        this._tabRenderer = new TabRenderer();
        this._tabRenderer.setAvailable(0, true);
        this._tabRenderer.updateButtons();
        this._tabRenderer.render(0);

        this.validator = new Validator();
        this.validator.change();
    }

    tabButton_clicked (i) {
        if (!this._tabRenderer.isAvailable(i) || this._tabRenderer._currentTab === i) return;
        this._tabRenderer.render(i);
    }
}