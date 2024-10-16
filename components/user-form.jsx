"use client"

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { updateUser } from "@/app/actions/user";
import { toast } from "sonner";

const UserForm = ({ userId }) => {
  const updateUserWithId = updateUser.bind(null, userId);

  return (
    <form className="p-4 flex" action={(formData) => {
        updateUserWithId(formData);
        toast.success("updated successfully");
      }}>
      <Input className="w-1/2 mx-2" type="text" name="name" />
      <Button type="submit">Update User Name</Button>
    </form>
  );
};

export default UserForm;
