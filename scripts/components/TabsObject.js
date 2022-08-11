const TabsObjects = [
    {
        html: `
            <form class="form_1st">
                ${input('Full Name *', 'fullName')}
                ${input('Nickname', 'nickname')}
                <div class="email_phone-div">
                    ${input('Email *', 'email')}
                    ${input('Phone', 'phone')}
                </div>
                <div class="birthday-div">
                    <span>Birthday *</span>
                    <div class="selects-div">
                        ${select(`Day`, 'day')}
                        ${select(`Month`, 'month')}
                        ${select(`Year`, 'year')}
                        ${input('Age', 'age')}
                    </div>
                </div>
                <span class="checkbox">
                    <input type="checkbox"/>
                    <label for="">
                        I accept the terms and privacy
                    </label>
                </span>
            </form>
        `
    },
    {
        html: `
            <form class="form_2nd">
                <input type="text">
                <input type="text">
            </form>
        `
    },
    {
        html: `
            <form class="form_3rd">
                <input type="text">
                <button></button>
                <input type="text">
                <input type="text">
                <input type="text">
            </form>
        `
    },
]