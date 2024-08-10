'use client';
import { getLesson } from "@/lib/actions/lesson";
import { useCourseContext } from "@/providers/CourseContext";
import { Lesson } from "@/types/course";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-haml";
import Image from "next/image";
import  Controlled from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark';

export default function LessonPage({ params }: { params: { lessonID: string } }) {
    const { courseId } = useCourseContext();
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [code, setCode] = useState<string>("");
    const [output, setOutput] = useState<string>("");
  
    useEffect(() => {
      getLesson(courseId, params.lessonID).then((lessonData) => {
        setLesson(lessonData);
        Prism.highlightAll(); // Podświetlanie kodu po załadowaniu lekcji
      });
    }, [courseId, params.lessonID]);
  
    const handleCodeChange = (value: string) => {
      setCode(value);
    };
  
    const getLanguageMode = () => {
      switch (lesson?.language.toLowerCase()) {
        case "javascript":
          return javascript();
        case "css":
          return css();
        case "html":
          return html();
        default:
          return javascript(); // Domyślnie JavaScript
      }
    };
  
    const executeCode = () => {
      try {
        let result = "";
        if (lesson?.language.toLowerCase() === "javascript") {
          result = eval(code);
        } else if (lesson?.language.toLowerCase() === "html") {
          result = `<iframe class="w-full h-64 border border-gray-300 rounded-lg" srcdoc="${code.replace(/"/g, '&quot;')}"></iframe>`;
        } else {
          const style = document.createElement('style');
          style.textContent = code;
          document.head.append(style);
          result = "<p class='text-pink-600'>CSS applied to the page!</p>";
        }
        setOutput(result);
      } catch (error: any) {
        setOutput(`<p class="text-red-600">Error: ${error.message}</p>`);
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col items-center">
        <header className="bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 p-8 text-white shadow-md rounded-b-3xl relative overflow-hidden w-full">
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
              Lekcja {params.lessonID}
            </h1>
            <p className="text-lg text-pink-50 max-w-2xl mx-auto drop-shadow-lg">
              Kurs ID: {courseId}
            </p>
          </div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-pink-200 rounded-full opacity-50"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-300 rounded-full opacity-30"></div>
        </header>
  
        <main className="p-6 max-w-6xl mx-auto w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {lesson ? (
            <>
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-6 flex-1">
                <h2 className="text-3xl font-semibold text-pink-600 mb-4">
                  {lesson.title}
                </h2>
                <p className="text-gray-700 text-lg mb-6">{lesson.content}</p>
                <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                  Cel lekcji
                </h3>
                <p className="text-gray-700 text-lg mb-6">{lesson.goal}</p>
                <h4 className="text-xl font-semibold text-pink-600 mb-4">Przykłady</h4>
                <ul className="space-y-4">
                  {lesson.examples.map((example, index) => (
                    <li key={index}>
                      <pre className="rounded-lg overflow-x-auto">
                        <code className={`language-${lesson.language.toLocaleLowerCase('pl')}`}>
                          {example}
                        </code>
                      </pre>
                    </li>
                  ))}
                </ul>
                <h4 className="text-xl font-semibold text-pink-600 mb-4">Zadania</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {lesson.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                <h4 className="text-xl font-semibold text-pink-600 mb-4">Wypróbuj swój kod</h4>
                <Controlled
                  value={code}
                  height="400px"
                  extensions={[getLanguageMode()]}
                  theme={oneDark}
                  onChange={(value: string) => handleCodeChange(value)}
                  className="rounded-lg border border-gray-300"
                />
                <div className="flex mt-4">
                  <button
                    onClick={executeCode}
                    className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
                  >
                    Uruchom
                  </button>
                  <span className="text-gray-500 ml-4 mt-2">Kod wykona się w konsoli</span>
                </div>
                {lesson.language.toLowerCase() === "haml" && "css" && (
                    <div className="mt-6">
                    <h4 className="text-xl font-semibold text-pink-600 mb-4">Wynik:</h4>
                    
                      <div
                        className="w-full h-64 border border-gray-300 rounded-lg"
                        dangerouslySetInnerHTML={{ __html: output }}
                      />
                  </div>)}
              </div>
            </>
          ) : (
            <p className="text-gray-700">Wczytywanie lekcji...</p>
          )}
        </main>
  
        <footer className="bg-pink-400 p-4 text-center text-white w-full mt-6">
          <p>&copy; 2024 Frontend Learning Platform. All rights reserved.</p>
        </footer>
      </div>
    );
  }
