/**
 * configuration file
 */
import express from "express";
import vetRoute from'./vet.js';
import visRoute from'./visitor.js';
import adminRoute from'./admin.js';
import empRoute from'./employee.js';
import volRoute from'./volunteer.js';
import adoptRoute from'./adopter.js';
import donRoute from'./donator.js';

// start the router
const router = express.Router();

// vet actions routes
router.use("/vet", vetRoute);

// visitor actions routes
router.use("/visitor", visRoute);

// employee actions routes
router.use("/employee", empRoute);

// volunteer actions routes
router.use("/volunteer", volRoute);

// adopter actions routes
router.use("/adopter", adoptRoute);

// donator actions routes
router.use("/donator", donRoute);

// admin actions routes
router.use("/admin", adminRoute);

export default router;