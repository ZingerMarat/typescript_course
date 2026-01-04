const userData = {
  isBirthDay: true,
  ageData: 40,
  userNameData: "John",
}

const createError = (msg: string) => {
  throw new Error(msg)
}

const logBrtMsg = ({
  isBirthDay,
  ageData,
  userNameData,
}: {
  isBirthDay: boolean
  ageData: number
  userNameData: string
}): string => {
  if (isBirthDay) {
    return `Congrats ${userNameData.toLocaleUpperCase()}, age: ${ageData + 1}`
  } else {
    return createError("Error")
  }
}

console.log(logBrtMsg(userData))

const department: string[] = ["dev", "design", "market"]
