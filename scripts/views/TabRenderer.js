class TabRenderer {
    constructor(element) {
        this._element = element;
    }

    template(index) {
        return TabsObjects[index].html;
    }

    update(index) {
        this._element.innerHTML = this.template(index);
    }
}