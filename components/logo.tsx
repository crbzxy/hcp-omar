import Link from 'next/link';

export default function Logo() {
  return (
    <div className='mr-16 flex flex-col cursor-pointer'>
      <Link href='/'>
        <div>
          {' '}
          <p className='logoName'>Dr. Omar Piñón Solís</p>
          <p className='logoNamesub'>Urólogo</p>
        </div>
      </Link>
    </div>
  );
}
