import TopicForm from "@/components/TopicForm";
import { Card, CardContent } from "@/components/ui/card";


const AddTodo = () => {
  return (
    <div className="p-6 flex items-center gap-2 justify-center md:mt-16">
      <div className="border p-7 text-black border-slate-400 shadow-2xl rounded-md text-2xl font-semibold" style={{backgroundImage:`url("/bubblesBg.avif")`, objectFit:"contain"}}>
        <TopicForm/>
      </div>
    </div>
  );
};

export default AddTodo;
