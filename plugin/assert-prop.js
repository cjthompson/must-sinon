'use strict';

function assertProp(target, name, message) {
  target.prototype[name] = function() {
    this.assert(this.actual[name], message);
  };
}

module.exports = assertProp;
