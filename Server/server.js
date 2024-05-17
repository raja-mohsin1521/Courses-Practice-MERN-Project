const express = require("express");
const app = express();
const router = require("./Router/auth-router");
const connectdb = require('./Utils/db');
const errmiddleware = require("./Middleware/defaultError");
const cors = require('cors');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));


app.use("/api/auth", router);


app.use(errmiddleware);

const port = 5000;

connectdb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
});
