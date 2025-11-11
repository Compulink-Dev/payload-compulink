'use client'
import { Button } from "@react-email/components";
import React from 'react'
import EmailForm from "./_components/EmailForm";

// Frontend example of sending the request
const sendEmail = async () => {
  const res = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: 'devcompulink@gmail.com',
      subject: 'Hello from Next.js',
      html: '<strong>This is a test email</strong>',
    }),
  });

  const data = await res.json();
  console.log(data);
};


function SendMail() {
  return (
    <div className="p-4">
      <Button
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
        href="https://example.com"
      // onClick={() => sendEmail()}
      >Send Email</Button>

      <div className="">
        <EmailForm />
      </div>
    </div>
  )
}

export default SendMail