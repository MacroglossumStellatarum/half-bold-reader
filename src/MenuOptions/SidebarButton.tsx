import { useState } from "react";
import uniqid from "uniqid";

interface ButtonProps {
  callbackFunction: () => any;
}

export const SidebarButton: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = (props) => {
  const [key, setKey] = useState(uniqid("btn"))
  //const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return (
    <button
      key={key}
      className="ml-auto mr-auto w-full h-full animate-button-click opacity-0 hover:text-color1 group-hover:opacity-100"
      onClick={() => {
        setKey(uniqid("butn"));
        props.callbackFunction();
        //forceUpdate();
      }}
    >
      {props.children}
    </button>
  );
};
