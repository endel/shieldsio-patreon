const http = require('http');
const httpie = require('httpie');

const CURRENCY = { USD: "$", EUR: "€", GBP: "£" };

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
  const campaignAPI = data.match(/https:\/\/www.patreon.com\/api\/campaigns\/([0-9]+)/);

  const { data: rawData } = await httpie.get(campaignAPI[0]);
  const campaignData = JSON.parse(rawData)['data']['attributes'];

  const patron_count = campaignData['patron_count'].toString().match(/([0-9]+)/)[1];
  const campaign_pledge_sum = campaignData['campaign_pledge_sum']/100;

  const message = (type === "pledges")
    ? `${CURRENCY[campaignData['currency']]}${Math.floor(campaign_pledge_sum)}${(suffix || "/mo")}`
    : `${patron_count} ${(suffix || "patrons")}`;

  response.send({
    schemaVersion: 1,
    label: "patreon",
    namedLogo: "patreon",
    message: message,
    color: "ff5441",
    cacheSeconds: 60 * 60 * 8 // 8 hours
  });
};

