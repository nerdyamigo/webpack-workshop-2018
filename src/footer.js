import  {red, blue} from "./button-styles";

const top = document.createElement("div");
top.style = red;
top.innerText="I am the top of the footer" 
const bottom = document.createElement("div");
bottom.style = blue;
bottom.innerText="I am the bottom of the footer" 

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export {top, bottom, footer};
