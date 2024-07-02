import React from "react";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import { StichingRed } from "../../util/Stiching";

const Contact = () => {
  return (
    <div className="sectionContent">
      <ContactHeader />
      <ContactForm />
      <StichingRed />
    </div>
  );
};

export default Contact;
