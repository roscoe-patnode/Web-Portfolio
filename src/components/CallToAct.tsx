import { Textarea } from "@headlessui/react";

function CallToAct() {
  return (
    <>
    <div className="mx-auto py-50 w-xl">
      <div className="text-header text-4xl font-bold text-center">Send me a message!</div>
      <div className="py-5 w-auto text-center font-semibold text-project">Have a question or inquiry? Let me know!</div>
      <form className="mx-auto">
        <div className="w-xl flex py-10">
          <div className="w-sm px-5"><label>Name <input className="w-full py-0.5 px-0.5" type="text" name="name" placeholder="Enter your name"/></label><hr className="text-subheader rounded-sm border-1"/></div>
          <div className="w-sm px-5"><label>E-Mail <input className="w-full py-0.5 px-0.5" type="text" name="email" placeholder="Enter your E-Mail address"/></label><hr className="text-subheader rounded-sm border-1"/></div>
        </div>
        <div className="w-full px-5"><label>Message <Textarea className="w-full h-20 py-0.5 px-0.5" placeholder="What's on your mind?"></Textarea><hr className="text-subheader rounded-sm border-1"/></label></div>
        <div className="text-center py-10"><button className="hover:cursor-pointer bg-btnbg text-md font-bold py-2 px-5 text-btntxt hover:bg-hover-btnbg hover:text-hover-btntxt rounded-full" type="submit">Send</button></div>
      </form>
    </div>
    </>
  );
}

export default CallToAct;