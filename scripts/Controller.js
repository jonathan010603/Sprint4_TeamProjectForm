class Controller {
    constructor () {
        this._tabRenderer = new TabRenderer();
        this._tabRenderer.setAvailable(0, true);
        this._tabRenderer.updateButtons();
        this._tabRenderer.render(0);
        this.validator = new Validator();
        this.userRenderer = new UserRenderer();
        //document.querySelector('main').innerHTML = user_list_layout();
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
        window.localStorage.setItem(`User ${Object.keys(localStorage).length + 1}`, JSON.stringify(this.validator._userInput))
        document.querySelector('main').innerHTML = user_list_layout();
        this.userRenderer.insertData();
        //console.log(JSON.parse(window.localStorage.getItem('User 1')).github);
    }
    
    new_user () {
        location.reload();
    }

}