require('dotenv').config()



const server = require("./api/server.js");

const port = process.env.PORT || 5000; // only local
const secret = process.env.SECRET_THING || 'the secret for dev'

console.log(port, secret);

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
