import { useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import {
  alignmentAtom,
  currentReaderWidthAtom,
  currentTextContrastAtom,
  fontSizeAtom,
  readerWidthsAtom,
  serifAtom,
  textContrastsAtom,
} from "./atoms";

import { cn } from "clsx-for-tailwind";

type SegmenterSegment = { segment: string; index: number; input: string; isWordLike: boolean };
type TextHalf = { text: string; bold: boolean };
type WordCutInHalf = { firstPart: string; secondPart: string };

const segmenter = new (Intl as any).Segmenter([], { granularity: "word" });

function prepareTextForBolding(segmentedText: SegmenterSegment[]): TextHalf[] {
  const outputArr: TextHalf[] = [];
  for (const segment of segmentedText) {
    if (!segment.isWordLike) {
      outputArr.push({ text: segment.segment, bold: false });
    } else {
      const fullWord: WordCutInHalf = cutWordInHalf(segment.segment);
      outputArr.push({ text: fullWord.firstPart, bold: true });
      outputArr.push({ text: fullWord.secondPart, bold: false });
    }
  }
  return outputArr;
}

function cutWordInHalf(inputWord: string): WordCutInHalf {
  const length = inputWord.length;
  const lengthHalved = Math.ceil(length / 2);
  const partOne = inputWord.slice(0, lengthHalved);
  const partTwo = inputWord.slice(lengthHalved, length);
  return { firstPart: partOne, secondPart: partTwo };
}

function applyBoldToHalf(inputText: string, brightnessOfUnbolded: string) {
  const segmentedText: SegmenterSegment[] = [...segmenter.segment(inputText)];
  const preparedText: TextHalf[] = prepareTextForBolding(segmentedText);

  const outputArr = [];
  for (const [index, textHalf] of preparedText.entries()) {
    if (textHalf.bold) {
      outputArr.push(
        <span className="font-shadow-bold" key={"wrd" + index}>
          {textHalf.text}
        </span>
      );
    } else {
      outputArr.push(
        <span className={brightnessOfUnbolded} key={"wrd" + index}>
          {textHalf.text}
        </span>
      );
    }
  }
  return outputArr;
}

function handleText(
  text: string,
  unboldedBrightness: string,
  setTextareaText: React.Dispatch<React.SetStateAction<string>>,
  setJSXtext: React.Dispatch<React.SetStateAction<JSX.Element[]>>
) {
  setTextareaText(text);
  setJSXtext(applyBoldToHalf(text, unboldedBrightness));
}

const tutorialText = `Copy your text from elsewhere and paste it here. Or just type.
\nThe beginning of each word will be bolded. 
\nMouse over the sides to access various settings as well as the bells and whistles. 
\nUse your mousewhell to scroll up and down. If you lack one, mouse over the bottom of the reader and use the navigation arrows.
\nFullscreen for the best experience: 
F-11 on Windows, COMMAND+SHIFT+F on Mac`

export function ReadingArea() {
  const initialClickTriggered = useRef(false)
  const [textareaText, setTextareaText] = useState(tutorialText);
  const currentTextContrast = useAtomValue(currentTextContrastAtom);
  const textContrasts = useAtomValue(textContrastsAtom);
  const serifStatus = useAtomValue(serifAtom);
  const alignmentStatus = useAtomValue(alignmentAtom);
  const currentFontSize = useAtomValue(fontSizeAtom);
  const readerWidths = useAtomValue(readerWidthsAtom);
  const currentReaderWidth = useAtomValue(currentReaderWidthAtom);

  const boldedJSXtext = applyBoldToHalf(textareaText, textContrasts[currentTextContrast])

  const classesBoth = cn(
    "p-[3rem]",
    {
      "text-left": alignmentStatus === "left",
      "text-right": alignmentStatus === "right",
      "text-center": alignmentStatus === "center",
    },
    "transition-all",
    "scrollbar-hide",
    "col-start-1",
    "row-start-1",
    "break-words",
    "border-none",
    "focus:outline-none",
    "focus:ring-0",
    "overflow-y-scroll"
  );

  const classesTextArea = cn(classesBoth, "bg-BG3", "text-[rgba(0,0,0,0)]", "resize-none", "selection:bg-[rgb(127,127,127)]");
  const classesJSXText = cn(classesBoth, "pointer-events-none");

  function handleInitialClick(){
    if (initialClickTriggered.current === false){
      document.getElementById("readingTextArea")?.focus()
      initialClickTriggered.current = true
      setTextareaText("")
    }
  }

  return (
    <ScrollSync>
      <div
        key={"invReader" + currentReaderWidth + serifStatus + alignmentStatus}
        className={`font-regular shadow-xl h-[48rem] max-h-[48rem] box-border bg-BG3 p-[3rem] ${readerWidths[currentReaderWidth].minWidth} ${
          readerWidths[currentReaderWidth].maxWidth
        } animate-white-flash transition-all ${serifStatus ? "font-Literata" : "font-Poppins"} z-10 grid text-center ${currentFontSize} `}
      >
        <ScrollSyncPane>
          <textarea
            className={classesTextArea}
            id="readingTextArea"
            value={textareaText}
            spellCheck="false"
            onChange={(e: any) => setTextareaText(e.target.value)}
            onClick = {handleInitialClick}
          />
        </ScrollSyncPane>
        <ScrollSyncPane>
          <div
            id="readingJSX"
            className={classesJSXText}
          >
            {boldedJSXtext}
          </div>
        </ScrollSyncPane>
      </div>
    </ScrollSync>
  );
}
