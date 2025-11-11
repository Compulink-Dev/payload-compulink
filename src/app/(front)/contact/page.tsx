"use client";
import React, { useState } from "react";
import ContactMap from "./_components/contactMap";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import Hero from "../_components/hero";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
          setFormData({ name: "", email: "", message: "", phone: "" }); // Clear form
          setLoading(false); // Stop loading
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          setLoading(false); // Stop loading
        }
      );
  };

  return (
    <div>
      <Hero backImage="comm2.jpg" image="" />
      <div className="">
        <div className="h-full py-8 my-8 w-full flex justify-center items-center">
          <div className="h-full w-full md:w-2/4 mx-4 md:mx-0 p-8 rounded-lg border border-red-500">
            <p className="font-bold text-xl text-center py-2">Contact Us</p>
            <form onSubmit={sendEmail} action="" className="">
              <div className="flex flex-col mt-6 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <p className="font-bold text-sm col-span-1">Name</p>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <p className="font-bold text-sm col-span-1">Email</p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <p className="font-bold text-sm col-span-1">Phone Number</p>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <p className="font-bold text-sm col-span-1">Message</p>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-100 rounded py-2 px-4 w-full outline-none border-none col-span-3"
                  ></textarea>
                </div>
                <div className="flex items-end">
                  <Button
                    type="submit"
                    className="bg-red-600 hover:bg-bg-red-400"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="text-2xl text-blue-600 font-semibold uppercase">
            Where You Can Find Us
          </h1>
          <div>{/* ContactMap or Google Maps Integration */}</div>
        </div>
        <ContactMap />
      </div>
    </div>
  );
}

export default Contact;
