class Validator {
    constructor() {
        this.selectedCertificates = [];
        this.userInput = {
            fullName: '',
            nickName: '',
            email: '',
            phone: '',
            day: '- - -',
            month: '- - -',
            year: '- - -',
            age: '',
            checkbox: false,
            linkedin: '',
            github: '',
            teamName: '',
            institution: '',
            graduation: '',
            certificates: []
        }
    }

    change (i) {
        this.userInput = {
            fullName: document.querySelector('[name="fullName"]').value,
            nickName: document.querySelector('[name="nickName"]').value,
            email: document.querySelector('[name="email"]').value,
            phone: document.querySelector('[name="phone"]').value,
            day: document.querySelector('[name="day"]').value,
            month: document.querySelector('[name="month"]').value,
            year: document.querySelector('[name="year"]').value,
            age: document.querySelector('[name="age"]').value,
            checkbox: document.querySelector('[name="checkbox"]').checked,
            linkedin: document.querySelector('[name="linkedin"]').value,
            github: document.querySelector('[name="github"]').value,
            teamName: document.querySelector('[name="teamName"]').value,
            institution: document.querySelector('[name="institution"]').value,
            graduation: document.querySelector('[name="graduation"]').value,
            certificates: this.selectedCertificates
        }

        this.age_calc();
        if(!this.validateFields (i)) return controller.tabRenderer.setCompleted(i, false);
        controller.tabRenderer.setCompleted(i, true);
    }

    validateFields (i) {
        //url_reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        let linkedin_reg = /^(http(s?):\/\/)?(www\.)?linkedin\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;
        let github_reg = /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;
        let email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let let_spc_und_reg = /^[A-Za-z0-9\s_]*$/;
        let let_spc_reg = /^[a-zA-Z\s]*$/; 
        
        switch (i) {
            case 0:
                if(!this.userInput.fullName.match(let_spc_reg) || this.userInput.fullName.match(/^\s*$/)) return false
                if(!this.userInput.nickName.match(let_spc_und_reg)) return false
                if(!this.userInput.email.match(email_reg)) return false
                if(this.userInput.age === '') return false;
                if(!this.userInput.checkbox === true) return false
                if(this.age === '') return false
                document.querySelector('[name="phone"]').value = this.userInput.phone.replace(/\D/g, '')
                    .replace(/^(\d)/, '($1')
                    .replace(/^(\(\d{2})(\d)/, '$1) $2')
                    .replace(/(\d{5})(\d{1,5})/, '$1-$2')
                    .replace(/(-\d{4})\d+?$/, '$1');

                return true;

            case 1:
                if(!this.userInput.linkedin.match(linkedin_reg) && !this.userInput.linkedin.match(/^\s*$/)) return false;
                if(!this.userInput.github.match(github_reg)) return false;
                return true;

            case 2:
                if(!this.validateCertificates()) return false;
                if((!this.userInput.teamName.match(let_spc_reg) || this.userInput.teamName.match(/^\s*$/))) return false;
                if((!this.userInput.institution.match(let_spc_reg) || this.userInput.institution.match(/^\s*$/))) return false;
                if((!this.userInput.graduation.match(let_spc_reg) || this.userInput.graduation.match(/^\s*$/))) return false;
                return true;
        }
    }

    age_calc () {
        if ( this.userInput.day === "- - -" || this.userInput.month === "- - -" || this.userInput.year === "- - -") {
            document.querySelector('[name="age"]').value = '';
            this.userInput.age = '';
            return;
        }

        if ( this.userInput.day > 28 && this.userInput.month === "2") {
            document.querySelector('[name="age"]').value = '';
            this.userInput.age = '';
        }
        
        if ( (this.userInput.day) > 30 && (this.userInput.month === "4")
        || this.userInput.month === "6" 
        || this.userInput.month === "9" 
        || this.userInput.month === "11") {
            document.querySelector('[name="age"]').value = '';
            this.userInput.age = '';
        }

        let diffYear = new Date().getFullYear() - this.userInput.year;
        let diffMonth = (new Date().getMonth() - this.userInput.month) + 1;
        diffMonth < 0 && (diffYear -= 1);
        (diffMonth === 0 && (new Date().getDate() < this.userInput.day)) && (diffYear -= 1);
        document.querySelector('[name="age"]').value = diffYear;
        this.userInput.age = diffYear;
    }

    newCertificate (fav, data) {
        this.certificates.push({
            fav: fav,
            data: data
        })
    }

    validateCertificates () {
        let certificate_tested = document.querySelector('[name="certificates_input"]').value;
        if (certificate_tested.match(/^\s*$/)) return false;
    }

    checkFavs () {
        let index = $(".cert_dropdown").prop('selectedIndex');
        this.selectedCertificates[index].fav === true
            ? (document.querySelector('#fav_trigger_selected').checked = true)
            : (document.querySelector('#fav_trigger_selected').checked = false)
        this.change(2)
    }

    fav_click_dropdown () {
        let index = $(".cert_dropdown").prop('selectedIndex');
        let selected_trigger = document.querySelector('#fav_trigger_selected').checked;
        selected_trigger = !selected_trigger;
        selected_trigger === true
            ? this.selectedCertificates[index].fav = true
            : this.selectedCertificates[index].fav = false
        this.updateSelectedCerts();
        this.updateCertDropdown();
    }

    updateSelectedCerts () {
        let newSelected = [];
        this.selectedCertificates.map(selected => {
            if(selected.data === "") return;

            let cert_obj = {
                fav: selected.fav,
                data: selected.data,
                id: newSelected.length
            }

            selected.fav === true 
                ? newSelected.unshift(cert_obj)
                : newSelected.push(cert_obj)
        });
        this.selectedCertificates = newSelected;
    }

    updateCertDropdown () {
        let index = $(".cert_dropdown").prop('selectedIndex');
        let dropdown = document.querySelector('[name="highlighted_certificate"]')
        dropdown.innerHTML = "";
        this.selectedCertificates.map(selected => {
            let newOption = document.createElement('option');
            newOption.innerHTML = selected.data;
            dropdown.appendChild(newOption);
        })
        document.querySelector('[name="certificates_input"]').value = "";
    }


    edit () {
        let index = $(".cert_dropdown").prop('selectedIndex');
        let cert_index = this.selectedCertificates;
        let newCertName = prompt(`Choose a name or url to replace "${cert_index[index].data}"`);
        if (newCertName === null || newCertName.match(/^\s*$/)) return;
        cert_index[index].data = newCertName;
        this.updateSelectedCerts();
        this.updateCertDropdown();
        this.checkFavs();
    }
    
    delete () {
        let index = $(".cert_dropdown").prop('selectedIndex');
        this.selectedCertificates[index].data = "";
        this.updateSelectedCerts();
        this.updateCertDropdown();

        if (this.selectedCertificates.length === 0 )
            return document.querySelector('.selectedCert_container').classList.add('unavailable');

        if (this.selectedCertificates.length < 5)
            return document.querySelector('.moreButton').classList.remove('unavailable');

        this.checkFavs();
    }
}