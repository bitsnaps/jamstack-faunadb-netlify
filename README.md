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
