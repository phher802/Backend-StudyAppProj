//jshint esversion:6

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subject = new Schema(
    {
        language: {
            type: String,
            enum: ['C#', 'JavaScript', 'Python'],
            required: true
        },
        category: {
            type: String,
            enum: ['terms', 'problem examples'],
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {    
            type: String,
            required: true},
    }
)

module.exports = mongoose.model('subjects', Subject)