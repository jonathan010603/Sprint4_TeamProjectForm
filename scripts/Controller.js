class Controller {
    constructor () {
        this._tabRenderer = new TabRenderer();
        this._tabRenderer.setAvailable(0, true);
        this._tabRenderer.updateButtons();
        this._tabRenderer.render(2);
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

    moreButton_clicked () {
        let cert_array = this.validator.certificates;
        let input_div = document.querySelector('.inputCert_container')
        let moreButton = document.querySelector('.moreButton');

        if(cert_array.length === 5) {
            let cert = document.querySelector('[name="certificates"]').value
            let wrapper = document.querySelector('.cert_wrapper');
            
            cert_array.push(cert);
            let new_cert =  document.createElement('div');
            new_cert.classList.add(`certificate_${cert_array.length - 2}-div`, 'cert_div', 'd-flex', 'justify-content-between');
            new_cert.innerHTML = certificate(cert_array.length - 2);
            wrapper.appendChild(new_cert)

            input_div.classList.add('full');
            moreButton.classList.add('full');
            return;
        }

        // Próximo passo - Voltar com o botão quando tiver menos de 5

        let cert = document.querySelector('[name="certificates"]').value
        let wrapper = document.querySelector('.cert_wrapper');
            
        cert_array.push(cert);
        let new_cert =  document.createElement('div');
        new_cert.classList.add(`certificate_${cert_array.length - 2}-div`, 'cert_div', 'd-flex', 'justify-content-between');
        new_cert.innerHTML = certificate(cert_array.length - 2);
        wrapper.appendChild(new_cert);
        document.querySelector('[name="certificates"]').value = "";
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

    edit (i) {
        console.log(`Editing ${i}`)
    }
    
    delete (i) {
        console.log(`Deleting ${i}`)
        document.querySelector(`.certificate_${i}-div`).remove();
    }

}