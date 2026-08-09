// envWithDotenv.js
// Needs: npm install dotenv
// (We haven't covered npm in depth yet — full episode coming soon.
//  For now, just know: this command downloads a small helper package.)

require('dotenv').config();

console.log("Port:", process.env.PORT);
console.log("Database URL:", process.env.DB_URL);
console.log("API Key:", process.env.API_KEY);