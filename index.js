'use strict';

const toggle = require('register-toggle');

// private

function onceThen(eventName) {
  return new Promise((resolve) => {
    this.once(eventName, function () {
      const args = Array.prototype.slice.call(arguments);
      resolve(args);
    });
  });
}

const register = (object) => toggle({
  extend: object,
  properties: { onceThen },
});

// exposed

module.exports = (emitter, eventName) => onceThen.call(emitter, eventName);

module.exports.patch = register;
module.exports.register = register;
