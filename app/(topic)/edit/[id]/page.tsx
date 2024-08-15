import EditTopicForm from "@/components/EditTopicForm";
import TopicForm from "@/components/TopicForm";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const Edit = async ({ params }: { params: { id: string } }) => {
  const topic = await db.topic.findUnique({
    where: {
      id: params.id,
    },
  });
  
  if(!topic) return redirect("/");

  return (
    <div className="p-6 flex items-center gap-2 justify-center md:mt-16">
      <div
        className="border p-7 text-black border-slate-400 shadow-2xl rounded-md text-2xl font-semibold"
        style={{ backgroundImage: `url("/bubblesBg.avif")`, objectFit: "contain" }}
      >
        <EditTopicForm
          id={params.id}
          title={topic.title}
          description={topic.description}
          tag={topic.tag}
        />
      </div>
    </div>
  );
};

export default Edit;
