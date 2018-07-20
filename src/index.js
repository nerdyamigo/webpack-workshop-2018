import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./footer.css"

const button = makeButton("YAY A BUTTON");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer)
console.log(
  nav(),
  makeColorStyle("cyan"),
  footer
);
