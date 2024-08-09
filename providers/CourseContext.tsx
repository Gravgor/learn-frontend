import { createContext, useContext, useState, ReactNode } from "react";

interface CourseContextType {
  courseId: number;
  setCourseId: React.Dispatch<React.SetStateAction<number>>;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function useCourseContext() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
}

export function CourseProvider({ children }: { children: ReactNode }) {
  const [courseId, setCourseId] = useState<number>(0);

  return (
    <CourseContext.Provider value={{ courseId, setCourseId }}>
      {children}
    </CourseContext.Provider>
  );
}
