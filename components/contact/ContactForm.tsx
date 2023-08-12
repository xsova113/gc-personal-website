import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().nonempty({ message: "This field is required" }),
  email: z
    .string()
    .nonempty({ message: "This field is required" })
    .regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
      message: "Invalid email address",
    }),
  message: z.string().nonempty({ message: "This field is required" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const isValid = await form.trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <Form {...form}>
      <motion.form
        variants={{
          hidden: { opacity: 0, x: -50 },
          show: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
        method="POST"
        action="https://formsubmit.co/bd17236c209884c56a9ed0aac12382b7"
        onSubmit={onSubmit}
        className="space-y-8 md:w-3/5 w-full mx-auto"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="NAME"
                  {...field}
                  disabled={isSubmitting}
                  className="dark:bg-slate-900 bg-slate-100"
                />
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
              <FormControl>
                <Input
                  placeholder="EMAIL"
                  {...field}
                  disabled={isSubmitting}
                  className="dark:bg-slate-900 bg-slate-100"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="MESSAGE"
                  {...field}
                  disabled={isSubmitting}
                  className="dark:bg-slate-900 bg-slate-100"
                  rows={5}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 },
          }}
          initial={"hidden"}
          whileInView={"show"}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            disabled={isSubmitting}
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-500/80"
          >
            Send Message
          </Button>
        </motion.div>
      </motion.form>
    </Form>
  );
};

export default ContactForm;
