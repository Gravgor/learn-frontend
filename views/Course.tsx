"use client";

import { useCourseContext } from "@/providers/CourseContext";
import { Course as CourseProps } from "@/types/course";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Course({
  id,
  title,
  description,
  content,
}: CourseProps) {
  const { courseId, setCourseId } = useCourseContext();

  useEffect(() => {
    setCourseId(id);
  }, [id, setCourseId]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col">
      <header className="bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 p-8 text-white shadow-md rounded-b-3xl relative overflow-hidden">
        <div className="absolute top-4 left-4">
          <Image
            src="/images/hellokitty.png"
            className="relative left-[60px] top-1 -rotate-45"
            alt="Hello Kitty"
            width={60}
            height={60}
          />
        </div>
        <div className="container mx-auto flex flex-col items-center text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tighter text-pink-50 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg text-pink-50 max-w-2xl mx-auto drop-shadow-lg">
            {description}
          </p>
        </div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-pink-200 rounded-full opacity-50"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-300 rounded-full opacity-30"></div>
      </header>
      <main className="p-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Opis Kursu
          </h2>
          <p className="text-gray-700 mb-4">{description}</p>

          <h3 className="text-xl font-semibold text-pink-600 mb-4">
            Moduły Kursu
          </h3>
          <ol className="list-decimal list-inside space-y-4">
            {content.lessons.map((lesson) => (
              <li
                key={lesson.id}
                className="p-4 rounded-lg border-2 border-gray-300 bg-white transition-colors duration-300 relative hover:bg-pink-50"
              >
                <Link
                  className="flex items-start justify-between text-gray-700 hover:text-pink-500"
                  href={`/course/${id}/lesson/${lesson.id}`}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-pink-600">
                      Lekcja {lesson.id}: {lesson.title}
                    </h4>
                    <p className="text-gray-600">{lesson.content}</p>
                  </div>
                  <button className="text-pink-500 hover:text-pink-600">
                    Przeczytaj
                  </button>
                </Link>
              </li>
            ))}
          </ol>
          <p className="text-gray-600 mt-6">
            <Link href="/" className="text-pink-500 hover:underline">
              Powróć do strony głównej
            </Link>
          </p>
        </div>
      </main>
      <footer className="bg-pink-400 p-4 text-center text-white">
        <p>&copy; 2024 Frontend Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
