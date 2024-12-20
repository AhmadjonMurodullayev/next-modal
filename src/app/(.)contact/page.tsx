"use client";
import Form from "@/components/form/form";
import Modal from "@/components/modal/modal";
import React from "react";

const ContactModal = () => {
  const [open, setOpen] = React.useState(true);

  const openModal = () => {
    setOpen(false);
  };
  return (
    <Modal open={open} close={openModal}>
      <Form />
    </Modal>
  );
};

export default ContactModal;
