## feathers-community-hooks

> This module is no longer maintained.

Useful hooks provided by the Feathers community.

## Community contributions

Much of the business logic in your Feathers-based application will reside in
[Feathers hooks](https://docs.feathersjs.com/api/hooks.html) middleware.
Many of your
[cross-cutting concerns](https://stackoverflow.com/questions/23700540/cross-cutting-concern-example)
are addressed by the
[Feathers hooks collection](https://docs.feathersjs.com/api/hooks-common.html).

That collection however cannot provide everything you might need,
and there's where these hooks from the Feathers community help everyone out.
These hooks have been contributed by individual members of the Feathers community
and are being made available as-is.

We encourage the community to submit hooks they think are useful,
categorizing them in this README.
Please read the [contribution guidelines](./CONTRIBUTING.md).
See example [hook](./src/run-parallel.js) and [test](./test/run-parallel.test.js).

## Community hooks

### Transactions

- `runParallel` runs a hook function in parallel to the Feathers method call. **Has tests.**

## Documentation

Refer to [Feathersjs documentation](https://docs.feathersjs.com). 

## Installation

Run `npm install feathers-community-hooks --save` in your project folder.

## Tests

`npm test` to run tests.

## License

MIT. See LICENSE.
