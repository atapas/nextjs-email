"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { toast } from "sonner"


const formSchema = z.object({
    fullName: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
});

export const SubscriptionForm = () => {
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values) {
        console.log(values);
        toast.success(`${values.fullName} subscribed successfully`);
    }

    // 3. Get the status
    const { isSubmitting, isValid } = form.formState;

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 my-4 flex flex-col items-center"
            >
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel></FormLabel>
                            <FormControl>
                                <Input
                                    className="w-[350px]"
                                    disabled={isSubmitting}
                                    placeholder="Enter name"
                                    {...field}/>
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
                            <FormLabel></FormLabel>
                            <FormControl>
                                <Input
                                    className="w-[350px]"
                                    disabled={isSubmitting}
                                    type="email"
                                    placeholder="Enter e-mail"
                                    {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={!isValid || isSubmitting} type="submit">Subscribe</Button>
            </form>
        </Form>
    );
};
