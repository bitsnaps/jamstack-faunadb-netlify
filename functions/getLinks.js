const axios = require('axios');
// var { Client } = require('cassandra-driver');
// const sendQuery = require('./utils/sendQuery');
const { getAllLinks } = require('./utils/linkQueries');

exports.handler = async (event, context, callback) => {

  var data = {
    statusCode: 200,
    body: JSON.stringify({ msg: '' })
  };

  // Create and configure Cassandra client
  var cql = new Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1'
  });
  cql.connect(function (err, result) {
    if (err){
      console.log('Could not connect to Cassandra server!');
      data = {
        statusCode: 404,
        body: JSON.stringify({ msg: err })
      }
    } else {
      console.log('Cassandra connected.');
      data = {
        statusCode: 200,
        body: JSON.stringify({ msg: result})
      }
    }
  });

  const res = await cql.execute(getAllLinks, [], function(err, result) {
    if (err){
      console.log(JSON.stringify({msg: err }));
      data = {
        statusCode: 404,
        body: JSON.stringify({ msg: err })
      }
      return data;
    } else {
      console.log(JSON.stringify(result.rows));
      data = {
        statusCode: 200,
        body: JSON.stringify({ msg: result.rows})
      }
      return data;
    }
  });

  return data;

};
