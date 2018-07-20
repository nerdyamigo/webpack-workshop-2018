const makeImage = (url) => {
    const image = document.createElement("img");
    image.height = "100";
    image.width = "100";
    image.src = url;
    return image;
}

export default makeImage;