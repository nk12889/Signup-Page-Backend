const User = require('../models/users');

const signup = (req, res) => {
    const { name, email, password } = req.body;
    if(name == null || email == null || password == null){
        return res.status(400).json({err: "Bad parameters. Something is missing..."})
    }

    User.create({ name, email, password }).then(() => {
        res.status(201).json({ message: "Succesfully created new user..." })
    }).catch(err => {
        res.status(403).json(err);
    })
}