import React from "react";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "200px"
      }}
    >
      <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
        This application showcases inline CSS styling in React components.
      </p>
    </main>
  );
}

export default MainContent;
