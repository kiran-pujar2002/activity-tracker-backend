const express = require("express");
const auth = require('../middleware/auth');

const {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
  createBatchExpenses,
  
} = require("../controllers/expense");

const router = express.Router();

router.use(auth);

// Create expense
router.post("/create", createExpense);

router.post("/create-batch", createBatchExpenses);

// Get all expenses
router.post("/list", getAllExpenses);

// Get expense by ID
router.post("/get-by-id", getExpenseById);

// Update expense
router.post("/update", updateExpense);

// Delete expense
router.post("/delete", deleteExpense);

module.exports = router;
