"use client";

import formBg from "@/public/form-bg.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useConfettiStore } from "@/hooks/use-confetti-store";

interface EditFormProps {
  id: string;
  title: string;
  description: string;
  tag: string;
}

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at leasts 3 characters long",
  }),
  description: z.string().min(6, {
    message: "Description must be at leasts 6 characters long",
  }),
  tag: z.string().min(3, {
    message: "Tag must be at leasts 3 characters long",
  }),
});

const EditTopicForm = ({ id, title, description, tag }: EditFormProps) => {
  const confetti = useConfettiStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
      description: description,
      tag: tag,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.patch(`/api/topic/${id}`, {
        values,
      });
      router.push("/");
      router.refresh();
      toast.success("Topic Updated");
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h1 className="md:text-3xl">Edit Task</h1>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[17px] md:text-xl">Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. goal, task" {...field} className="text-[16px] md:text-lg" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[17px] md:text-xl">Description</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. details" {...field} className="text-[16px] md:text-lg" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[17px] md:text-xl">Tag</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. sports, work" {...field} className="text-[16px] md:text-lg" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="black" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default EditTopicForm;
