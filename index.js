const http = require('http');
const httpie = require('httpie');
const port = process.env.PORT || 8888;

const opts = { timeout: 3000 };

const server = http.createServer(async (request, response) => {
  const [ _, username, usePledges ] = request.url.split("/");

  if (!username) {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({"error": 'username must be set.'}));
    return;
  }

  const { data } = await httpie.get('https://patreon.com/' + username, opts);
  const campaignAPI = data.match(/https:\/\/www.patreon.com\/api\/campaigns\/([0-9]+)/);

  const { data: rawData } = await httpie.get(campaignAPI[0], opts);
  const campaignData = JSON.parse(rawData)['data']['attributes'];

  const patron_count = campaignData['patron_count'].toString().match(/([0-9]+)/)[1];
  const campaign_pledge_sum = campaignData['campaign_pledge_sum']/100;

  const message = (type === "pledges")
    ? `${CURRENCY[campaignData['currency']]}${Math.floor(campaign_pledge_sum)}${(suffix || "/mo")}`
    : `${patron_count} ${(suffix || "patrons")}`;

  const res = {
    schemaVersion: 1,
    label: "patreon",
    namedLogo: "patreon",
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
