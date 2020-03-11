# translation-app-api
api for translationstation.net


To set up: Create a new Postgres database, run schema in new database. npm i in this directory. Create a .env file, add DB, HOST, and KEY

When running:

post: /translate/do 
body: language, message

post: /users/sign-up
body: account, email, password

post: /users/login
body: email, password

post: /phrases/add
body: account, token, language, phrase, translation

post: /phrases/retrieve
body: account, token, 

post: /phrases/remove
body: account, token, id

put: /chat/
body: account, token, message

get: /:language
returns last 50 messages

get: /:language/:afterMessage
returns messages after a certain message ID