const http = require('http');
const httpie = require('httpie');
const JSDOM = require('jsdom').JSDOM;

module.exports = async (request, response) => {
  const username = request.query.username;
  const type = request.query.type;
  const suffix = request.query.suffix;

  if (!username) {
    return response
      .status(500)
      .send({ error: "'username' must be set" });
  }

  const { data } = await httpie.get('https://patreon.com/' + username);
  const { document } = (new JSDOM(data)).window;

  const message = (type === "pledges")
    ? document.querySelector('[data-tag="CampaignPatronEarningStats-earnings"] h2').innerHTML + (suffix || "/mo")
    : document.querySelector('[data-tag="CampaignPatronEarningStats-patron-count"] h2').innerHTML + " " + (suffix || "patrons");

  response.send({
    schemaVersion: 1,
    label: "patreon",
    namedLogo: "patreon",
    message: message,
    color: "ff5441",
    cacheSeconds: 60 * 60 * 8 // 8 hours
  });
};

