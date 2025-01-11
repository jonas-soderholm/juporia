"use client";

import React from "react";
import CourseCard from "@/components/courses/CourseCard";
import { allCourses } from "../data/courses/all-courses";
import { createCourseAndProgress } from "@/utils/course-progression-actions";
import { all } from "cypress/types/bluebird";

export default function AllCourses() {
  const handleCourseClick = async (courseId: number) => {
    await createCourseAndProgress(courseId);
    console.log("Course clicked:", courseId);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Courses</h1>
      <div className="flex flex-col items-center px-4">
        {allCourses.map((course, index) => (
          <div key={index}>
            <div className="flex items-center flex-row justify-center md:gap-8">
              <CourseCard
                title={course.title}
                description={course.description}
                buttonText={course.buttonText}
                image={course.image}
                value={course.value}
                linkUrl={course.linkUrl}
                onClick={() => handleCourseClick(course.id)}
              />
            </div>
            {index < allCourses.length - 1 && (
              <div className="divider w-[80%] sm:w-[70%] md:w-[60%] mx-auto"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
