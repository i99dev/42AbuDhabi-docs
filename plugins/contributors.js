const fetch = require('node-fetch')

module.exports = function () {
  return async (tree, { data }) => {
    if (data.fetchContributors) {
      const contributors = await fetch(
        'https://api.github.com/repos/i99dev/42AbuDhabi-doc/contributors'
      ).then(res => res.json())
      .catch(() => [])
      

      data.$contributors = [...new Set(contributors)]
    }
    return tree
  }
}