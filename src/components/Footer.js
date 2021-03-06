import React from "react";
import styled from "@emotion/styled";

import { colors, fonts, mediaQueries } from "../shared/config";
const { green, darkgreen, grey, darkgrey, beige, darkbeige, brown } = colors;
const { serif, sanserif } = fonts;
const { notMobile, largeDesktop } = mediaQueries;

const FooterContent = styled("div")`
  padding: 1em 0 3vh;
  line-height: 1.6;
  border-top: 1px solid ${darkbeige};
  width: 80vw;

  ${notMobile} {
    padding: 1em 0 3vh;
    display: flex;
    justify-content: space-between;
    width: 55vw;
  }

  ${largeDesktop} {
    width: 1000px;
  }
`;

const Tagline = styled("div")`
  color: ${darkgreen};
  font-family: ${serif};
  font-size: 15px;

  ${notMobile} {
    font-size: 18px;
  }
`;

const Links = styled("div")`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  a {
    color: ${green};
    font-family: ${sanserif};
    text-decoration: none;
    cursor: crosshair;
  }

  a:hover {
    color: ${darkgreen};
  }

  ${notMobile} {
    font-size: 17px;
    text-align: right;
  }
`;

export default function Footer() {
  return (
    <FooterContent>
      <Tagline>made with ♡ meilin cui.</Tagline>
      <Links>
        <a href="mailto:meilincui.99@gmail.com">email →</a>
        <a
          href={"https://www.linkedin.com/in/meilin-cui"}
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin →
        </a>
        <a
          href={"https://www.github.com/cuimn"}
          target="_blank"
          rel="noopener noreferrer"
        >
          github →
        </a>
      </Links>
    </FooterContent>
  );
}
