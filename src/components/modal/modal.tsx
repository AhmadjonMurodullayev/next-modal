"use client";
import React from "react";

interface ModalProps {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}
function Modal({ open, close, children }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full relative shadow-lg">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-lg font-bold text-gray-700 hover:text-gray-900"
        >
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
