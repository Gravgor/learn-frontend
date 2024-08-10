// types/course.ts

export interface Lesson {
  id: number;
  title: string;
  content: string;
  goal: string;
  examples: string[];
  language: string;
  tasks: string[];
  sources: string[];
  editor: boolean;
}



export interface Course {
  id: number;
  title: string;
  description: string;
  content: {
    lessons: Lesson[];
  }
}
