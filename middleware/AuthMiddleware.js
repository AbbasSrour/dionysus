const crypto = require("crypto");
const EmailError = require("../errors/dberrors.js").EmailError;
const db = require("../database/db");

const emailCheck = async (req, res) => {
  const email = req.body.email;
  try {
    const check = await db.query(
      "SELECT dionysus.user.user_email FROM dionysus.user WHERE dionysus.user_email = $1",
      [email]
    );
    if (check) throw new EmailError("Not Unique Email");
  } catch (error) {
    if (error instanceof EmailError) console.log("hello world");
    // console.error(error);
  }
};

const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  hashedPasswordSalt = `${salt}:${hashedPassword}`;
  return hashedPasswordSalt;
};

const unhashPassword = (password, hashedPasswordSalt) => {
  const [oldSalt, oldHashedPassword] = hashedPasswordSalt.split(":");
  const hashedPassword = crypto
    .pbkdf2Sync(password, oldSalt, 10000, 64, "sha512")
    .toString("hex");
  if (hashedPassword === oldHashedPassword) return "Wow that worked";
  else return "Fuck ME";
};

const encryptPassword = (hashedPasswordSalt) => {
  // const iv = crypto.randomBytes(16);
  // const cipher = crypto.createCipheriv("aes256", key, iv);
  // const encryptedPassword = cipher.update(hashedPasswordSalt, "utf-8", "hex");
  // const crypted = cipher.final("hex");
  // const encryptPasswordIV = crypted + ":" + iv;
  // console.log("encryptPasswordIV: " + encryptPasswordIV);
};

const decryptPassword = () => {
  // const [encryptedBlock, iv] = encryptPassword.split(":");
  // const decipher = crypto.createDecipheriv("aes256", key, iv);
  // decipher.setAutoPadding(false);
  // const decrypt = decipher.update(encryptedBlock, "hex", "utf-8");
  // const decryptedPassword = decipher.final("utf-8");
  // console.log(decryptedPassword);
};

module.exports = {
  hashPassword,
  unhashPassword,
  encryptPassword,
  decryptPassword,
  emailCheck,
};
