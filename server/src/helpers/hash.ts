import bcrypt from 'bcrypt';

export const hashString = async (text: string) => {
  return await bcrypt.hash(text, 10);
};