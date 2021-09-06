# List of Links

## Create next app
```
npx create-react-app list-links
cd list-links
npm run start
```

## Install required packages
```
npm install axios react-router-dom --save
npm install netlify-cli --save-dev
# or install netlify globally:
sudo npm install netlify-cli --global
```

## Configure a DB at Faunadb
- You need to create a free account at [Fauna](fauna.com) and create a new empty database
- Go to GraphQL panel and import `links.gql` to create a schema
- Create an API at `Security` then click `NEW KEY` on the DB you've created with Role `Server`
- Save the key at `.env` file with a variable name: `FAUNA_SECRET_KEY`.

## Run the app
Now you can run the app on netlify local dev mode using:
```
netlify dev
```

## Query FaunaDB

- Query all links:
```bash
export FAUNA_SECRET_KEY=YOUR_SECRET_KEY_HERE
curl -H "Authorization: Bearer $FAUNA_SECRET_KEY" http://localhost:8888/api/getLinks
```
- Create a new link:
```bash
curl -X POST -H "Authorization: Bearer $FAUNA_SECRET_KEY" -d '{"name":"AstraDB site","url":"http://datastax.com","description":"AstraDB site"}' http://localhost:8888/api/createLink
```
- Update a link:
```bash
curl -X PUT -H "Authorization: Bearer $FAUNA_SECRET_KEY" -d '{"_id":"308980245441020492","name":"FaunaDB site","url":"http://faunadb.com","description":"faunadb site","archived":false}' http://localhost:8888/api/updateLink
```
- Delete a link:
```bash
curl -X DELETE -H "Authorization: Bearer $FAUNA_SECRET_KEY" -d '{"id":"308980245441020492"}' http://localhost:8888/api/deleteLink
```
