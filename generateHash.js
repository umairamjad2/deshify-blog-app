const bcrypt = require("bcryptjs");

const run = async () => {
    const hashed = await bcrypt.hash("$2b$05$ZQnR7j/A8hxnIJHqWxyATO1unFF8aOWOVFhHYaeSejU9jCTqkmmFu", 10);
    console.log("HASH:", hashed);
};

run();