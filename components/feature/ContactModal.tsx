"use client";
import { GeistMono } from "geist/font/mono";
import submitContactForm from "@/actions/submitContactForm";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Draggable from "react-draggable";

type ContactModalProps = {
  visible: boolean;
  toggleModal: Dispatch<SetStateAction<boolean>>;
};

export default function ContactModal({
  visible,
  toggleModal,
}: ContactModalProps) {
  const modalRef = useRef<any>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        toggleModal(false);
      }
    };

    if (modalRef) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggleModal]);

  const formVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.form
          action={submitContactForm}
          ref={modalRef}
          id="contact-modal"
          className="w-4/5 lg:w-[650px] flex flex-col fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent actual form submission
            submitContactForm(new FormData(e.currentTarget));
          }}
        >
          <form
            action={submitContactForm}
            ref={modalRef}
            id="contact-modal"
            className="w-4/5 lg:w-[650px] flex flex-col fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50"
          >
            <div
              id="contact-modal-header"
              className="py-2 px-4 bg-trace-ash bg-opacity-30 backdrop-blur-md flex rounded-tl-xl rounded-tr-xl relative items-center"
            >
              <button
                className="w-[14px] h-[14px] bg-[#FC5552] rounded-full absolute"
                onClick={() => toggleModal(false)}
              ></button>
              <label
                htmlFor="contact-modal"
                className="uppercase text-sm text-demo-smoke mx-auto"
              >
                Contact
              </label>
            </div>
            <div
              className={`${GeistMono.className} h-[400px] flex flex-col p-4 gap-3 bg-[#1E1E1E] text-demo-smoke`}
            >
              <div className="flex flex-col">
                <p className="text-sm font-light">jasonzubiate.com</p>
                <p className="text-sm font-light">
                  ©{new Date().getFullYear()}
                </p>
              </div>
              <p className="text-sm font-light">
                Links:{" "}
                <a
                  href="https://instagram.com/jasonzubiate"
                  target="_blank"
                  className="underline"
                >
                  Instagram
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/jasonzubiate"
                  target="_blank"
                  className="underline"
                >
                  LinkedIn
                </a>
                ,{" "}
                <a
                  href="https://www.spinnin.studio"
                  target="_blank"
                  className="underline uppercase"
                >
                  Spinnin
                </a>
              </p>
              <p className="text-sm font-light">
                For project requests, collabs, or whatever really, drop me a
                message below.
              </p>
              <p className="text-sm font-light">Your message:</p>
              <div className="flex gap-3 items-center">
                <div className="w-1 h-1 bg-lime-green animate-ping rounded-full"></div>
                <input
                  name="message"
                  type="text"
                  className="bg-inherit text-sm font-light focus:outline-none w-full"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const currentForm = e.currentTarget.form;
                      if (currentForm) {
                        submitContactForm(new FormData(currentForm));
                      }
                      setTimeout(() => {
                        toggleModal(false);
                      }, 500);
                    }
                  }}
                />
              </div>
            </div>
            <div className="p-3 bg-[#1E1E1E] flex justify-end rounded-bl-xl rounded-br-xl border-t border-t-[#353535]">
              <button
                type="submit"
                onClick={() => {
                  setTimeout(() => {
                    toggleModal(false);
                  }, 250);
                }}
                className="uppercase text-sm rounded-full bg-demo-smoke hover:bg-gray-200 text-cod-gray px-4 py-2 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
