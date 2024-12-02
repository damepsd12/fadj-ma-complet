const express = require('express')
const mongoose = require('mongoose')

// const cors = require('cors')
const EmployeeSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    confirmpassword: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel