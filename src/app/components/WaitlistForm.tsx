"use client";

import { useState } from "react";
import { Button2 } from "./Buttons";
import { useAuth } from "@clerk/nextjs";
import { token } from "@/sanity/env";

function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    profession: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const { getToken } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetSubmitMsg = (msg = "") => {
    setSubmitMessage(msg);
    setTimeout(() => {
      setSubmitMessage("");
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all fields are filled
    const requiredFields = ["name", "email", "company", "profession"];
    const emptyFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData].trim()
    );

    if (emptyFields.length > 0) {
      resetSubmitMsg("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
    //   const token = await getToken();
      console.log("Auth Token:", token);

      const response = await fetch(
        "https://qauxkyzyewewihnwoelv.supabase.co/rest/v1/waitlist",
        {
          method: "POST",
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhdXhreXp5ZXdld2lobndvZWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NDY0NTksImV4cCI6MjA3OTIyMjQ1OX0.PteZ1hdsYCO12S5SmKMaVEJ5BTDV1wRZKL5JYTUOPsU",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            full_name: formData.name,
            email: formData.email,
            profession: formData.profession,
            company: formData.company,
          }),
        }
      );

      if (response.ok) {
        resetSubmitMsg("Successfully joined the waitlist!");
        setFormData({
          name: "",
          email: "",
          company: "",
          profession: "",
        });
      } else {
        const errorData = await response.json();
        resetSubmitMsg(
          errorData.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      resetSubmitMsg("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      <h2 className="text-5xl font-semibold mb-2 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
        Join the
      </h2>
      <h2 className="text-7xl uppercase font-semibold mb-2 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
        Waitlist
      </h2>
      <h3 className="text-sm sm:text-base text-gray-300 mb-4">
        Get early access, product updates, and exclusive invites.
      </h3>
      {/* <p className="text-gray-400">Fill out the form below to secure your spot.</p> */}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          aria-label="Name"
          required
          className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)] w-full"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          aria-label="Email"
          required
          className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)] w-full"
        />
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          aria-label="Company"
          required
          className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)] w-full"
        />
        <input
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          placeholder="Profession"
          aria-label="Profession"
          required
          className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)] w-full"
        />
        <Button2
          disabled={isSubmitting}
          text={isSubmitting ? "Submitting..." : "Submit"}
        />
        {submitMessage && <p className="mt-4 text-center">{submitMessage}</p>}
      </form>
    </div>
  );
}

export default WaitlistForm;
