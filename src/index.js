import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./footer.css"
import buttonStyles from "./button.css"
import imageUrl from "../icon.jpg"
import makeImage from "./image.js"




const image = makeImage(imageUrl);
const button = makeButton("YAY A BUTTON");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(image)
document.body.appendChild(footer)
console.log(
  nav(),
  makeColorStyle("cyan"),
  footer
);
