/* eslint-env jest */

'use strict';

const EventEmitter = require('events').EventEmitter;

const onceThen = require('./');

// tests

it('should resolve with event args', () => {
  const evts = new EventEmitter();
  const promise = onceThen(evts, 'myEventName');
  evts.emit('myEventName');
  return promise;
});

describe('patch', () => {

  it('should patch EventEmitter', () => {
    onceThen.patch(EventEmitter.prototype);
    const evts = new EventEmitter();
    const promise = evts.onceThen('myEventName');
    evts.emit('myEventName');
    return promise;
  });

});
