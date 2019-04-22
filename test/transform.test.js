const assert = require('assert')
const transfrom = require('../src/transform')

describe('transform function', () => {
  it('should return every third letter of the string', () => {
    assert.equal(transfrom('iamyourlyftdriver'), 'muydv')
  })

  it('should return empty string if nothing is passed', () => {
    assert.equal(transfrom(), '')
  })

  it('should return empty string if length of provided string is less then 3', () => {
    assert.equal(transfrom('am'), '')
  })

  it('should return third chacacter if string length is 4', () => {
    assert.equal(transfrom('amam'), 'a')
  })

  it('should return empty string if empty string is provided', () => {
    assert.equal(transfrom(''), '')
  })
})