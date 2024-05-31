const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/user");
const database = require("./util/database"); // Uncomment if you have a database setup

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/user/signup", userRoutes);

// Replace the following database sync logic with your actual database setup
database
    .sync({ force: true })
    .then(result => {
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(err => console.log(err));
