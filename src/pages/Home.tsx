import { ICourses } from '../Types'
import Course from '../components/Course'
import { courses } from '../data/courses'

const Home = () => {
  return (
    <div className="container py-5">
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[5px]">
            {courses.map((course: ICourses) => (
              <Course key={course._id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
