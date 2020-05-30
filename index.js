const dotenv = require('dotenv');
const express = require('express');
const app = express();


dotenv.config();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
