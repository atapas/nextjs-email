"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { sendEmail } from "@/app/actions/email"
import { toast } from "sonner"

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export const SubscriptionForm = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        fullName:"",
        email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    try {
      await sendEmail(values);
      toast.success(`${values.fullName} subscribed successfully`);
    } catch (e) {
      console.error(e);
      toast.error(e.message);
    }
  }

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-4 my-4 flex flex-col items-center">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input 
                  className="w-[350px]"
                  disabled={isSubmitting}
                  placeholder="Enter Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  type="email"
                  className="w-[350px]"
                  disabled={isSubmitting}
                  placeholder="Enter Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          disabled={!isValid || isSubmitting} 
          type="submit">Submit</Button>
      </form>
    </Form>
  )
}

