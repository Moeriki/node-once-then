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

describe('register', () => {

  it('should register EventEmitter', () => {
    onceThen.patch(EventEmitter.prototype);
    const evts = new EventEmitter();
    const promise = evts.onceThen('myEventName');
    evts.emit('myEventName');
    return promise;
  });

  it('should alias patch', () => {
    expect(onceThen.patch).toBe(onceThen.register);
  });

});
