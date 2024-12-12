import { useSetAtom } from "jotai";
import { SidebarButton } from "./SidebarButton";
import { fontSizeAtom } from "../atoms";

interface FontSize {
  size: string;
  iconSize: string;
}

export function FontOption(props: FontSize) {

  const setFontSizeAtom = useSetAtom(fontSizeAtom)

  let iconSize = props.iconSize


  function handleClick(){
    setFontSizeAtom(props.size)
  }

  return (
    <SidebarButton callbackFunction={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        fill="currentColor"
        className="ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100"
        viewBox="0 0 32 32"
      >
        <path d="M2 16h12v4h-4v12h-4v-12h-4zM30 8h-7.867v24h-4.266v-24h-7.867v-4h20z" />
      </svg>
    </SidebarButton>
  );
}

//<img src={zoomIn} alt="" className=" ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100 " />
