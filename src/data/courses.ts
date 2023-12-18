import img1 from '../assets/images/image-01.jpeg'
import img2 from '../assets/images/image-02.jpeg'
import img3 from '../assets/images/image-03.jpeg'

export const courses = [
  {
    _id: '1',
    title: 'This is a one line title',
    shortDescription: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
    image: img1,
    price: {
      regular: 1050,
      sell: 750
    },
    hours: 10,
    users: 308,
    module: 17
  },
  {
    _id: '2',
    title: 'This is a one line title',
    shortDescription: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
    image: img2,
    price: {
      regular: 750,
      sell: 0
    },
    hours: 10,
    users: 308,
    module: 17
  },
  {
    _id: '3',
    title: 'This is a one line title',
    shortDescription: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
    image: img3,
    price: {
      regular: 0,
      sell: 0
    },
    hours: 10,
    users: 308,
    module: 17
  }
]
