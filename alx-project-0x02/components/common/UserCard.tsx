import { type UserProps } from '@/interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-sm text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
