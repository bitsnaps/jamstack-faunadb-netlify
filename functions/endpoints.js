exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      endpoint: 'http://localhost:8888/api',
      getLinks: 'http://localhost:8888/api/getLinks',
      createLink: 'http://localhost:8888/api/createLink',
      updateLink: 'http://localhost:8888/api/updateLink',
      deleteLink: 'http://localhost:8888/api/deleteLink'
    })
  }
};
