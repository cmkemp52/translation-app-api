const db = require("./conn");
const translate = require("./translate.js");

async function pullMessages(language, lastMessage = 0) {
  messages = await db.any(
    `SELECT * FROM chatroom WHERE id > ${lastMessage} LIMIT 50;`
  );
  console.log(messages);
  for (message in messages) {
    newMessage = await translate(language, messages[message].message);
    messages[message] = newMessage;
  }
  return messages;
}

module.exports = pullMessages;
