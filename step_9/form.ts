interface IForm {
  login: string
  password: string
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации
type CreateValidationData<T> = {
  [P in keyof T]: { isValid: boolean; errorMsg?: string }
}

type TValidationData = CreateValidationData<IForm>

const validationData: TValidationData = {
  login: { isValid: false, errorMsg: "At least 3 characters" },
  password: { isValid: true },
}
