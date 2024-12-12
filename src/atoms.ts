import { atom } from "jotai";

interface ReaderWidth {
  minWidth: string;
  maxWidth: string;
}

export const fontSizes = ["text-[1rem]", "text-[1.25rem]", "text-[1.4rem]", "text-[1.75rem]", "text-[2rem]"];

export const darkThemeAtom = atom(true);
export const serifAtom = atom(true);
export const alignmentAtom = atom<"left" | "center" | "right">("center");
export const currentTextContrastAtom = atom<number>(0);
export const textContrastsAtom = atom<string[]>(["opacity-90", "opacity-85", "opacity-80", "opacity-75", "opacity-70", "opacity-65", "opacity-60"]);
export const fontSizeAtom = atom<string>(fontSizes[1]);
export const currentReaderWidthAtom = atom<number>(0);
export const readerWidthsAtom = atom<ReaderWidth[]>([
  { minWidth: "min-w-[32rem]", maxWidth: "max-w-[32rem]" },
  { minWidth: "min-w-[34rem]", maxWidth: "max-w-[34rem]" },
  { minWidth: "min-w-[36rem]", maxWidth: "max-w-[36rem]" },
  { minWidth: "min-w-[38rem]", maxWidth: "max-w-[38rem]" },
  { minWidth: "min-w-[40rem]", maxWidth: "max-w-[40rem]" },
  { minWidth: "min-w-[42rem]", maxWidth: "max-w-[42rem]" },
  { minWidth: "min-w-[44rem]", maxWidth: "max-w-[44rem]" },
  { minWidth: "min-w-[46rem]", maxWidth: "max-w-[46rem]" },
]);

// const colors = atom({
//   darkest:
// });
