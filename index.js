const http = require('http');
const httpie = require('httpie');
const JSDOM = require('jsdom').JSDOM;
const port = process.env.PORT || 8888;

const logoSvg = '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="666.667" height="666.667" viewBox="0 0 500.000000 500.000000"><path d="M.4 11.1c-.2.3-.3 108.2-.3 239.7V490H88l-.2-239.7-.3-239.8H44.2c-23.9 0-43.6.3-43.8.6zM305.8 11.2c-25.2 2.5-42.9 7.4-64.4 17.9-43.1 20.9-77 59.9-91.8 105.6-3.8 11.8-7.2 27.1-8.1 37.3-1.2 13.2-.7 38.6 1 45 .2.8.6 3.1.9 5 1.4 9 4.9 21.8 8.8 32 21 54.7 67.8 96.1 124.8 110.6 7.3 1.8 7.5 1.8 14.5 2.9 2.8.4 6.1.9 7.5 1.2 6.9 1.1 33.6 1 43.5-.2 10.3-1.3 29.5-5.5 34-7.5 1.1-.5 4.7-1.8 8-3 13.7-4.9 32-15.1 45.3-25.3 33.5-25.6 58.1-65.1 66.7-106.7 2.9-14.3 4-40.6 2.3-56.5-2.9-26.2-14.1-56.6-29.4-79.2-24.3-35.8-59.1-61.1-101-73.2-17.4-5.1-45.2-7.7-62.6-5.9z"/></svg>';


const server = http.createServer(async (request, response) => {
  const [ _, username, usePledges ] = request.url.split("/");

  if (!username) {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({"error": '"username" is required on query string.'}));
    return;
  }

  const { data } = await httpie.get('https://patreon.com/' + username);
  const { document } = (new JSDOM(data)).window;

  const pledges = document.querySelectorAll('h6.sc-iwsKbI');
  const message = (usePledges)
    ? pledges[1].innerHTML + "/mo"
    : pledges[0].innerHTML + " patrons";

  const res = {
    schemaVersion: 1,
    label: "patreon",
    logoSvg: logoSvg,
    logoColor: "ff5441",
    message: message,
    color: "ff5441",
    cacheSeconds: 60 * 60 * 8 // 8 hours
  }
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(res));
  response.end();
});

server.listen(port);
console.log("Listening on", port);
