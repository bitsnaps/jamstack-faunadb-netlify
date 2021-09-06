const { GET_LINKS } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {

  var data = formattedResponse(404, { msg: 'Error result' });

  try {
    const res = await sendQuery(GET_LINKS);
    data = res.allLinks.data;
    return formattedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, {msg: 'Something went wrong'});
  }
};
