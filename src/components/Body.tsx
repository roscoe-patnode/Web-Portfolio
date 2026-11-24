import { useEffect, useRef, useState } from "react";
import Software from "./Software";
import Networking from "./Networking";

type View = "empty" | "software" | "networking";

function Body() {
  const [view, setView] = useState<View>("empty");
  const bodyRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // don't scroll on page load
      return;
    }
      bodyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [view]);

  const renderView = () => {
    switch (view) {
      case "software":
        return <Software />;
      case "networking":
        return <Networking />;
      case "empty":
      default:
        return <div />;
    }
  };

  return (
    <main ref={bodyRef}>
      <div className="toggle mx-auto pt-50 pb-30 max-w-xl flex justify-center items-center gap-32">
        <button
          className="hover:cursor-pointer border-4 border-btnbg bg-main font-bold font-inter py-2 px-5 text-btnbg hover:bg-main hover:text-navbg rounded-full"
          onClick={() => setView("software")}
        >
          Software
        </button>
        <button
          className="hover:cursor-pointer border-4 border-subheader font-bold font-inter py-2 px-5 text-subheader hover:bg-main hover:text-navbg rounded-full"
          onClick={() => setView("networking")}
        >
          Networking
        </button>
      </div>

      {renderView()}
    </main>
  );
}

export default Body;