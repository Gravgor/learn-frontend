
import { getCourseById } from '@/lib/courses';
import Course from '@/views/Course';
import Image from 'next/image';


export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await getCourseById(Number(params.slug));
    if (!course) {
        return <div>Course not found</div>;
    }
    return <Course id={course.id} title={course.title} description={course.description} content={course.content}/>;
}
