import CourseCard from "@/components/courses/CourseCard";

export default async function Courses() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">
        Cybersecurity Courses
      </h1>

      {/* Wrapper for consistent spacing */}
      <div className="space-y-4 flex flex-col items-center px-4">
        {/* Course Card 1 */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
          <CourseCard
            title="Basics 1.0"
            description="aosdkaoksdaos osdkaoksda osdkosdkaoksd aosdkaoksd aosdk "
            buttonText="5 free lessons"
            image="/courses-backgrounds/basic1.jpg"
            value={50}
            linkUrl="/public-demo/courses/cybersecurity-basics-1"
          />
        </div>

        {/* Divider */}
        <div className="divider w-[80%] sm:w-[70%] md:w-[60%] mx-auto"></div>

        {/* Course Card 2 */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
          <CourseCard
            title="Basics 2.0"
            description="aosdkaoksdao sdkaoksda osdkaoksd aosdkaoksdaos dkaok sdaosdkaoksd"
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
            description="aos dkaoksdaos dkaoksdaosdk aoksd aosdkaoksda osdkaoks daosdkaoksd"
            buttonText="Subscription needed"
            image="/courses-backgrounds/basic3.jpg"
            value={50}
            linkUrl="/sign-up"
          />
        </div>

        {/* Divider */}
        <div className="divider w-[80%] sm:w-[70%] md:w-[60%] mx-auto"></div>

        {/* Course Card 3 */}
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
          <CourseCard
            title="Cybersecurity Frameworks"
            description="aos dkaoksdaos dkaoksdao sdkaoksd aosdkaoksdaos dkaoksdaosdkaoksd"
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
