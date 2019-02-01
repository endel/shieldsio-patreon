const http = require('http');
const querystring = require('querystring');
const httpie = require('httpie');
const JSDOM = require('jsdom').JSDOM;
const port = process.env.PORT || 8888;

const server = http.createServer(async (request, response) => {
  const params = querystring.parse(request.url.substr(2));
  const username = params.username;

  if (!username) {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({"error": '"username" is required on query string.'}));
    return;
  }

  const { data } = await httpie.get('https://patreon.com/' + username);
  const { document } = (new JSDOM(data)).window;

  const pledges = document.querySelectorAll('h6.sc-iwsKbI');
  const message = (params.pledges)
    ? pledges[1].innerHTML
    : pledges[0].innerHTML;

  if (params.message) {
    message += " " + params.message;
  }

  const res = {
    "schemaVersion": 1,
    "label": "patreon",
    "message": message,
    "color": params.color || "ff5441"
  }
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(res));
});

server.listen(port);
console.log("Listening on", port);
