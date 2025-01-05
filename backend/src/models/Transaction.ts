import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      enum: ['success', 'pending', 'failed'],
    },
    type: {
      type: String,
      required: true,
      enum: ['debit', 'credit'],
    },
    transactionDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
