// components/common/Card.tsx

import { type CardProps } from '@/interfaces'; // <- EXACT match required

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition duration-300">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
