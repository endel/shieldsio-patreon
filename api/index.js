const http = require('http');
const httpie = require('httpie');

const CURRENCY = { USD: "$", EUR: "€", GBP: "£" };
const opts = { timeout: 3000 };

module.exports = async (request, response) => {
  const username = request.query.username;
  const type = request.query.type;
  const suffix = request.query.suffix;

  if (!username) {
    return response
      .status(500)
      .send({ error: "'username' must be set" });
  }

  const { data } = await httpie.get('https://patreon.com/' + username, opts);
  const campaignAPI = data.match(/https:\/\/www.patreon.com\/api\/campaigns\/([0-9]+)/);

  const { data: rawData } = await httpie.get(campaignAPI[0], opts);
  const campaignData = JSON.parse(rawData)['data']['attributes'];

  const patron_count = campaignData['patron_count'] ?? 0;
  const campaign_pledge_sum = campaignData['campaign_pledge_sum']/100 || 0;

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

