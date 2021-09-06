const GET_LINKS = `
# Write your query or mutation here
query {
  allLinks {
    data {
      name
      url
      description
      _id
      archived
    }
  }
}`;

module.exports = {
  GET_LINKS,
}
