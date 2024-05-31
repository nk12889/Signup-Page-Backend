const express = require('express');

const { DataTypes } = require("sequelize");

const database = require("../util/database");

const Expense = database.define('user', {
    expense: {
        type: Number,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = User;