import React from "react";
import glamorous from "glamorous";

const staticStyles = {
  display: "flex",
  flexGrow: 1,
  alignItems: "flex-start",
  padding: 10,
  background: "white"
};

const MainElement = glamorous.div(staticStyles);

export function Main({ children }) {
  return <MainElement>{children}</MainElement>;
}
