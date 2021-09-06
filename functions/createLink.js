const { CREATE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {

  const { name, url, description } = JSON.parse( event.body );
  const variables = { name, url, description, archived: false};

  try {
    // here we rename createLink to createdLink
    const { createLink: createdLink } = await sendQuery( CREATE_LINK, variables);
    return formattedResponse(200, createdLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, {msg: 'Something went wrong'});
  }
};
