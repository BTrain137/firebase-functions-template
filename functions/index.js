const { runWith } = require("firebase-functions");
const server = require("./server.js");

module.exports.api = runWith({ timeoutSeconds: 120 }).https.onRequest(server);
