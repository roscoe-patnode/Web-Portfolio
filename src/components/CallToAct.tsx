import { Textarea } from "@headlessui/react";
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function CallToAct() {
  const createMessage = async(formData:FormData) => {
    console.log(formData.get("name")?.toString(), formData.get("email")?.toString(), formData.get("message_content")?.toString())
    await client.models.messages.create({
      name: formData.get("name")?.toString(),
      email: formData.get("email")?.toString(),
      message_content:  formData.get("message_content")?.toString(),
    })
  }
  return (
    <>
    <div className="mx-auto pt-70 pb-30 max-w-xl">
      <div className="text-header text-4xl font-bold text-center">Send me a message!</div>
      <div className="py-5 w-auto text-center font-semibold text-project">Have a question or inquiry? Let me know!</div>
      <form action={createMessage} className="mx-auto">
        <div className="max-w-xl flex py-10">
          <div className="w-1/2 px-5 ">
            <label className="font-semibold text-hover-main">Name</label>
            <input className="w-full py-0.5 px-1" type="text" name="name" placeholder="Enter your name" required/>
            <hr className="text-subheader rounded-sm border-1"/>
          </div>
          <div className="w-1/2 px-5">
            <label className="font-semibold text-hover-main">Email</label>
            <input className="w-full py-0.5 px-1" type="text" name="email" placeholder="Enter your Email" required/>
            <hr className="text-subheader rounded-sm border-1"/>
          </div>
        </div>
        <div className="w-full px-5">
          <label className="font-semibold text-hover-main">Message</label>
          <Textarea className="w-full h-20 py-0.5 px-1" name="message_content" placeholder="What's on your mind?" required/>
          <hr className="text-subheader rounded-sm border-1"/>
        </div>
        <div className="text-center pt-10">
          <button type="submit" className="hover:cursor-pointer bg-btnbg text-md font-bold py-2 px-5 text-btntxt hover:bg-hover-btnbg hover:text-hover-btntxt rounded-full">Send</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default CallToAct;