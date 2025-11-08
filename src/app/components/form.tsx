"use client";

import { useState } from "react";
import { Button2 } from "./Buttons";

interface FormProps {
  id?: string;
}

function Form({ id }: FormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    source: "",
    purpose: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all fields are filled
    const requiredFields = [
      "name",
      "email",
      "businessName",
      "source",
      "purpose",
    ];
    const emptyFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData].trim()
    );

    if (emptyFields.length > 0) {
      setSubmitMessage("Please fill in all required fields marked with *");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Your inquiry has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          businessName: "",
          source: "",
          purpose: "",
        });
      } else {
        const data = await response.json();
        setSubmitMessage(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-form"
      className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 bg-black text-white mx-4 sm:mx-[10%] lg:mx-[20%] border-white border-2 mb-6 md:mb-8"
    >
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 font-poppins md:mt-6 lg:mt-10">
          Take Your Brand to the Next Level
        </h1>
        <p className="mb-4 md:mb-6 max-w-md text-white font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-sans">
          Join the future of digital marketing with AI-powered content creation
          and virtual influencers.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="flex-1">
        <form className="flex flex-col gap-3 md:gap-4" onSubmit={handleSubmit}>
          <div className="relative">
            <span className="absolute -top-3.5 right-2 text-red-500 text-sm">
              *
            </span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              aria-label="Name"
              required
              className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)] w-full"
            />
          </div>
          <div className="relative">
            <span className="absolute -top-3.5 right-2 text-red-500 text-sm">
              *
            </span>
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
          </div>
          <div className="relative">
            <span className="absolute -top-3.5 right-2 text-red-500 text-sm">
              *
            </span>
            <input
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              aria-label="Business Name"
              required
              className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)] w-full"
            />
          </div>
          <div className="relative">
            <span className="absolute -top-3.5 right-2 text-red-500 text-sm">
              *
            </span>
            <input
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="Where did you hear about us"
              aria-label="Where did you hear about us"
              required
              className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)] w-full"
            />
          </div>
          <div className="relative">
            <span className="absolute -top-3.5 right-2 text-red-500 text-sm">
              *
            </span>
            <textarea
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Purpose"
              aria-label="Purpose"
              required
              rows={4}
              className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)] w-full"
            ></textarea>
          </div>
          <Button2
            disabled={isSubmitting}
            text={isSubmitting ? "Submitting..." : "Submit"}
          />

          {submitMessage && <p className="mt-4 text-center">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Form;
