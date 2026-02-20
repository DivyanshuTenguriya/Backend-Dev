const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs.txt');

const logger = (req, res, next) => {
  const logData = `${req.method} ${req.url} - ${new Date().toISOString()}\n`;

  try {
    fs.appendFileSync(logFilePath, logData);
  } catch (err) {
    console.error("Error writing log:", err);
  }

  next();
};

module.exports = logger;