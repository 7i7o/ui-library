import { type ReactNode } from "react";

export const Button = (text: ReactNode | string) => (
  <button className="my-button">{text}</button>
);
