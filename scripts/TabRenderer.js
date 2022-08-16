class TabRenderer {
    constructor () {
        this.currentTab = 0;
        this.container = document.querySelector('.formContainer-div');

        this.tabs_forms = [
            {form: document.querySelector('.form0')},
            {form: document.querySelector('.form1')},
            {form: document.querySelector('.form2')}
        ]

        this.tabs_navButtons = [
            {button: document.querySelector('.tab1-btn')},
            {button: document.querySelector('.tab2-btn')},
            {button: document.querySelector('.tab3-btn')}
        ]

        this.container.innerHTML = tabs[0].html + tabs[1].html + tabs[2].html;
    }

    isAvailable (i) {
        return tabs[i].available === true;
    }

    isCompleted (i) {
        return tabs[i].completed === true;
    }

    setAvailable (i, bool) {
        tabs[i].available = bool;
        this.updateButtons();
    }

    setCompleted (i, bool) {
        tabs[i].completed = bool;
        this.updateButtons();
    }

    updateButtons () {
        this.isCompleted(0) 
            ? ( tabs[1].available = true,
                this.isCompleted(1)
                    ? tabs[2].available = true
                    : tabs[2].available = false )

            : ( tabs[1].available = false, tabs[2].available = false );

        this.tabs_navButtons.map((tab, index) => {
            this.isAvailable(index) 
                ? (tab.button.classList.add('unlocked'), tab.button.classList.remove('locked'))
                : (tab.button.classList.remove('unlocked'), tab.button.classList.add('locked'))
        });
    }

    render (i) {
        this.currentTab = i;
        this.currentTab === 2
            ? document.querySelector('.nextButton').innerHTML = `<img src="./icons/complete.svg" class="finish-icon">Finish`
            : document.querySelector('.nextButton').innerHTML = `Next<img src="./icons/next.svg" class="">`

        for (let index = 0; index <= 2; index++) {
            let form = document.querySelector(`.form${index}`)
            form === document.querySelector(`.form${i}`)
                ? form.classList.remove('unavailable')
                : form.classList.add('unavailable')
        }
    }
}