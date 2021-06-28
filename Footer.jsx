import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright by shapeAI @ {currYear}</p>
    </footer>
  );
}

export default Footer;