'use server';
import { Lesson } from "@/types/course";
import { getLessonById } from "../courses";

export async function getLesson(courseId: number, lessonId: string): Promise<Lesson | null> {
    const lesson = await getLessonById(courseId, Number(lessonId));
    if (!lesson) {
        return null;
    }
    return lesson;
 }