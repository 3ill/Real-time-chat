interface pageProps {}
import AddFriend from '@/components/AddFriend';
import Button from '@/components/ui/Button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h2 className=" text-4xl font-bold text-gray-950">Add a friend</h2>
      <AddFriend />
    </div>
  );
};
export default Page;
