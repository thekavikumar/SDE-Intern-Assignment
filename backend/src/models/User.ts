import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => {
        return /^\d{10}$/.test(value);
      },
      message: (props: { value: string }) =>
        `${props.value} is not a valid phone number!`,
    },
  },
});

const User = mongoose.model('User', userSchema);

export default User;
