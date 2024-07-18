import React from "react";
import style from "./Button.module.css";

export function Button({ children }: any) {
  return <button className={style.button}>{children}</button>;
}
