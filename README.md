# List of Links

## Create next app
```
npx create-react-app cassandra-jamstack-app
```

## Install required packages
```
npm install axios react-router-dom --save
npm install netlify-cli --save-dev
# or install netlify globally:
sudo npm install netlify-cli --global
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
