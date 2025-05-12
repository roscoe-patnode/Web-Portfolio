import { Textarea } from "@headlessui/react";
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from "aws-amplify/data";
import { Dialog, DialogPanel, DialogTitle, Description } from "@headlessui/react";
import { useState, useEffect } from "react";

interface CTAProps {
  helpEmail: string;
}

const client = generateClient<Schema>();

function CallToAct({ helpEmail } : CTAProps) {
  let [isOpen, setIsOpen] = useState(false);
  let [messageSuccess, setSuccess] = useState(false);

  function close() {
    setIsOpen(false);
    setSuccess(false);
  }

  const createMessage = async(formData:FormData) => {
    try {
      await client.models.messages.create({
        name: formData.get("name")?.toString(),
        email: formData.get("email")?.toString(),
        message_content: formData.get("message_content")?.toString(),
      })
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setSuccess(false);
    }
    setIsOpen(true);
  }


  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.documentElement.style.paddingRight = '0px';
      }, 0);
    }
  }, [isOpen]);

  return (
    <>
    <div className="mx-auto pt-70 pb-30 max-w-xl">
      <div className="text-header text-4xl font-bold font-inter text-center">Send me a message!</div>
      <div className="py-5 w-auto text-center font-semibold font-inter text-project">Have a question or inquiry? Let me know!</div>
      <form action={createMessage} className="mx-auto">
        <div className="max-w-xl flex py-10">
          <div className="w-1/2 px-5 ">
            <label className="font-inter font-semibold text-hover-main" htmlFor="name">Name</label>
            <input className="w-full py-0.5 px-1" type="text" name="name" autoComplete="name" id="name" placeholder="Enter your name" required/>
            <hr className="text-subheader rounded-sm border-1"/>
          </div>
          <div className="w-1/2 px-5">
            <label className="font-inter font-semibold text-hover-main" htmlFor="email">Email</label>
            <input className="w-full py-0.5 px-1" type="email" name="email" autoComplete="email" id="email" placeholder="Enter your Email" required/>
            <hr className="text-subheader rounded-sm border-1"/>
          </div>
        </div>
        <div className="w-full px-5">
          <label className="font-inter font-semibold text-hover-main" htmlFor="message">Message</label>
          <Textarea className="w-full h-20 py-0.5 px-1" name="message_content" id="message" placeholder="What's on your mind?" required/>
          <hr className="text-subheader rounded-sm border-1"/>
        </div>
        <div className="text-center pt-10">
          <button type="submit" className="hover:cursor-pointer bg-btnbg font-bold font-inter py-2 px-5 text-btntxt text-lg hover:bg-hover-btnbg hover:text-hover-btntxt rounded-full">Send</button>
        </div>
      </form>
      <Dialog open={isOpen} onClose={close}>
        <div className="fixed inset-0 flex w-full items-center justify-center overflow-y-auto">
          <DialogPanel transition className="max-w-xl space-y-4 bg-main/60 backdrop-blur-sm duration-300 ease-out p-8 rounded-4xl">
            <DialogTitle className="font-almarai text-hover-btnbg text-2xl font-extrabold">{messageSuccess ? "Message Sent" : "Message Error"}</DialogTitle>
            <Description className="font-semibold text-pagebg text-lg font-inter">{messageSuccess ? "The message is succussfully be sent!" : "There was a problem sending the message."}</Description>
            <p className="font-inter text-gray-300 font-semibold">{messageSuccess ?
              "Thank you for your message, I will respond shortly. I look forward to discussing our work together!" : 
              "We were unable to send the message, if the problem persists please contact me directly at " + helpEmail + "."}
            </p>
            <div className="flex gap-4 pt-4 place-content-center">
              <button className="hover:cursor-pointer bg-hover-main font-bold font-inter py-2 px-5 text-hover-navbg hover:bg-main hover:text-navbg rounded-full" onClick={close}>Okay</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
    </>
  );
}

export default CallToAct;