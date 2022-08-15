const days = [];
for (let i = 1; i <= 31; i++) {
    days.push(i)
}

const months = [];
for (let i = 1; i <= 12; i++) {
    months.push(i)
}

const years = [];
for (let i = 1900; i <= new Date().getFullYear(); i++) {
    years.push(i)
}

const tabs = [
    {
        completed: false,
        available: false,
        html: 
            `<form class="form0">
                ${input('Full Name *', 'fullName', 'Foo Bar')}
                ${input('Nickname', 'nickName', 'Juanito')}
        
                <div class="emailPhone-container d-flex justify-content-between">
                    ${input('Email *', 'email', 'foo@bar.com')}
                    ${input('Phone', 'phone', "(83)-00000-0000")}
                </div>
                        
                <div class="birthday-container d-flex flex-column">
                    <span>Birthday *</span>
                    <div class="d-flex justify-content-between flex-wrap">
                        ${select('Day', 'day', days)}
                        ${select('Month', 'month', months)}
                        ${select('Year', 'year', years)}
                        ${input('Age', 'age', '')}
                    </div>
                </div>

                ${checkbox('I accept the terms and privacy', 'checkbox')}
            </form>`
    },
    
    {
        completed: false,
        available: false,
        html:
            `<form class="form1">
                ${input('LinkedIn', 'linkedin', 'https://www.linkedin.com/in/foo-bar-3a0560104/')}
                ${input('GitHub *', 'github', 'https://github.com/foobar')}
            </form>`
    },
    
    {
        completed: false,
        available: false,
        html: 
            `<form class="form2 d-flex flex-column">
                <div class="cert_wrapper">
                    <div class="inputCert_container input-div input_label-div d-flex flex-column flex-nowrap">
                        <label>Certificates</label>
                        <input type="text" name="certificates" oninput="controller.validator.change(controller._tabRenderer._currentTab)" class="form-control w-100" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">
                    </div>
                </div>
                    ${moreButton()}
                ${input('Team Name *', 'teamName', 'fooTeam')}
                ${input('Institution *', 'institution', 'Universidade Federal da Paraíba')}
                ${input('Graduation *', 'graduation', 'Ciências da Computação')}
            </form>`
    }
]