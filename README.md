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

## Query FaunaDB

Query all links:
```bash
export FAUNA_SECRET_KEY=YOUR_SECRET_KEY_HERE
curl -H "Authorization: Bearer $FAUNA_SECRET_KEY" http://localhost:8888/api/getLinks
```
Create a new link:
```bash
curl -X POST -H "Authorization: Bearer $FAUNA_SECRET_KEY" -d '{"name":"AstraDB site","url":"http://datastax.com","description":"AstraDB site"}' http://localhost:8888/api/createLink
```

## Setup database
```
CREATE KEYSPACE links WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE links ;
CREATE TABLE link(id uuid PRIMARY KEY, url text, name text, description text, archived boolean);
```
## Query examples:
- Insert a row:
```
INSERT INTO link(id, name, url, description, archived) VALUES (uuid(), 'James Website', 'http://jamesquick.com', 'This is James Website', false );
```
- Select all rows:
```
SELECT * FROM links.link;
```
