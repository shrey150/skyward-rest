
const { ensure, grab, nums, trimValues } = require('./helpers')
const { compose }                        = require('../helpers')

const grabSummary = $ => $('td[class="nPtb"]').get()

const onlyParents = td => ensure(td)(0)(0)()
const formBreakdown = td => ({
  lit: grab(td)(0)(0)(0)('data'),
  grade: grab(td)(1)(0)('data'),
  percent: grab(td)(2)(0)('data')
})
const breakItDown = summary =>
  summary.filter(onlyParents)
    .map(formBreakdown)
    .map(trimValues(/\w+/))
    .map(nums)
const nullIfEmpty = breakdown => (breakdown.length > 0) ? breakdown : null

module.exports = compose(
  nullIfEmpty,
  breakItDown,
  grabSummary
)