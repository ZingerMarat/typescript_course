interface IFormData {
  email: string
  title: string
  text: string
  checkbox: boolean
}

const formData: IFormData = {
  email: "",
  title: "",
  text: "",
  checkbox: false,
}

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

const submitBtns = document.querySelectorAll<HTMLButtonElement>('button[type="submit"]')

submitBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()

    formData.email = (document.querySelector("#email") as HTMLInputElement).value ?? ""
    formData.title = (document.querySelector("#title") as HTMLInputElement).value ?? ""
    formData.text = (document.querySelector("#text") as HTMLTextAreaElement).value ?? ""
    formData.checkbox = (document.querySelector("#checkbox") as HTMLInputElement).checked ?? false

    if (validateFormData(formData)) {
      checkFormData(formData)
    }
  })
})

function validateFormData(data: IFormData): boolean {
  // Если каждое из свойств объекта data правдиво...
  if (Object.values(data).every((value) => value)) {
    return true
  } else {
    console.log("Please, complete all fields")
    return false
  }
}

function checkFormData(data: IFormData) {
  const { email } = data
  const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"]

  // Если email совпадает хотя бы с одним из массива
  if (emails.some((em) => em === email)) {
    console.log("This email is already exist")
  } else {
    console.log("Posting data...")
  }
}
