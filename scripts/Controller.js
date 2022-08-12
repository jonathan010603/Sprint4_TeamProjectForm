class Controller {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._currentTab = 0;
        this._nextButton = $('.next-button');

        this._tab = new TabRenderer($('.content-section'));
        this._tab.update(this._currentTab);
    
        this._currentSpan = document.querySelector(`.span0`);
        this._currentSpan.classList.add("selected-span");
    }   

    get currentTab() {
        return 0 + this._currentTab;
    }

    set currentTab(i) {
        this._currentTab = i;
    }
    
    render_tab (tab) { 
        this._currentSpan.classList.remove("selected-span")
        this._currentSpan = document.querySelector(`.span${tab}`);
        if(isNaN(tab)) {
            return this._currentTab === 2 
                ?  ( this._currentSpan.classList.add("selected-span"),
                    this._finishButton())
                : ( this._currentSpan.classList.add("selected-span"),
                    this._tab.update(this._currentTab += 1));
        }
        this._currentSpan.classList.add("selected-span");
        this._currentTab = tab;
        this._tab.update(this._currentTab);
    }

    _finishButton() {
        this._nextButton.innerText = "Finish";
        console.log("Finish");
    }
}