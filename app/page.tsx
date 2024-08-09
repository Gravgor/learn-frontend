import { CourseComponent } from "@/components/CourseComponent";
import { courses } from "@/lib/courses";
import { Course } from "@/types/course";
import Image from "next/image";




export default function Home() {
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
            Ola uczy się programować
          </h1>
          <p className="text-lg text-pink-50 max-w-2xl mx-auto drop-shadow-lg">
            Jasna cholera pozdrawiam
          </p>
        </div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-pink-200 rounded-full opacity-50"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-300 rounded-full opacity-30"></div>
      </header>
      <main className="flex-grow p-10 bg-pink-50">
        <h2 className="text-4xl font-bold mb-8 text-pink-600 text-center">
          Dostępne kursy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <CourseComponent key={course.id} course={course} />
          ))}
        </div>
      </main>
      <footer className="bg-pink-200 p-6 text-center text-pink-700 rounded-t-lg shadow-inner">
        <p>
          &copy; 2024 Ola uczy się programować. Wszystkie prawa zastrzeżone.
        </p>
      </footer>
    </div>
  );
}
