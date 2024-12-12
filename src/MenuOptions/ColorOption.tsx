import { useRef } from "react";
import { SidebarButton } from "./SidebarButton";

const colors = ["252, 71, 26", "252, 26, 94", "26, 207, 252", "26, 252, 184", "207, 252, 26", "252, 184, 26"]
const lastPos = colors.length - 1
const root = document.documentElement;


export function ColorOption() {

  const currentIndex = useRef(0);

  const cycleThroughColors = () => {
    currentIndex.current++
    if (currentIndex.current > lastPos){
      currentIndex.current = 0
    }
    console.log(currentIndex.current)
    root.style.setProperty('--COLOR1SOURCE', colors[currentIndex.current]);
  };

  return (
    <SidebarButton callbackFunction={cycleThroughColors}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100"
        viewBox="0 0 32 32"
      >
        <path d="M32 18v-12h-6v-2c0-1.1-0.9-2-2-2h-22c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h22c1.1 0 2-0.9 2-2v-2h4v8h-18v4h-1c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-10c0-0.552-0.448-1-1-1h-1v-2h18zM24 6h-22v-2h22v2z" />
      </svg>
    </SidebarButton>
  );
}

//<img src={zoomIn} alt="" className=" ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100 " />
