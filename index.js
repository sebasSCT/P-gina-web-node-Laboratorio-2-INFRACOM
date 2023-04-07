const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = require('./modules/replace-template');

const temaCSS = fs.readFileSync('./css/tema.css', 'utf-8');
const overviewCSS = fs.readFileSync('./css/overview.css', 'utf-8');

//SERVER ==========================

var tempOverview = fs.readFileSync(`${__dirname}/view/overview.html`, 'utf-8');
const tempTemasOPC = fs.readFileSync(`${__dirname}/view/temasOPC.html`, 'utf-8'); 
var tempTema = fs.readFileSync(`${__dirname}/view/tema.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => 
{
    console.log(req.url);

    const {query, pathname} = url.parse(req.url, true);

    //OVERVIEW
    if(pathname === '/' ||pathname === '/overview')
    {
        res.writeHead(200, {'Content-type': 'text/html'});

        const temasHtml = dataObject.map(el => replaceTemplate(tempTemasOPC, el)).join('');

        tempOverview = tempOverview.replace('{%CSS%}', overviewCSS);
        const output = tempOverview.replace('{%TEMAS%}', temasHtml);
 
        res.end(output);
    }

    //CAPA
    else if(pathname ==='/capa')
    {
        res.writeHead(200, {'Content-type': 'text/html'});

        const tema = dataObject[query.id];
        tempTema = tempTema.replace('{%CSS%}', temaCSS);
        const output = replaceTemplate(tempTema, tema);

        res.end(output);
    }

    //API
    else if (pathname === '/api')
    {

        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);

        //res.end('');
    }

    //NOT_FOUND
    else
    {
        res.writeHead(404, {
            'Content-type': 'text/html', 
            'Estado': 'chungo'
        });
        res.end('<h1>???\nNo encontrado\n???\n\n\n\n\n\na<h1>');
    }
    
});

const port = 3400;
server.listen(port, '127.0.0.1', () =>
{
    console.log('LISTEN PORT: ' + port);
});

//=================================