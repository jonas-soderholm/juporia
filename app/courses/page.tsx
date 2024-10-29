import CourseCard from "@/components/courses/courseCard";

export default async function Courses() {
  return (
    <>
      <div className="text-3xl font-bold">Courses - Basics</div>
      <div className="flex">
        <CourseCard
          title="Basics 1.0"
          description="aosdkaoksdaos osdkaoksdaosdkosdkaoksd aosdkaoksdaosdk dkaoksdaosdkaoksd aosdkaoksdaosdkaoksdaosdkaoksd"
          image="/courses-backgrounds/basic1.jpg"
          value={50}
        />
      </div>

      <div
        className="divider"
        style={{ marginTop: "-2rem", marginBottom: "-2rem" }}
      ></div>

      <div className="flex">
        <CourseCard
          title="Basics 2.0"
          description="aosdkaoksdaosdkaoksdaosdkaoksd aosdkaoksdaosdkaoksdaosdkaoksd"
          image="/courses-backgrounds/basic2.jpg"
          value={50}
        />
      </div>

      <div
        className="divider"
        style={{ marginTop: "-2rem", marginBottom: "-2rem" }}
      ></div>

      <div className="flex">
        <CourseCard
          title="Basics 3.0"
          description="aosdkaoksdaosdkaoksdaosdkaoksd aosdkaoksdaosdkaoksdaosdkaoksd"
          image="/courses-backgrounds/basic3.jpg"
          value={50}
        />
      </div>
    </>
  );
}
