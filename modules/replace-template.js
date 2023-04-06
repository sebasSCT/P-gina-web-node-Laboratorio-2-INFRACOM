module.exports = (temp, product) =>
{
    let output = temp.replace(/{%TEMA%}/g, product.nombre);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%WEBIMAGE%}/g, product.webimage);
    output = output.replace(/{%WEBIMAGE1%}/g, product.webimage1);
    output = output.replace(/{%WEBVIDEO%}/g, product.webvideo);
    output = output.replace(/{%DESCRIPTION1%}/g, product.description1);
    output = output.replace(/{%DESCRIPTION2%}/g, product.description2);
    output = output.replace(/{%DESCRIPTION3%}/g, product.description3);
    output = output.replace(/{%ID%}/g, product.id);

    //if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

    return output;

}