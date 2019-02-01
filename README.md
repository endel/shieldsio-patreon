# shields.io for Patreon

Custom endpoint to allow displaying Patreon's number of patrons or amount of pledges. It uses [shields.io's Endpoint feature](https://shields.io/#/endpoint).

This endpoint allows you to display your patreon's current number of patrons or
amount of donations per month on the platform.

**Endpoint**

Show number of patrons:

```
https://shieldsio-patreon.herokuapp.com/endel
```

Show pledges per month:

```
https://shieldsio-patreon.herokuapp.com/endel/pledges
```

**Example:**

- Endpoint: `https://shieldsio-patreon.herokuapp.com/endel/pledges`
- Endpoint encoded: `https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledges`
- Using shields.io `endpoint`/`url`: `https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledges&style=for-the-badge`
- Result: <a href="https://patreon.com/endel"><img src="https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledges&style=for-the-badge" /> </a>
## Usage

```
https://img.shields.io/badge/endpoint.svg?url=<URL>&style=<STYLE>
```

See [shields.io](https://shields.io/) for full documentation.


## License

MIT
