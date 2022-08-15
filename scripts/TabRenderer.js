class TabRenderer {
    constructor () {
        this._currentTab = 0;

        this.container = document.querySelector('.formContainer-div');

        this.tabs_forms = [
            {form: document.querySelector('.form0')},
            {form: document.querySelector('.form1')},
            {form: document.querySelector('.form2')}
        ]
        
        this.tabs_buttons = [
            {button: document.querySelector('.tab1-btn')},
            {button: document.querySelector('.tab2-btn')},
            {button: document.querySelector('.tab3-btn')}
        ]

        this.container.innerHTML = tabs[0].html + tabs[1].html + tabs[2].html;
    }

    get currentTab () {
        return (0 + this._currentTab);
    }
    
    set currentTab (i) {
        this._currentTab = i;
    }

    isAvailable (i) {
        return tabs[i].available === true;
    }

    isCompleted (i) {
        return tabs[i].completed === true;
    }

    setCompleted (i, bool) {
        tabs[i].completed = bool;
        this.updateButtons();
    }

    setAvailable (i, bool) {
        tabs[i].available = bool;
        this.updateButtons();
    }

    updateButtons () {
        if (this.isCompleted(0)) {
            tabs[1].available = true;

            this.isCompleted(1)
                ? tabs[2].available = true
                : tabs[2].available = false
        }

        else { 
            tabs[1].available = false 
            tabs[2].available = false 
        }

        this.tabs_buttons.map((tab, index) => {
            this.isAvailable(index) 
                ? (tab.button.classList.add('available'), tab.button.classList.remove('unavailable'))
                : (tab.button.classList.remove('available'), tab.button.classList.add('unavailable'))
        })
    }

    render (i) {
        this._currentTab = i;
        this._currentTab === 2 && (
            document.querySelector('.next-btn').innerHTML = `
                <img src="./icons/complete.svg" class="finish-icon">Finish
            `);

        for (let index = 0; index <= 2; index++) {
            let form = document.querySelector(`.form${index}`)
            switch(form) {
                case document.querySelector(`.form${i}`):
                    form.classList.remove('unavailable');
                    break;

                default:
                    form.classList.add('unavailable');
                    break;
            }
        }
    }
}