<h1 align='center'>
  React share states between tabs (custom hook) 🚀
</h1>

<p align='center'>
  <a href="https://emanueljcc.github.io/react-share-states-between-tabs/" target="_blank">
    <img src="https://i.ibb.co/LRSBBcW/react-share-between-tabs.gif" width="800">
  </a>
</p>

<p align='center'>
  <a href="https://emanueljcc.github.io/react-share-states-between-tabs/" target="_blank">
    View Demo
  </a>
</p>

## Description
Library for share persistent state between tabs without redux using a custom hook

## Install

```bash
npm install --save react-share-states-between-tabs
```
OR
```bash
yarn add -D react-share-states-between-tabs
```

## Usage
Add the react-share-states-between-tabs to your main.js for a global import:

```javascript
import React from 'react'

import useShareStatesBetweenTabs from 'react-share-states-between-tabs'

const App = () => {
  const [example, setExample] = useShareStatesBetweenTabs('example', 'iam example');

  // You can also use separately if you wish.
  // const [example,] = useShareStatesBetweenTabs('example');
  // const [, setExample] = useShareStatesBetweenTabs('example');

  const handle = (data) => setItems(data);

  return (
    <h1>{example}</h1>
  );
}
```

## Documentation
The hook only receives 2 arguments:

```javascript
/**
 * {String} key name
 * {*} value
 */
const [...] = useShareStatesBetweenTabs(KEY_NAME, VALUE);
```
SIMPLE 😃

## Support
<a href="mailto:emanuelcastillo9101@gmail.com">emanuelcastillo9101@gmail.com</a>.
You can also send me a direct message on twitter
<a href="https://twitter.com/emanueljcc">@emanueljcc</a>.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Collaborators
<a href="https://github.com/emanueljcc/react-share-states-between-tabs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=emanueljcc/react-share-states-between-tabs" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License
[MIT](https://choosealicense.com/licenses/mit/) License © 2022 [Emanuel Castillo](https://github.com/emanueljcc)
