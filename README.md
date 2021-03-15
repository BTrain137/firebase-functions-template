# firebase-functions-template
Boilerplate for firebase functions with express as middleware

```bash
# https://firebase.google.com/docs/functions/get-started
$ firebase login
$ firebase init firestore
$ firebase init functions
```

## Adjust project
Since this is a boilerplate change the file `.firebaserc` project to the project listed. 
Or Firestore CMD has already replaced with proper file

## Test
```bash
$ npm run serve
# http://localhost:5001/<PROJECT NAME>/<REGION HOST>/api
```

## Deploy
```bash
# Will be promoted to switch over to Blaze plan. 
$ npm run deploy
```

## Production
URL of firebase function can be found on firebase project under Build > Functions
