import express from 'express';
import { Request, Response } from 'express';
import User from '../models/User.js';
import Transaction from '../models/Transaction.js';
import mongoose from 'mongoose';

const router = express.Router();

// 1. Get User Details by ID
// @ts-ignore
router.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// 2. Get Transactions for a User by ID with Filters
router.get('/users/:id/transactions', async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { status, type, from, to, page = 1, limit = 10 } = req.query;
    // console.log('userId', userId);

    const filters: any = { userId: new mongoose.Types.ObjectId(userId) };
    // console.log('filters', filters);
    if (status) filters.status = status;
    if (type) filters.type = type;
    if (from || to) {
      filters.transactionDate = {};
      if (from) filters.transactionDate.$gte = new Date(from as string);
      if (to) filters.transactionDate.$lte = new Date(to as string);
    }

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    // console.log('pageNumber', pageNumber);
    const transactions = await Transaction.aggregate([
      { $match: filters },
      { $sort: { transactionDate: -1 } }, // Sort by latest transactions
      { $skip: (pageNumber - 1) * pageSize },
      { $limit: pageSize },
    ]);
    // console.log('transactions', transactions);

    const totalTransactions = await Transaction.countDocuments(filters);
    // console.log('totalTransactions', totalTransactions);
    res.status(200).json({
      transactions,
      pagination: {
        total: totalTransactions,
        page: pageNumber,
        limit: pageSize,
        totalPages: Math.ceil(totalTransactions / pageSize),
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// 3. Get All Transactions with User Details by Filters
router.get('/transactions', async (req: Request, res: Response) => {
  try {
    const { status, type, from, to, page = 1, limit = 10 } = req.query;

    const filters: any = {};
    if (status) filters.status = status;
    if (type) filters.type = type;
    if (from || to) {
      filters.transactionDate = {};
      if (from) filters.transactionDate.$gte = new Date(from as string);
      if (to) filters.transactionDate.$lte = new Date(to as string);
    }

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);

    const transactions = await Transaction.aggregate([
      { $match: filters },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: '$user' },
      { $sort: { transactionDate: -1 } }, // Sort by latest transactions
      { $skip: (pageNumber - 1) * pageSize },
      { $limit: pageSize },
    ]);

    const totalTransactions = await Transaction.countDocuments(filters);

    res.status(200).json({
      transactions,
      pagination: {
        total: totalTransactions,
        page: pageNumber,
        limit: pageSize,
        totalPages: Math.ceil(totalTransactions / pageSize),
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
