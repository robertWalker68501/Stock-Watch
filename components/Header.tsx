import Link from 'next/link';
import Image from 'next/image';
import NavItems from '@/components/NavItems';
import UserDropdown from '@/components/UserDropdown';

const Header = () => {
  return (
    <header className='header sticky top-0'>
      <div className='header-wrapper container'>
        <Link href='/'>
          <Image
            src='/assets/icons/logo.svg'
            alt='Stock Tracker logo'
            width={140}
            height={32}
            className='h-8 w-auto cursor-pointer'
            priority
          />
        </Link>

        <nav className='hidden sm:block'>
          <NavItems />
        </nav>

        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
