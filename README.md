# October 2020 - UPDATE

- There is an alternative way to display the amount of patrons on your Patreon campaign [described here](https://github.com/endel/shieldsio-patreon/issues/8#issuecomment-700144629).
- I've turned off the `https://shieldsio-patreon.herokuapp.com` endpoint.
- If you'd like to continue using the endpoint implemented on this repository, click the link below to deploy it on your Heroku account, or deploy it on your own VPS server.

<a href="https://heroku.com/deploy?template=https://github.com/endel/shieldsio-patreon">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

# shields.io for Patreon <a href="https://patreon.com/endel"><img src="https://img.shields.io/badge/dynamic/json?logo=patreon&style=for-the-badge&color=%23e85b46&label=Patreon&query=data.attributes.patron_count&suffix=%20supporters&url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F365642" /></a>

Custom endpoint to allow displaying Patreon's number of patrons or amount of pledges. It uses [shields.io's Endpoint feature](https://shields.io/#/endpoint).

## Examples

Show number of patrons:

- Endpoint URL: `https://shieldsio-patreon.herokuapp.com/endel`
- Image SRC: `https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel&style=for-the-badge`

<a href="https://patreon.com/endel"><img src="preview/patrons.svg?raw=1" /> </a>

Show pledges per month:

- Endpoint URL: `https://shieldsio-patreon.herokuapp.com/endel/pledges`
- Image SRC: `https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledgesssss&style=for-the-badge`


<a href="https://patreon.com/endel"><img src="preview/pledges.svg?raw=1" /> </a>

## License

MIT
