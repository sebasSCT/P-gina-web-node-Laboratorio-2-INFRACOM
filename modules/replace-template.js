module.exports = (temp, tema) =>
{
    let output = temp.replace(/{%TEMA%}/g, tema.nombre);
    output = output.replace(/{%IMAGE%}/g, tema.image);
    output = output.replace(/{%WEBIMAGE%}/g, tema.webimage);
    output = output.replace(/{%WEBIMAGE1%}/g, tema.webimage1);
    output = output.replace(/{%WEBVIDEO%}/g, tema.webvideo);
    output = output.replace(/{%DESCRIPTION1%}/g, tema.description1);
    output = output.replace(/{%DESCRIPTION2%}/g, tema.description2);
    output = output.replace(/{%DESCRIPTION3%}/g, tema.description3);

    return output;

}