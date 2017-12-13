import React from "react";
import glamorous from "glamorous";

const SidebarElement = glamorous.div(
  {
    display: "flex",
    overflow: "hidden",
    transition: "width 200ms ease-out"
  },
  props => ({
    width: props.expanded ? 200 : 0
  })
);

const SidebarWrapper = glamorous.div({
  display: "flex",
  alignItems: "flex-start",
  padding: 10,
  minWidth: 200
});

/* Define compound components */
export function Sidebar({ sidebarExpanded, children }) {
  return (
    <SidebarElement expanded={sidebarExpanded}>
      <SidebarWrapper>{children}</SidebarWrapper>
    </SidebarElement>
  );
}
