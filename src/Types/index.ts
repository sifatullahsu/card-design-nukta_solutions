export type ICourses = {
  _id: string
  title: string
  shortDescription: string
  image: string
  price: {
    regular: number
    sell: number
  }
  hours: number
  users: number
  module: number
}
