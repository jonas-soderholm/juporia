import CourseCard from "@/components/courses/courses/CourseCard";
import { allCourses } from "../data/courses/all-courses";

export default async function AllCourses() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Courses</h1>

      {/* Centered Button */}
      <div className="flex justify-center mb-6">
        <button className="btn-custom-primary-reverse">
          Subscribe To Unlock All Courses
        </button>
      </div>

      {/* Wrapper for consistent spacing */}
      <div className="flex flex-col items-center px-4">
        {allCourses.map((course, index) => (
          <div key={index}>
            {/* Course Card */}
            <div className="flex items-center flex-row justify-center md:gap-8">
              <CourseCard
                title={course.title}
                description={course.description}
                buttonText={course.buttonText}
                image={course.image}
                value={course.value}
                linkUrl={course.linkUrl}
              />
            </div>

            {/* Divider */}
            {index < allCourses.length - 1 && (
              <div className="divider w-[80%] sm:w-[70%] md:w-[60%] mx-auto"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
