# react-native-example-package

react-native-example-package

## Installation

```sh
npm install react-native-example-package
```

## Usage

```js
import {
  add,
  divide,
  equals,
  multiply,
  power,
  subtract,
} from 'react-native-example-package';

// ...

const addResult = await add({ a: 3, b: 7 });
const subtractResult = await subtract({ a: 3, b: 7 });
const multiplyResult = await multiply({ a: 3, b: 7 });
const divideResult = await divide({ a: 3, b: 7 });
const powerResult = await power({ x: 10 });
const equalsResult = await equals({ a: 2, b: 2 });
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
