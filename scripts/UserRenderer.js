class UserRenderer {
    constructor () {
        this.userSelected = 'User 1';
    }

    insertData (i) {
        let user = document.querySelector('[name="userSelected"]');
        document.querySelector('.basic').innerHTML = `
            ${thead('Full Name:', JSON.parse(window.localStorage.getItem(user.value)).fullName)}
            ${thead('Nickname:', JSON.parse(window.localStorage.getItem(user.value)).nickName)}
            ${thead('Email:', JSON.parse(window.localStorage.getItem(user.value)).email)}
            ${thead('Phone:', JSON.parse(window.localStorage.getItem(user.value)).phone)}
            ${thead('Age:', JSON.parse(window.localStorage.getItem(user.value)).age)}
        `

        document.querySelector('.social').innerHTML = `
            ${thead('LinkedIn:', JSON.parse(window.localStorage.getItem(user.value)).linkedin)}
            ${thead('GitHub:', JSON.parse(window.localStorage.getItem(user.value)).github)}
        `

        document.querySelector('.certificate').innerHTML = `
            ${thead('Certificates:', JSON.parse(window.localStorage.getItem(user.value)).fullName)}
            ${thead('Team Name:', JSON.parse(window.localStorage.getItem(user.value)).teamName)}
            ${thead('Institution:', JSON.parse(window.localStorage.getItem(user.value)).institution)}
            ${thead('Graduation:', JSON.parse(window.localStorage.getItem(user.value)).graduation)}
        `
    }
}