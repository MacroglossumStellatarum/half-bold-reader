import _ from "lodash";
import { OptionsSideBar } from "./OptionsSidebar";
import { useAtomValue } from "jotai";
import { darkThemeAtom} from "./atoms";
import { ReadingArea } from "./ReadingArea";
import { cn } from "clsx-for-tailwind";;
function App() {

  const darkTheme = useAtomValue(darkThemeAtom);
  
  const classes = cn(
    { darkTheme: darkTheme == true, lightTheme: darkTheme == false },
    "spelling-error-recolor",
    "h-screen",
    "whitespace-pre-wrap",
    "select-none",
    "text-FG1",
    "bg-BG1",
    "antialiased",
    "overflow-hidden",
    "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-BG1 from-0% to-[RGB(10,10,10)] to-100%"
  );

  return (
    <div className={classes}>
      <div className=" h-screen flex flex-col items-center justify-center animate-white-flash overflow-hidden ">
        <OptionsSideBar position="up"></OptionsSideBar>
        <div className="flex items-center justify-center">
          <OptionsSideBar position="left"></OptionsSideBar>
          <ReadingArea></ReadingArea>
          <OptionsSideBar position="right"></OptionsSideBar>
        </div>
        <OptionsSideBar position="down"></OptionsSideBar>
      </div>
    </div>
  );
}
export default App;
