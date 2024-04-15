const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Admin = require('../models/adminSchema');

// Admin Signin
// Admin Signup
router.post('/signupAdmin', async (req, res,next) => {
    try {
        const { adminName, adminPassword, cPassword, phone, email } = req.body;

        if (!adminName || !adminPassword || !cPassword || !phone || !email) {
            return res.status(400).json({ error: "Please fill in all the fields" });
        }

        if (adminPassword !== cPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const existingAdmin = await Admin.findOne({ adminName: adminName });

        if (existingAdmin) {
            return res.status(400).json({ error: "Admin already exists" });
        }

        const hashedPassword = await bcrypt.hash(adminPassword, 12);

        const newAdmin = new Admin({
            adminName: adminName,
            email: email,
            phone: phone,
            adminPassword: hashedPassword,
            cPassword: cPassword,
        });

        await newAdmin.save();

        res.status(201).json({ message: "Admin registered successfully" });

    } catch (error) {
        console.log(error);
    }
});
module.exports = router;