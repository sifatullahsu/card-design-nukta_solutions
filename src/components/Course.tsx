import { ICourses } from '../Types'
import bookIcon from '../assets/icons/book.png'
import clockIcon from '../assets/icons/clock.png'
import usersIcon from '../assets/icons/user.png'

const Course = ({ course }: { course: ICourses }) => {
  const saveAmount = course.price.regular - course.price.sell

  return (
    <div className="p-[10px] max-w-[254px]">
      <div className="bg-white rounded-[10px] course-card">
        <img src={course.image} alt="" className="h-[157px] w-full object-cover rounded-t-[10px]" />
        <div className="p-[10px]">
          <h3 className="mb-[6px] text-black text-base font-medium leading-[normal]">{course.title}</h3>
          <p className="text-[12px] leading-[16px] text-black-2">{course.shortDescription}</p>
          <div className="mt-[10px] text-black text-[12px] flex justify-between">
            {course.price.sell > 0 ? (
              <>
                <span className="font-light line-through">{`$${course.price.regular}`}</span>
                <span className="font-medium text-primary">{`$${course.price.sell}`}</span>
                <div>
                  <span className="text-[10px] bg-highlight rounded-[100px] px-[5px] py-[2px]">
                    You save ${saveAmount}
                  </span>
                </div>
              </>
            ) : (
              <>
                <span className="font-medium text-primary">
                  {saveAmount === 0 ? 'Free' : `$${course.price.regular}`}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="text-[10px] leading-4 text-[#878787] border-t-[.5px] border-[#C9C9C9] p-[10px] flex space-x-[11px]">
          <div className="space-x-[5.442px]">
            <img src={clockIcon} alt="" className="inline" />
            <span>{course.hours} hrs</span>
          </div>
          <div className="space-x-[5.442px]">
            <img src={usersIcon} alt="" className="inline" />
            <span>{course.users}</span>
          </div>
          <div className="space-x-[5.442px]">
            <img src={bookIcon} alt="" className="inline" />
            <span>{course.module}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
