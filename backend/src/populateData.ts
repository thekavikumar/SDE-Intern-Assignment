import mongoose from 'mongoose';
import { faker } from '@faker-js/faker'; // Updated faker import
import User from './models/User.js';
import Transaction from './models/Transaction.js';

interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  phoneNumber: string;
}

interface ITransaction {
  status: 'success' | 'pending' | 'failed';
  type: 'debit' | 'credit';
  transactionDate: Date;
  amount: number;
  userId: mongoose.Types.ObjectId;
}

const populateData = async (): Promise<void> => {
  try {
    await User.deleteMany({});
    await Transaction.deleteMany({});
    console.log('Cleared existing data.');

    const users: IUser[] = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        _id: new mongoose.Types.ObjectId(),
        name: faker.person.fullName(),
        phoneNumber: faker.string.numeric(10),
      });
    }

    const savedUsers = await User.insertMany(users);
    console.log('Inserted users:', savedUsers);

    const transactions: ITransaction[] = [];
    savedUsers.forEach((user) => {
      for (let i = 0; i < 5; i++) {
        transactions.push({
          status: faker.helpers.arrayElement(['success', 'pending', 'failed']),
          type: faker.helpers.arrayElement(['debit', 'credit']),
          transactionDate: faker.date.past(),
          amount: parseFloat(
            faker.finance.amount({ min: 10, max: 1000, dec: 2 })
          ),
          userId: user._id,
        });
      }
    });

    await Transaction.insertMany(transactions);
    console.log('Inserted transactions:', transactions);

    console.log('Data population completed successfully!');
  } catch (err) {
    console.error('Error populating data:', err);
  } finally {
    mongoose.connection.close();
  }
};

export default populateData;
