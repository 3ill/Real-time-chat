import Button from '@/components/ui/Button';
import { db } from '@/lib/db';

interface PageProps {}

const Page: React.FC<PageProps> = async () => {
  return (
    <div>
      <p className="text-2xl font-extrabold">Home</p>
      <Button variant={'ghost'}>Click Me</Button>
    </div>
  );
};
export default Page;
