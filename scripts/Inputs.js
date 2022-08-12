class Inputs {
    constructor () {
        this._certificates = [
            {
                txt: ''
            }
        ];
        this.currentCertificate = 0;
        this._userInput = {
            fullName: '',
            nickName: '',
            email: '',
            phone: '',
            day: '',
            month: '',
            year: '',
            age: '',
            chckbx: '',
            linkedin: '',
            github: '',
            teamName: '',
            institution: '',
            graduation: ''
        }

        Inputs.age_calc();
    }

    submitInputs() {

        let $ = document.querySelector.bind(document);
        
        if (controller.currentTab === 0) {
            this._userInput = {
                fullName: $('[name="fullName"]').value,
                nickName: $('[name="nickName"]').value,
                email: $('[name="email"]').value,
                phone: $('[name="phone"]').value,
                day: $('[name="day"]').value,
                month: $('[name="month"]').value,
                year: $('[name="year"]').value,
                age: $('[name="age"]').value,
                chckbx: $('[name="chckbx"]').checked
            }

            console.log(this._userInput);
        }

        else if (controller.currentTab === 1) {
            this._userInput = {
                linkedin: $('[name="linkedin"]').value,
                github: $('[name="github"]').value,
            }

            console.log(this._userInput);
        }

        else {
            this._certificates[this.currentCertificate].txt = $('[name="certificates"]').value;

            this._userInput = {
                teamName: $('[name="teamName"]').value,
                institution: $('[name="institution"]').value,
                graduation: $('[name="graduation"]').value
            }

            console.log(this._userInput);
            console.log(this._certificates);
        }

        this.validateInputs();
    }

    validateInputs() {
        const age_calc = () => {
            let diffYear = new Date().getFullYear() - this._userInput.year;
            let diffMonth = (new Date().getMonth() - this._userInput.month) + 1;
            console.log(diffMonth)
            diffMonth < 0 && (diffYear -= 1);
            (diffMonth === 0 && (new Date().getDate() < this._userInput.day)) && (diffYear -= 1)
            return diffYear
        }
        if (controller.currentTab === 0) { document.querySelector('[name="age"]').value = age_calc(); }

        const email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const fullName_reg = /^[a-zA-Z\s]*$/; 
        const nickName_reg = /^[A-Za-z0-9\s_]*$/;
        const general_reg = /^[a-zA-Z0-9\s]*$/;
        const linkedin_reg = /^(http(s?):\/\/)?(www\.)?linkedin\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;
        const github_reg = /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i;
        const url_reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;


        
        this._certificates.map(cert => {
            (!cert.txt.match(url_reg) && !cert.txt.match(nickName_reg)) && console.log("Não pode certificado")
            //console.log(cert.txt)
        })

        for (const item in this._userInput) {
            switch (item) {
                case 'fullName':
                    !fullName_reg.test(this._userInput[item]) && console.log("Não pode full");
                    break;

                case 'nickName':
                    (!this._userInput[item].match(nickName_reg))
                    && console.log("Não pode nick")
                    break;

                case 'email':
                    !this._userInput[item].match(email_reg) && console.log("Não pode email")
                    break;
                
                    
                case 'phone':
                    document.querySelector('[name="phone"]')
                        .value = this._userInput[item].replace(/\D/g, '')
                        .replace(/^(\d)/, '($1')
                        .replace(/^(\(\d{2})(\d)/, '$1) $2')
                        .replace(/(\d{5})(\d{1,5})/, '$1-$2')
                        .replace(/(-\d{4})\d+?$/, '$1')
                        break;
                        
                case 'linkedin':
                    (!this._userInput[item].match(linkedin_reg) && !this._userInput[item].match(/^\s*$/)) && console.log("Não pode linkedin")
                    break;
                
                case 'github':
                    !this._userInput[item].match(github_reg) && console.log("Não pode github")
                    break;

                case 'teamName':
                    (!this._userInput[item].match(fullName_reg) || this._userInput[item].match(/^\s*$/)) && console.log("Não pode team")
                    break;
                
                case 'institution':
                    (!this._userInput[item].match(fullName_reg) || this._userInput[item].match(/^\s*$/)) && console.log("Não pode inst")
                    break;

                case 'graduation':
                    (!this._userInput[item].match(fullName_reg) || this._userInput[item].match(/^\s*$/)) && console.log("Não pode grad")
                    break;
                
            }
        }
    }

    age_calc () {
        let diffYear = new Date().getFullYear() - this._userInput.year;
        let diffMonth = (new Date().getMonth() - this._userInput.month) + 1;
        console.log(diffMonth)
        diffMonth < 0 && (diffYear -= 1);
        (diffMonth === 0 && (new Date().getDate() < this._userInput.day)) && (diffYear -= 1)
        if (controller.currentTab === 0) { document.querySelector('[name="age"]').value = diffYear; }
    }
    
    get userInput(){
        return this._userInput;
    }
   
   
    set userInput(dates){
        this.defineDates = dates;
    }
}