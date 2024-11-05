import CourseCard from "@/components/courses/courseCard";

export default async function Courses() {
  return (
    <>
      <div className="text-3xl font-bold text-center mb-8">
        Cybersecurity Courses
      </div>

      {/* Wrapper for consistent spacing */}
      <div className="space-y-4 flex flex-col items-center px-4">
        {/* Course Card 1 */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
          <CourseCard
            title="Basics 1.0"
            description="aosdkaoksdaos osdkaoksdaosdkosdkaoksd aosdkaoksdaosdk "
            buttonText="5 free lessons"
            image="/courses-backgrounds/basic1.jpg"
            value={50}
            linkUrl="/courses/basics-1"
          />
        </div>

        {/* Divider */}
        <div className="divider w-[80%] sm:w-[70%] md:w-[60%] mx-auto"></div>

        {/* Course Card 2 */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
          <CourseCard
            title="Basics 2.0"
            description="aosdkaoksdaosdkaoksdaosdkaoksd aosdkaoksdaosdkaoksdaosdkaoksd"
            buttonText="Subscription needed"
            image="/courses-backgrounds/basic2.jpg"
            value={50}
            linkUrl="/sign-up"
          />
        </div>

        {/* Divider */}
        <div className="divider w-[80%] sm:w-[70%] md:w-[60%] mx-auto"></div>

        {/* Course Card 3 */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
          <CourseCard
            title="Basics 3.0"
            description="aosdkaoksdaosdkaoksdaosdkaoksd aosdkaoksdaosdkaoksdaosdkaoksd"
            buttonText="Subscription needed"
            image="/courses-backgrounds/basic3.jpg"
            value={50}
            linkUrl="/sign-up"
          />
        </div>
      </div>
    </>
  );
}
