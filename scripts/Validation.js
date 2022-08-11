class Validation {
    constructor () {
        let $ = document.querySelector.bind(document);
        
        this._userInput = {
            fullName: '',
            nickname: '',
            email: '',
            phone: '',
            day: '',
            month: '',
            year: '',
            age: '',
            chckbx: ''
        }
    }

    get userInput() {
        return this._userInput;
    }

    set userInput(inputsObj) {
        this._userInput = inputsObj;
    }

    static validate() {
        this._userInput = {
            fullName: $('#fullName').value,
            nickname: $('#nickname').value,
            email: $('#email').value,
            phone: $('#phone').value,
            day: $('#day').value,
            month: $('#month').value,
            year: $('#year').value,
            age: $('#age').value,
            chckbx: $('#chckbx').value
        }

        for (const key in this._userInput) {
            console.log(`${key}: ${this._userInput[key]}`)
        }
    }
}