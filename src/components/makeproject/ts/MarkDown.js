import React from "react";
import MDEditor, {
  commands,
  ICommand,
  TextState,
  TextAreaTextApi,
} from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { InputCustom } from "../../makeporf/shared/_sharedStyle";
import styled from "styled-components";

function MarkDown({ value, setValue }) {
  return (
    <Container>
      <MDEditor
        style={{
          backgroundColor: "#393a47",
          width: "65%",
          minWidth: "55%",
          maxWidth: "65%",
          height: "600px",
          borderRadius: "10px",
          padding: "14px 0px",
          border: "1px solid #393a47",
          color: "#fff",
          boxSizing: "border-box",
        }}
        hideToolbar={true}
        defaultTabEnable={true}
        height={600}
        preview="edit"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        enableScroll={true}
        visiableDragbar={false}
      />
      {/* <hr /> */}
      <MDEditor.Markdown
        style={{
          backgroundColor: "#393a47",
          borderRadius: "10px",
          padding: "14px 14px",
          border: "1px solid #393a47",
          color: "#fff",
          height: "auto",
          overflowY: "auto",
          maxWidth: "35%",
          boxSizing: "border-box",
        }}
        source={value}
        rehypePlugins={[[rehypeSanitize]]}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 573px;
  display: flex;
`;

export default MarkDown;
