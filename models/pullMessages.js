const db = require("./conn");
const translate = require("./translate.js");

async function pullMessages(language, lastMessage = 0) {
  messages = await db.any(
    `SELECT * FROM chatroom WHERE id > ${lastMessage} LIMIT 50;`
  );
  console.log(messages);
  if (messages.length > 0) {
    for (message in messages) {
      newMessage = await translate(language, messages[message].message);
      console.log(newMessage);
      messages[message].message =
        newMessage.data.translations[0].translatedText;
    }
  }
  return messages;
}

module.exports = pullMessages;
