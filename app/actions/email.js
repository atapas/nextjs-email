"use server"

import { Subscriber } from "@/models/subs-model";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

import { revalidatePath } from "next/cache";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  try {
    const email = formData["email"];
    const fullName = formData["fullName"];
    console.log(email, fullName);

    if (!email) return null;

    const foundSubscriber = await Subscriber.findOne({
      email: email,
    }).lean();

    console.log(foundSubscriber);

    if (!foundSubscriber) {
      const subscribersPayload = {
        name: fullName,
        email
      }

      await Subscriber.create(subscribersPayload);

      const message = `Dear ${fullName}, Thank you for subscribing to tapaScript's Newsletter. The door towards the abundance of knowldge is now open. Enjoy.`;

      const sentInfo = await resend.emails.send({
        from: "noreply@noreply.tapascript.io",
        to: email,
        subject: "Congratulations!!! You have subscribed to tapaScript's Newsletter.",
        react: EmailTemplate({ message }),
      });

    } else {
      throw new Error(`${email} subscribed to tapaScript already!`)
    }

    revalidatePath('/');
    
  } catch (e) {
    throw new Error(e.message)
  }
}