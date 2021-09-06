exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      endpoints: 'http://localhost:8888/api/endpoints',
      getLinks: {url:'http://localhost:8888/api/getLinks', description: 'Get all links'},
      createLink: {url:'http://localhost:8888/api/createLink', description: 'Create a link'},
      updateLink: {url:'http://localhost:8888/api/updateLink', description: 'Update a link'},
      deleteLink: {url:'http://localhost:8888/api/deleteLink', description: 'Delete a link by ID'}
    })
  }
};
