module.exports = (temp, product) =>
{
    let output = temp.replace(/{%TEMA%}/g, product.tema);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%WEBIMAGE%}/g, product.webimage)
    output = output.replace(/{%WEBVIDEO%}/g, product.webvideo)
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION1%}/g, product.description1);
    output = output.replace(/{%DESCRIPTION2%}/g, product.description2);
    output = output.replace(/{%ID%}/g, product.id);

    //if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

    return output;

}