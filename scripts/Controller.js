class Controller {
    constructor () {
        this._tabRenderer = new TabRenderer();
        this._tabRenderer.setAvailable(0, true);
        this._tabRenderer.updateButtons();
        this._tabRenderer.render(0);

        this.validator = new Validator();
    }

    tabButton_clicked (i) {
        if (!this._tabRenderer.isAvailable(i) || this._tabRenderer._currentTab === i) return;
        this._tabRenderer.render(i);
    }

    nextButton_clicked () {
        let nextTab = this._tabRenderer._currentTab + 1;
        let current = this._tabRenderer._currentTab;
        
        if (current === 2) {
            if(!tabs[2].completed === true) return;
            return this.finish();
        }
        if (!this._tabRenderer.isAvailable(nextTab)) return;
        this._tabRenderer.render(nextTab);
        this._tabRenderer._currentTab = nextTab;
    }

    finish () {
        console.log("Finish");
    }
}