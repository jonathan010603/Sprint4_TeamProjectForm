class Validator {
    constructor() {
        this.url_reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        this.linkedin_reg = /^(http(s?):\/\/)?(www\.)?linkedin\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;
        this.github_reg = /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;
        this.email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.let_spc_und = /^[A-Za-z0-9\s_]*$/;
        this.let_spc = /^[a-zA-Z\s]*$/; 
        this._userInput = {
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
            graduation: ''
        }
    }

    get userInput () {
        return [].concat(this._userInput);
    }

    change (i) {
        this._userInput = {
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
        }

        this.age_calc();
        
        console.log(this._userInput)
        console.log("Current tab is " + controller._tabRenderer._currentTab)
        if(!this.validateFields (i)) return controller._tabRenderer.setCompleted(i, false);
        controller._tabRenderer.setCompleted(i, true);
    }

    validateFields (i) {
        switch (i) {
            case 0:
                document.querySelector('[name="phone"]').value = this._userInput.phone.replace(/\D/g, '')
                        .replace(/^(\d)/, '($1')
                        .replace(/^(\(\d{2})(\d)/, '$1) $2')
                        .replace(/(\d{5})(\d{1,5})/, '$1-$2')
                        .replace(/(-\d{4})\d+?$/, '$1');
                if(!this._userInput.fullName.match(this.let_spc) || this._userInput.fullName.match(/^\s*$/)) return false
                if(!this._userInput.nickName.match(this.let_spc_und)) return false
                if(!this._userInput.email.match(this.email_reg)) return false
                if(this._userInput.age === '') return false;
                if(!this._userInput.checkbox === true) return false
                if(this.age === '') return false
                return true;

            case 1:
                console.log("Esse é o 1")
                if(!this._userInput.linkedin.match(this.linkedin_reg) && !this._userInput.linkedin.match(/^\s*$/)) return false;
                console.log("Linkedin Validado");
                if(!this._userInput.github.match(this.github_reg)) return false;
                console.log("github Validado");
                return true;

            case 2:
                if((!this._userInput.teamName.match(this.let_spc) || this._userInput.teamName.match(/^\s*$/))) return false;
                if((!this._userInput.institution.match(this.let_spc) || this._userInput.institution.match(/^\s*$/))) return false;
                if((!this._userInput.graduation.match(this.let_spc) || this._userInput.graduation.match(/^\s*$/))) return false;
                return true;
        }
    }

    age_calc () {
        if ( this._userInput.day === "- - -" || this._userInput.month === "- - -" || this._userInput.year === "- - -") 
            {
                document.querySelector('[name="age"]').value = '';
                this._userInput.age = '';
                return;
            }

        if ( (this._userInput.day > 28) && (this._userInput.month === "2")) 
            {
                document.querySelector('[name="age"]').value = '';
                this._userInput.age = '';
                return;
            }
        
        if ( (this._userInput.day > 30) && (
            this._userInput.month === "4"
            || this._userInput.month === "6"
            || this._userInput.month === "9"
            || this._userInput.month === "11")) 
            {
                document.querySelector('[name="age"]').value = '';
                this._userInput.age = '';
                return;
            }

        let diffYear = new Date().getFullYear() - this._userInput.year;
        let diffMonth = (new Date().getMonth() - this._userInput.month) + 1;
        diffMonth < 0 && (diffYear -= 1);
        (diffMonth === 0 && (new Date().getDate() < this._userInput.day)) && (diffYear -= 1);
        document.querySelector('[name="age"]').value = diffYear;
        this._userInput.age = diffYear;
    }
}