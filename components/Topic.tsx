"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Pencil,Trash } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Topic } from "@prisma/client";

interface TopicProps {
 topic: Topic
}



export const TopicPage = ({ topic }: TopicProps) => {
  const router = useRouter();
  const onEdit = async(id:string) =>{
   router.push(`/edit/${id}`);
 }

 const onDelete = async(id:string) =>{
   try {
    await axios.delete(`/api/topic/${id}`);
    router.refresh();
    toast.success("Topic Deleted");
   } catch (error) {
    toast.error("Something Went Wrong");
   }
 }
  return (
    <Card className="w-full shadow-2xl" style={{backgroundImage:`url("/bubblesBg.avif")`, objectFit:"contain"}}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="leading-7 pr-3 text-xl md:text-2xl font-bold">{topic.title}</CardTitle>
        <div className="flex flex-row gap-2 items-center">
          <Button
            variant="black"
            onClick={() => onEdit(topic.id)}
            className="border-slate-400 px-2 md:px-3"
          >
            <Pencil size={22} className="pr-2" />
            Edit
          </Button>
          <Button
          onClick={() => onDelete(topic.id)} 
           variant="black" className="border-slate-400 px-2 md:px-3">
            <Trash size={22} className="pr-2"/>
            Delete</Button>
        </div>
      </CardHeader>
      <CardContent className="text-gray-900 font-bold text-[15px] md:text-lg">{topic.description}</CardContent>
      <CardFooter className="flex justify-between text-[17px] font-bold">{topic.tag}</CardFooter>
    </Card>
  );
};
