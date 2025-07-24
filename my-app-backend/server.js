/**
 * Entry point of the backend server.
 * Starts the Express app on specified port.
 */

const app = require("./app");
const PORT = process.env.PORT || 5080;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
