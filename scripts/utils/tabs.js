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

let certificates_dropdown = () => `
    <div class="d-flex selectedCert_container unavailable align-items-center">
        <select oninput="controller.validator.checkFavs()" name="highlighted_certificate" class="cert_dropdown form-select shadow-none border-0" aria-label="Default select example"></select>
        <input id="fav_trigger_selected" type="checkbox">
        <label for="fav_trigger_selected" onclick="controller.validator.fav_click_dropdown()" class="d-flex"><img src="./icons/heart.svg" class="align-self-center"></label>
        <img src="./icons/edit.svg" class="" onclick="controller.validator.edit()">
        <img src="./icons/delete.svg" class="" onclick="controller.validator.delete()">
    </div>
`

let moreButton = () => `
    <button type="button" class="moreButton btn btn-primary ms-auto d-flex align-items-center" onclick="controller.moreButton_clicked()">
        <img src="./icons/plus.svg" class="">More<img src="./icons/next.svg" class="moreButton_arrow">
    </button>
`;

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
                        <div class="d-flex inputCert_img-group">
                            <input type="text" name="certificates_input" oninput="controller.validator.change(controller.tabRenderer.currentTab)" class="border-0 shadow-none form-control w-100" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">
                            <input id="fav_trigger" type="checkbox">
                            <label for="fav_trigger" class="d-flex"><img src="./icons/heart.svg" class="align-self-center"></label>
                        </div>    
                    </div>
                </div>
                <div class="dropdown_button-group d-flex justify-content-between">
                    ${certificates_dropdown()}
                    ${moreButton()}
                </div>
                ${input('Team Name *', 'teamName', 'fooTeam')}
                ${input('Institution *', 'institution', 'Universidade Federal da Paraíba')}
                ${input('Graduation *', 'graduation', 'Ciências da Computação')}
            </form>`
    }
]