# shields.io for Patreon

Custom endpoint to allow displaying Patreon's number of patrons or amount of pledges. It uses [shields.io's Endpoint feature](https://shields.io/#/endpoint).

This endpoint allows you to display your patreon's current number of patrons or
amount of donations per month on the platform.

(The first load may take a while.)

**Endpoint parameters:**

- `username=...`: your Patreon username
- `message=...`: (optional) additional text on the right side
- `pledges=1`: (optional) show monthly pledges instead of number of patrons
- `color=...`: (optiona) color of the badge

**Example:**

- Endpoint: `https://shieldsio-patreon.herokuapp.com?username=endel&pledges=1`
- Endpoint encoded: `https%3A%2F%2Fshieldsio-patreon.herokuapp.com%3Fusername%3Dendel%26pledges%3D1`
- Using shields.io `endpoint`/`url`: `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%3Fusername%3Dendel%26pledges%3D1&style=for-the-badge`
- Result: <img
src="https://img.shields.io/badge/endpoint.svg?url=https://shieldsio-patreon.herokuapp.com?username=endel&pledges=1&style=for-the-badge" />

## Usage

```
https://img.shields.io/badge/endpoint.svg?url=<URL>&style=<STYLE>
```

See [shields.io](https://shields.io/) for full documentation.


## License

MIT
