// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

type TAnimal = "cat" | "dog" | "bird"
enum TStatus {
  AVAILABLE = "available",
  NOTAVAILABLE = "not available",
}

interface IAvailableData {
  animal: TAnimal
  breed: string
  sterilized?: string
  location: string
  age?: number
}

interface INotAvailableData {
  message: string
  nextUpdateIn: Date
}

interface IResAvailable {
  status: TStatus.AVAILABLE
  data: IAvailableData
}

interface IResNotAvailable {
  status: TStatus.NOTAVAILABLE
  data: INotAvailableData
}

type TRes = IResAvailable | IResNotAvailable

function isAvailable(res: TRes): res is IResAvailable {
  return res.status === "available" ? true : false
}

function checkAnimalData(res: TRes): IAvailableData | string {
  if (isAvailable(res)) {
    return res.data
  } else {
    return `${res.data}, you can try in ${res.data.nextUpdateIn}`
  }
}
