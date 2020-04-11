# shields.io for Patreon <a href="https://patreon.com/endel"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledgesssss&style=for-the-badge" /> </a>

Custom endpoint to allow displaying Patreon's number of patrons or amount of pledges. It uses [shields.io's Endpoint feature](https://shields.io/#/endpoint).

## ATTENTION

Please deploy your own version of this on your own Heroku account. My version is
hosted on Heroku Free Plan, and can be unavaialble as soon as my usage expires
(usually in the last few days of each month).

<a href="https://heroku.com/deploy?template=https://github.com/endel/shieldsio-patreon">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>


## Usage:

- Endpoint: `https://shieldsio-patreon.herokuapp.com/endel/pledges`
- Endpoint encoded: `https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledges`
- Using shields.io `endpoint`/`url`: `https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledges&style=for-the-badge`
- Result: <a href="https://patreon.com/endel"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledgesssss&style=for-the-badge" /> </a>

See [shields.io's endpoint](https://shields.io/#/endpoint) for full documentation.


## Examples

Show number of patrons:

```
https://shieldsio-patreon.herokuapp.com/endel
```

<a href="https://patreon.com/endel"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel&style=for-the-badge" /> </a>

Show pledges per month:

```
https://shieldsio-patreon.herokuapp.com/endel/pledges
```

<a href="https://patreon.com/endel"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.herokuapp.com%2Fendel%2Fpledgesssss&style=for-the-badge" /> </a>


## License

MIT
