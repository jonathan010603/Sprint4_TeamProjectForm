let input = (label, name, placeholder) => `
    <div class="input-group mb-3 input_label-div d-flex flex-column flex-nowrap">
        <label>${label}</label>
        <input type="text" name=${name} oninput="inputs.submitInputs()" class="form-control w-100" placeholder=${placeholder}>
    </div>
`;

let select = (label, name, options) => `
    <div class="select_label-div d-flex flex-column flex-nowrap">
        <label>${label}</label>
        <select name=${name} oninput="inputs.submitInputs()" class="form-select" aria-label="Default select example">
            ${options.map (option => `<option>${option}</option>`)}
        </select>
    </div>
`;

let chck = (label, name) => `
    <div class="form-check">
        <input oninput="inputs.submitInputs()" class="form-check-input" name=${name} type="checkbox">
        <label class="form-check-label" for="flexCheckChecked">${label}</label>
    </div>
`

let btn = () => `
    <button oninput="inputs.submitInputs()" class="btn btn-primary align-self-end">More</button>
`