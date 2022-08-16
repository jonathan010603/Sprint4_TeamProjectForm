class UserRenderer {
    constructor () {
        this.userSelected = 'User 1';
    }

    tableRow (label, field_value) { return `
        <thead>
            <tr>
                <th scope="col">${label}</th>
                <th scope="col">${field_value}</th>
            </tr>
        </thead>
    `}

    userListDropdown (name) { return `
        <select oninput="controller.userRenderer.insertData()" name=${name} class="userSelector form-select" aria-label="Default select example">
            ${Object.keys(localStorage).map(user => `<option>${user}</option>`)}
        </select>
    `}

    user_list () { return `
        <div class="d-flex flex-column justify-content-between w-100 h-100">
            ${this.userListDropdown('selectedUser')}
            <table class="basic table">
            </table>
            
            <table class="social table">
            </table>

            <table class="certificate table">
            </table>
            <button class="next-btn btn btn-primary align-self-end d-flex align-items-center" onclick="controller.new_user()">
                New User<img src="./icons/next.svg" class="">
            </button>
        </div>
    `}

    insertData () {
        let user = document.querySelector('[name="selectedUser"]');
        document.querySelector('.basic').innerHTML = `
            ${this.tableRow('Full Name:', JSON.parse(window.localStorage.getItem(user.value)).fullName)}
            ${this.tableRow('Nickname:', JSON.parse(window.localStorage.getItem(user.value)).nickName)}
            ${this.tableRow('Email:', JSON.parse(window.localStorage.getItem(user.value)).email)}
            ${this.tableRow('Phone:', JSON.parse(window.localStorage.getItem(user.value)).phone)}
            ${this.tableRow('Age:', JSON.parse(window.localStorage.getItem(user.value)).age)}
        `

        document.querySelector('.social').innerHTML = `
            ${this.tableRow('LinkedIn:', JSON.parse(window.localStorage.getItem(user.value)).linkedin)}
            ${this.tableRow('GitHub:', JSON.parse(window.localStorage.getItem(user.value)).github)}
        `

        document.querySelector('.certificate').innerHTML = `
            ${this.tableRow('Certificates:', this.getCertificates(user.value))}
            ${this.tableRow('Team Name:', JSON.parse(window.localStorage.getItem(user.value)).teamName)}
            ${this.tableRow('Institution:', JSON.parse(window.localStorage.getItem(user.value)).institution)}
            ${this.tableRow('Graduation:', JSON.parse(window.localStorage.getItem(user.value)).graduation)}
        `
    } 

    getCertificates (user) {
        let certificatesArray = JSON.parse(window.localStorage.getItem(user)).certificates;
        let certificate_renderer = document.createElement('div');
        certificatesArray.map(certificate => {
            let cert_span = document.createElement('span');
            cert_span.innerHTML = `${certificate.data}`;
            certificate_renderer.appendChild(cert_span);
        })
        return `<div class="d-flex flex-column align-items-start">${certificate_renderer.innerHTML}</div>`;
    }
}