import { useAtom, useAtomValue } from "jotai";
import { SidebarButton } from "./SidebarButton";
import { currentReaderWidthAtom, readerWidthsAtom } from "../atoms";

interface ResizeOptions{
  bigger: boolean
}

export function ResizeOption(props: ResizeOptions) {

  let svgPath

  if (props.bigger){
    svgPath = "M9 4L9 11L4.5 7.5L9 4Z"
  } else {
    svgPath = "M6 11L6 4L10.5 7.5L6 11Z"
  }

  const [currentReaderWidth, setCurrentReaderWidth] = useAtom(currentReaderWidthAtom);
  const readerWidths = useAtomValue(readerWidthsAtom)

  const increaseSize = () => {
    if (currentReaderWidth >= readerWidths.length-1){
      setCurrentReaderWidth(currentReaderWidth)
    } else {
      setCurrentReaderWidth(currentReaderWidth+1)
    }
  };

  const decreaseSize = () => {
    if (currentReaderWidth <= 0){
      setCurrentReaderWidth(currentReaderWidth)
    } else {
      setCurrentReaderWidth(currentReaderWidth-1)
    }
  };

  return (
    <SidebarButton callbackFunction={props.bigger ? increaseSize : decreaseSize}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="currentColor"
      viewBox="0 0 15 15"
      className="ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100"
    >
      <path d={svgPath} />
    </svg>
    </SidebarButton>
  );
}

//<img src={zoomIn} alt="" className=" ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100 " />
