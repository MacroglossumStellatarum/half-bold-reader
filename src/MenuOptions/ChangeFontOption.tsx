import { useAtom } from "jotai";
import { SidebarButton } from "./SidebarButton";
import { serifAtom } from "../atoms";

export function ChangeFontOption() {
  const [serifStatus, setSerifStatus] = useAtom(serifAtom);

  function handleClick() {
    setSerifStatus(!serifStatus)
  }

  const serifPath = (
    <path d="M 23.75,20.5833L 52.25,20.5833L 52.25,26.9167L 41.1667,26.9167L 41.1667,58.5833L 34.8333,58.5833L 34.8333,26.9167L 23.75,26.9167L 23.75,20.5833 Z " />
    );
    const sansPath = (
    <path d="M 29,58L 29,55.0833C 32.4978,55.0833 35,53.2083 35,49.25L 35,29C 35,25.9394 32.7481,25 29.6875,25C 26.6269,25 24.5,25.9394 24.5,29L 21,29L 21,20L 55,20L 55,29L 51.5,29C 51.5,25.9394 49.373,25 46.3125,25C 43.2519,25 41,25.9394 41,29L 41,49.25C 41,53.2083 43.5022,55.0833 47,55.0833L 47,58L 29,58 Z " />
  );

  return (
    <SidebarButton callbackFunction={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        fill="currentColor"
        className="ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100"
        viewBox="0 0 76 76"
      >
        {serifStatus ? serifPath : sansPath}
      </svg>
    </SidebarButton>
  );
}

//<img src={zoomIn} alt="" className=" ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100 " />
