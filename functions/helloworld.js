exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'http://localhost:8888/api/getLinks' })
  }
};
