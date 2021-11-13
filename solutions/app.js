'use strict'

import checkVisa from "./visa.js"
import checkIP from "./ip.js"
import mac from "./mac.js"

const checker = {
  rules: {
    visa: checkVisa,
    ip: checkIP,
    mac: mac
  },
  validate(str, validator) {
    return this.rules.hasOwnProperty(validator) ? this.rules[validator](str) : false;
  }
};

export default checker;