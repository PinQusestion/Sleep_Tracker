import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const [formData, setFormData] = useState({
    user_name: userName,
    user_email: email,
    message: "",
  });

  return <div></div>;
}

export default page;
