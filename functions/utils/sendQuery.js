var { Client } = require('cassandra-driver');
require('dotenv').config();

module.exports = async (query, variables) => {

  // Create and configure Cassandra client
  var cql = new Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1'
  });

  /*const { data } = await axios({
    url: 'https://graphql.fauna.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
    },
    data: {
      query,
      variables,
    }
  });*/

  return cql;

}
