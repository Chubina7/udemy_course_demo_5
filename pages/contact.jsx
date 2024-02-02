import ContactForm from "@/components/contact/contactForm";
import Head from "next/head";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Send messages to me!" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
