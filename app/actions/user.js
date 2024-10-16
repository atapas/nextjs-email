"use server"

import { Subscriber } from "@/models/subs-model";

export async function updateUser(userId, formData) {
  console.log(userId);
  const name = formData.get('name');
  console.log(name);
  try {
    await Subscriber.findByIdAndUpdate(userId, {name: name})
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}