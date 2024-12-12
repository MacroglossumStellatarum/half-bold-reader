import { useSetAtom } from "jotai";
import { SidebarButton } from "./SidebarButton";
import { alignmentAtom } from "../atoms";

interface AlignType {
  type: "left" | "right" | "center";
}

const left = "M0 2h32v4h-32zM0 8h20v4h-20zM0 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z";
const right = "M0 2h32v4h-32zM12 8h20v4h-20zM12 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z";
const center = "M0 2h32v4h-32zM6 8h20v4h-20zM6 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z";



export function AlignOption(props: AlignType) {

  const setAlignmentStatus = useSetAtom(alignmentAtom) 

  let alignmentType

  if (props.type == "left") {
    alignmentType = left;
  } else if (props.type == "right") {
    alignmentType = right;
  } else if (props.type == "center") {
    alignmentType = center;
  }


  function handleClick(){
    setAlignmentStatus(props.type)
  }

  return (
    <SidebarButton callbackFunction={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100"
        viewBox="0 0 32 32"
      >
        <path d={alignmentType} />
      </svg>
    </SidebarButton>
  );
}

//<img src={zoomIn} alt="" className=" ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100 " />
