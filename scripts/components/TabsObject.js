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

/*[ {value: 01},
    {value: 02}, {value: 03}, {value: 04}, {value: 05}, {value: 06}, 
    {value: 07}, {value: 08}, {value: 09}, {value: 10}, {value: 11}, 
    {value: 12}, {value: 13}, {value: 14}, {value: 15}, {value: 16}, 
    {value: 17}, {value: 18}, {value: 19}, {value: 20}, {value: 21}, 
    {value: 22}, {value: 23}, {value: 24}, {value: 25}, {value: 26}, 
    {value: 27}, {value: 28}, {value: 29}, {value: 30}, {value: 31}, 
]*/

/*const months = [
    {value: 01}, {value: 02}, {value: 03},
    {value: 04}, {value: 05}, {value: 06},
    {value: 07}, {value: 08}, {value: 09},
    {value: 10}, {value: 11}, {value: 12}
]

const year = 1;*/

const TabsObjects = [
    {
        html: `
            <form class="form_1st">
                ${input('Full Name *', 'fullName', 'Foo Bar')}
                ${input('Nickname', 'nickName', 'Juanito')}

                <div class="email_phone-div">
                    ${input('Email *', 'email', 'foo@bar.com')}
                    ${input('Phone', 'phone', "(83)-00000-0000")}
                </div>
                
                <div class="birthday-div">
                    <span>Birthday *</span>
                    <div class="selects-div">
                        ${select('Day', 'day', days)}
                        ${select('Month', 'month', months)}
                        ${select('Year', 'year', years)}
                        ${input('Age', 'age', '18')}
                    </div>
                </div>
                ${chck('I accept the terms and privacy', 'chckbx')}
            </form>
        `
    },
    {
        html: `
            <form class="form_2nd">
                ${input('LinkedIn', 'linkedin', 'https://www.linkedin.com/in/foo-bar-3a0560104/')}
                ${input('GitHub *', 'github', 'https://github.com/foobar')}
            </form>
        `
    },
    {
        html: `
            <form class="form_3rd">
                <div class="certificates-div">
                    ${input('Certificates', 'certificates', 'https://www.linkedin.com/in/foo-bar-3a0560104/')}
                    ${btn()}
                </div>
                ${input('Team Name *', 'teamName', 'fooTeam')}
                ${input('Institution *', 'institution', 'Universidade Federal da Paraíba')}
                ${input('Graduation *', 'graduation', 'Ciências da Computação')}
            </form>
        `
    },
]