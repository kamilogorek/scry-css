const consoleReporter = require('../../../src/reporters/console-reporter')
const fixture = require('../../fixtures/reporters/console/empty')

describe('/reporters/console', () => {
  it('should return description for 0 results', () => {
    expect(consoleReporter(fixture.input)).to.deep.equal(fixture.output)
  })
})
