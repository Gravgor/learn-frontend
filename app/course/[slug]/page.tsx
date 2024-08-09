
export default function CoursePage({params}: {params: {slug: string}}) {
    return (
<div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col">
            <h1>Course: {params.slug}</h1>
        </div>
    )

}