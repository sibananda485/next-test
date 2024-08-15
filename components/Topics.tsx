import { TopicPage } from "./Topic";
import { db } from "@/lib/db";
import { Button } from "./ui/button";
import Link from "next/link";
import { Topic } from "@prisma/client";

interface TopicsProps {
  Topics: Topic[];
}

export const TopicsPage = async ({ Topics }: TopicsProps) => {
  return (
    <>
      {Topics.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 gap-5 px-4 md:px-0 my-16">
          {Topics.map((topic) => (
            <TopicPage key={topic.id} topic={topic} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 mt-16">
          <h1 className="text-2xl  md:text-4xl text-white font-bold">
            No Topics yet
          </h1>
          <Link href="/addtopic">
            <Button>Add Topic</Button>
          </Link>
        </div>
      )}
    </>
  );
};
