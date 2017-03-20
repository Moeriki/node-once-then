<p align="center">
  <h3 align="center">once-then</h3>
  <p align="center">Add onceThen to your emitter to convert an event to a Promise.<p>
  <p align="center">
    <a href="https://www.npmjs.com/package/once-then">
      <img src="https://img.shields.io/npm/v/once-then.svg" alt="npm version">
    </a>
    <a href="https://travis-ci.org/Moeriki/node-once-then">
      <img src="https://travis-ci.org/Moeriki/node-once-then.svg?branch=master" alt="Build Status"></img>
    </a>
    <a href="https://coveralls.io/github/Moeriki/node-once-then?branch=master">
      <img src="https://coveralls.io/repos/github/Moeriki/node-once-then/badge.svg?branch=master" alt="Coverage Status"></img>
    </a>
    <a href="https://david-dm.org/moeriki/node-mappr">
      <img src="https://david-dm.org/moeriki/node-once-then/status.svg" alt="dependencies Status"></img>
    </a>
  </p>
</p>

## Installation

```
npm install --save once-then
```

## Usage

```js
const EventEmitter = require('events').EventEmitter;
const onceThen = require('once-then');
```

`onceThen` works with the NodeJS event emitter or any events implementation that has its `once` method backwards compatible with NodeJS events.

```js
const emitter = new EventEmitter();

onceThen(emitter, myEventName').then(() => {
  //
});

emitter.emit('myEventName');
```

### Patch

```js
onceThen.patch(EventEmitter);

const emitter = new EventEmitter();

emitter.onceThen('myEventName').then(() => {
  //
});

emitter.emit('myEventName');
```
