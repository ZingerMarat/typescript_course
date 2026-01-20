var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
var submitBtns = document.querySelectorAll('button[type="submit"]');
submitBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        var _a, _b, _c, _d;
        e.preventDefault();
        formData.email = (_a = document.querySelector("#email").value) !== null && _a !== void 0 ? _a : "";
        formData.title = (_b = document.querySelector("#title").value) !== null && _b !== void 0 ? _b : "";
        formData.text = (_c = document.querySelector("#text").value) !== null && _c !== void 0 ? _c : "";
        formData.checkbox = (_d = document.querySelector("#checkbox").checked) !== null && _d !== void 0 ? _d : false;
        if (validateFormData(formData)) {
            checkFormData(formData);
        }
    });
});
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if (Object.values(data).every(function (value) { return value; })) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if (emails.some(function (em) { return em === email; })) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
