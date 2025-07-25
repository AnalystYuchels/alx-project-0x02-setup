import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';
import Header from '@/components/layout/Header';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} email={user.email} address={user.address} />
        ))}
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
