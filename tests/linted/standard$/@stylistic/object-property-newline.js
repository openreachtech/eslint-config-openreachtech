'use strict'

const alpha = {
  first: '1st',
  second: '2nd', third: '3rd', // ❌ allowAllPropertiesOnSameLine:true of `object-property-newline`
}

const beta = { fourth: '4th',
  fifth: '5th', sixth: '6th' } // ❌ allowAllPropertiesOnSameLine:true of `object-property-newline`

const gamma = { seventh: '7th', eighth: '8th', ninth: '9th' } // ✅ allowAllPropertiesOnSameLine:true of `object-property-newline`

export default {
  alpha,
  beta,
  gamma,
}
