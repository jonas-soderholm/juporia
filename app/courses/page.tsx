import CourseCard from "@/components/courses/courseCard";

export default async function Courses() {
  return (
    <>
      <div className="text-3xl font-bold">Cybersecurity Courses</div>
      <div className="flex">
        <CourseCard
          title="Basics 1.0"
          description="aosdkaoksdaos osdkaoksdaosdkosdkaoksd aosdkaoksdaosdk dkaoksdaosdkaoksd aosdkaoksdaosdkaoksdaosdkaoksd"
          buttonText="5 free lessons"
          image="/courses-backgrounds/basic1.jpg"
          value={50}
        />
      </div>

      <div
        className="divider"
        style={{ marginTop: "-3rem", marginBottom: "-3rem" }}
      ></div>

      <div className="flex">
        <CourseCard
          title="Basics 2.0"
          description="aosdkaoksdaosdkaoksdaosdkaoksd aosdkaoksdaosdkaoksdaosdkaoksd"
          buttonText="Subscription needed"
          image="/courses-backgrounds/basic2.jpg"
          value={50}
        />
      </div>

      <div
        className="divider"
        style={{ marginTop: "-3rem", marginBottom: "-3rem" }}
      ></div>

      <div className="flex">
        <CourseCard
          title="Basics 3.0"
          description="aosdkaoksdaosdkaoksdaosdkaoksd aosdkaoksdaosdkaoksdaosdkaoksd"
          buttonText="Subscription needed"
          image="/courses-backgrounds/basic3.jpg"
          value={50}
        />
      </div>
    </>
  );
}
