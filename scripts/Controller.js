class Controller {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._currentTab = 0;

        this._tab = new TabRenderer($('.content-section'));
        this._tab.update(this._currentTab);
    }
    
    next_tab () {
        this._currentTab += 1;
        this._tab.update(this._currentTab);
    }
    
    prev_tab () {
        this._currentTab -= 1;
        this._tab.update(this._currentTab);
    }
}