const db = require("./conn"),
  { tokenCheck } = require("./user");

async function receiveMessage(account, token, message) {
  try {
    await tokenCheck(token, account);
    await db.none(
      `INSERT INTO chatroom (name, message) VALUES ('${account}','${message}');`
    );
    return "success";
  } catch (err) {
    return "error";
  }
}

module.exports = receiveMessage;
