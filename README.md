This runs a server (by default, at `localhost:3030`) which exposes two endpoints: `/api/metadata/get`, and `/api/metadata/set`. To add some data, POST the JSON to the set endpoint:​​

```
​​wget http://localhost:3030/api/metadata/set --header "Content-Type: application/json" --post-data '{"metadata": {"name": "TestData 1"}}'
```

This returns some JSON including an `_id` (the MongoDB key, incidentally). Send that to the get endpoint to get your original JSON metadata back. Or, send any JSON to query the DB using MongoDB query syntax.
​​
​I don't currently authorize, which means that as long as you have the IP, you can post data, and as long as you know the IP, you can get it back. I started implementing tokens, but... for the purposes of this demo, they're out of scope.

Full setup from scratch, to running this service (on Ubuntu):​

```
​​​sudo apt-get install nodejs
wget https://install.meteor.com | sh
git clone git@github.com:j6k4m8/ocpmeta.git ocpmeta
cd ocpmeta
meteor --port=3030
​```
