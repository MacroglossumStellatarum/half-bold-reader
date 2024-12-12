import { SidebarButton } from "./SidebarButton";

interface ResizeOptions {
  upOrDown: "up" | "down";
}

export function ScrollOption(props: ResizeOptions) {
  let choice;

  if (props.upOrDown == "up") {
    choice = "M4 9H11L7.5 4.5L4 9Z";
  } else {
    choice = "M4 6H11L7.5 10.5L4 6Z";
  }

  function handleClick() {
    //const target = event.target as HTMLAnchorElement
    const readingTextAreaElement = document.getElementById("readingTextArea");

    if (!readingTextAreaElement) return;

    const scrollBy = props.upOrDown == "up" ? -50 : 50;

    const scrollPos = readingTextAreaElement?.scrollTop;
    readingTextAreaElement.scrollTop = scrollPos + scrollBy;

    console.log(readingTextAreaElement.scrollTop)
  }

  return (
    <SidebarButton callbackFunction={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        className="ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100"
        viewBox="0 0 15 15"
      >
        <path d={choice} />
      </svg>
    </SidebarButton>
  );
}

//<img src={zoomIn} alt="" className=" ml-auto mr-auto h-full transition-all opacity-0 group-hover:opacity-100 " />
