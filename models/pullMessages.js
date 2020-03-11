const db = require("./conn");

async function pullMessages(language, lastMessage = 0) {
  messages = await db.any(
    `SELECT * FROM chatroom WHERE id > ${lastMessage} [LIMIT { 50 }] ;`
  );
  console.log(messages);
  return messages;
}

module.exports = pullMessages;
