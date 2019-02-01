# shields.io for patreon

This endpoint allows you to display your patreon's current number of patrons or
amount of donations per month on the platform.

**Endpoint parameters:**

- `username=...`: Your Patreon username
- `label=...`: Text on the left side
- `message=...`: (optional) additional text on the right side
- `pledges=1`: (optional) show monthly pledges instead of number of patrons
- `color=...`: Color of the badge

encodeURIComponent("http://shieldsio-patreon.herokuapp.com?username=")

Demo: <img
src="https://img.shields.io/badge/endpoint.svg?url=http%3A%2F%2Fshieldsio-patreon.herokuapp.com%3Fusername%3Dendel%26pledges%3D1&style=for-the-badge" />

## Usage

```
https://img.shields.io/badge/endpoint.svg?url=<URL>&style=<STYLE>
```

See [shields.io](https://shields.io/) for full documentation.


## License

MIT
