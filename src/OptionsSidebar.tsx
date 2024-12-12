import { cn } from "clsx-for-tailwind";
import { AlignOption } from "./MenuOptions/AlignOption";
import { FontOption } from "./MenuOptions/FontOption";
import { ColorOption } from "./MenuOptions/ColorOption";
import { DarkModeOption } from "./MenuOptions/DarkModeOption";
import { ChangeFontOption } from "./MenuOptions/ChangeFontOption";
import { TextContrastOption } from "./MenuOptions/TextContrastOption";
import { ResizeOption } from "./MenuOptions/ResizeOption";
import { ScrollOption } from "./MenuOptions/ScrollOption";
import { BellOption } from "./MenuOptions/BellOption";
import { fontSizes } from "./atoms";

interface Props {
  position: "up" | "down" | "left" | "right";
}

const horizontalOuter = "h-[48rem] max-h-[48rem] min-w-[12rem] max-w-[12rem]";
const verticalOuter = "h-[12rem] max-h-[12rem] min-w-[32rem] max-w-[32rem]";
const horizontalInner = "h-[40rem] max-h-[40rem] min-w-[4rem] max-w-[4rem]";
const verticalInner = "h-[4rem] max-h-[4rem] min-w-[24rem] max-w-[24rem]";
const colorInner = "bg-BG2";
const colorOuter = "[rgba(0, 0, 0, 0)]";
//const z = "z-0";

export function OptionsSideBar(props: Props) {
  const classesOuter = cn("flex", "transition", "transition-all", colorOuter, "group", {
    [verticalOuter]: props.position == "up" || props.position == "down",
    [horizontalOuter]: props.position == "left" || props.position == "right",
    "translate-x-[2rem]": props.position == "left",
    "translate-x-[-2rem]": props.position == "right",
    "translate-y-[2rem]": props.position == "up",
    "translate-y-[-2rem]": props.position == "down",
    "hover:translate-x-[0]": props.position == "left" || props.position == "right",
    "hover:translate-y-[0rem]": props.position == "up" || props.position == "down",
    "items-start justify-center": props.position == "down",
    "flex-row items-end justify-center": props.position == "up",
    "items-center justify-end": props.position == "left",
    "items-center justify-start": props.position == "right",
  });

  const classesInner = cn(
    colorInner,
    "transition-all",
    "group-hover:bg-BG4",
    "flex",
    "justify-between",
    "content-between",
    "items-center",
    "justify-center",
    {
      "flex-row": props.position == "up" || props.position == "down",
      "flex-col": props.position == "left" || props.position == "right",
      [verticalInner]: props.position == "up" || props.position == "down",
      [horizontalInner]: props.position == "left" || props.position == "right",
    }
  );

  if (props.position == "up") {
    return (
      <div className={classesOuter}>
        <div className={classesInner}>
          <AlignOption type="left" />
          <AlignOption type="center" />
          <AlignOption type="right" />
        </div>
      </div>
    );
  } else if (props.position == "left") {
    return (
      <div className={classesOuter}>
        <div className={classesInner}>
          <FontOption size={fontSizes[4]} iconSize="32"></FontOption>
          <FontOption size={fontSizes[3]} iconSize="28"></FontOption>
          <FontOption size={fontSizes[2]} iconSize="24"></FontOption>
          <FontOption size={fontSizes[1]} iconSize="20"></FontOption>
          <FontOption size= {fontSizes[0]} iconSize="16"></FontOption>
        </div>
      </div>
    );
  } else if (props.position == "right") {
    return (
      <div className={classesOuter}>
        <div className={classesInner}>
          <ColorOption />
          <TextContrastOption />
          <ChangeFontOption />
          <DarkModeOption />
          <BellOption />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classesOuter}>
        <div className={classesInner}>
          <ResizeOption bigger={true} />
          <ScrollOption upOrDown="down" />
          <ScrollOption upOrDown="up" />
          <ResizeOption bigger={false} />
        </div>
      </div>
    );
  }
}
