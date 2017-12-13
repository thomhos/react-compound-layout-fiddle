import React from "react";
import { render } from "react-dom";
import { css } from "glamor";
import { Layout, withLayout } from "./layout";

css.global("*, *:after, *:before", {
  boxSizing: "border-box"
});

css.global("html, body, #root", {
  display: "flex",
  height: "100%",
  width: "100%",
  margin: 0,
  padding: 0
});

const SidebarToggle = withLayout(({ toggle }) => (
  <button onClick={toggle}>Toggle</button>
));

const App = () => (
  <Layout defaultOpen={true} onToggle={() => console.log("toggled")}>
    <Layout.Main>
      Main Content Area
      <SidebarToggle />
    </Layout.Main>
    <Layout.Sidebar>
      Sidebar Area
      <SidebarToggle />
    </Layout.Sidebar>
  </Layout>
);

render(<App />, document.getElementById("root"));
