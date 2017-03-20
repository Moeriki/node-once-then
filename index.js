'use strict';

// private

function protoOnceThen(eventName) {
  return new Promise((resolve) => {
    this.once(eventName, function () {
      const args = Array.prototype.slice.call(arguments);
      resolve(args);
    });
  });
}

// exposed

function onceThen(emitter, eventName) {
  protoOnceThen.call(emitter, eventName);
}

onceThen.patch = (proto) => {
  proto.onceThen = protoOnceThen;
};

module.exports = onceThen;
