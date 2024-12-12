import { SidebarButton } from "./SidebarButton";
import { currentTextContrastAtom, textContrastsAtom } from "../atoms";
import { useAtom, useAtomValue } from "jotai";

//const lastPos = colors.length - 1

export function TextContrastOption() {

  const [currentTextContrast, setCurrentTextContrast] = useAtom(currentTextContrastAtom)
  const textContrasts = useAtomValue(textContrastsAtom)

  const cycleThroughContrastLevels = () =>{
    setCurrentTextContrast(currentTextContrast+1)
    if (currentTextContrast >= textContrasts.length-1){
      setCurrentTextContrast(0)
    }
  }

  return (
    <SidebarButton callbackFunction={cycleThroughContrastLevels}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100"
        viewBox="0 0 32 32"
      >
        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM4 16c0-6.627 5.373-12 12-12v24c-6.627 0-12-5.373-12-12z"/>
      </svg>
    </SidebarButton>
  );
}
