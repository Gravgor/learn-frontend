"use client";

import Image from "next/image";
import Link from "next/link";

export interface Course {
  id: number;
  title: string;
  description: string;
}

export interface CourseProps {
  course: Course;
}

export const CourseComponent: React.FC<CourseProps> = ({ course }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 relative transition-all">
      <div className="absolute top-[-20px] right-[-20px] w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center shadow-md">
        <Image
          src="/images/hellokitty.png"
          alt="Hello Kitty"
          width={30}
          height={30}
        />
      </div>
      <h3 className="text-xl font-bold text-pink-700 mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <Link
        href={`/course/${course.id}`}
        className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-700 transition duration-300"
      >
        Rozpocznij kurs
      </Link>
      <div className="absolute bottom-[-15px] left-[-15px] w-10 h-10 bg-indigo-200 rounded-full"></div>
      <div className="absolute bottom-[-20px] right-[-20px] w-12 h-12 bg-pink-200 rounded-full"></div>
    </div>
  );
};
