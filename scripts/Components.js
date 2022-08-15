let input = (label, name, placeholder) => `
    <div class="input-div input_label-div d-flex flex-column flex-nowrap">
        <label>${label}</label>
        <input type="text" ${label === "Age" && 'readonly="readonly"'} name=${name} oninput="controller.validator.change(controller._tabRenderer._currentTab)" class="form-control w-100" placeholder=${placeholder}>
    </div>
`;

let select = (label, name, options) => `
    <div class="select-div d-flex flex-column flex-nowrap">
        <label>${label}</label>
        <select name=${name} oninput="controller.validator.change(controller._tabRenderer._currentTab)" class="form-select" aria-label="Default select example">
            <option selected}>- - -</option>    
            ${options.map (option => `<option>${option}</option>`)}
        </select>
    </div>
`;

let checkbox = (label, name) => `
    <div class="checkbox-div form-check d-flex align-items-center align-self-start p-0">
        <input oninput="controller.validator.change(controller._tabRenderer._currentTab)" class="form-check-input m-0" name=${name} type="checkbox">
        <label class="form-check-label">${label}</label>
    </div>
`;

let moreButton = () => `
    <button onclick="" class="btn btn-primary align-self-end">More</button>
`;

let thead = (label, field_value) => `
    <thead>
        <tr>
            <th scope="col">${label}</th>
            <th scope="col">${field_value}</th>
        </tr>
    </thead>
`

let userListSelect = name => `
    <select oninput="controller.userRenderer.insertData()" name=${name} class="userSelector form-select" aria-label="Default select example">
        ${Object.keys(localStorage).map(user => 
            `<option>${user}</option>`
        )}
    </select>
`;

let user_list_layout = () => `
    <div class="d-flex flex-column justify-content-between w-100 h-100 unavailable">
        ${userListSelect('userSelected')}
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
`