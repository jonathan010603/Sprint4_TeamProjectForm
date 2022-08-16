class Controller {
    constructor () {
        this.tabRenderer = new TabRenderer();
        this.tabRenderer.setAvailable(0, true);
        this.tabRenderer.updateButtons();
        this.tabRenderer.render(0);
        this.validator = new Validator();
        this.userRenderer = new UserRenderer();
    }

    navButton_clicked (i) {
        if (!this.tabRenderer.isAvailable(i) || this.tabRenderer.currentTab === i) return;
        this.tabRenderer.render(0);
    }

    nextButton_clicked () {
        let nextTab = this.tabRenderer.currentTab + 1;
        let current = this.tabRenderer.currentTab;

        if (current === 2) {
            if(!tabs[2].completed === true) return;
            return this.finish();
        }
        if (!this.tabRenderer.isAvailable(nextTab)) return;
        this.tabRenderer.render(nextTab);
        this.tabRenderer.currentTab = nextTab;
    }

    moreButton_clicked () {
        if (this.validator.validateCertificates() === false) return;
        let selected_array = this.validator.selectedCertificates;
        let cert = document.querySelector('[name="certificates_input"]').value;

        let cert_obj = {
            fav: document.querySelector('#fav_trigger').checked,
            data: cert,
            id: this.validator.selectedCertificates.length
        }
        
        selected_array.push(cert_obj);
        
        this.validator.updateSelectedCerts();
        this.validator.updateCertDropdown();

        if (selected_array.length === 1)
            return document.querySelector('.selectedCert_container').classList.remove('unavailable');

        if (selected_array.length === 5)
            return document.querySelector('.moreButton').classList.add('unavailable');
        
        this.validator.checkFavs();
    }

    finish () {
        window.localStorage.setItem(`User ${Object.keys(localStorage).length + 1}`, JSON.stringify(this.validator.userInput))
        document.querySelector('main').innerHTML = userRenderer.user_list();
        this.userRenderer.insertData();
        console.log(this.validator.userInput)
        //console.log(JSON.parse(window.localStorage.getItem('User 1')).github);
    }
    
    new_user () {
        location.reload();
    }
}