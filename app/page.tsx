import { TopicsPage } from "@/components/Topics";
import { db } from "@/lib/db";

export default async function Home() {
  const Topics = await db.topic.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
 
  return (
    <div className="flex items-center justify-center gap-2 text-sm md:text-lg">
      <TopicsPage Topics={Topics} />
    </div>
  );
}
