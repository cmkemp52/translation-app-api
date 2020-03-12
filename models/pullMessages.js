const db = require("./conn");
const translate = require("./translate.js");

async function pullMessages(language, lastMessage = 0) {
  try {
    messages = await db.any(
      `SELECT * FROM chatroom WHERE id > ${lastMessage} LIMIT 50;`
    );
    if (messages.length > 0) {
      for (message in messages) {
        newMessage = await translate(language, messages[message].message);
        console.log(messages[message]);
        console.log(newMessage.data.translations[0].translatedText);
        messages[message].message =
          newMessage.data.translations[0].translatedText;
      }
    }
    return messages;
  } catch (err) {
    return err;
  }
}

module.exports = pullMessages;
