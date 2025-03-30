import Link from 'next/link';
import { useRouter } from 'next/router';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-lg py-4 px-6 transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <nav className="flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`py-2 px-4 rounded-md text-lg ${router.pathname === link.href ? 'bg-blue-50 text-primary font-medium' : 'text-gray-700'}`}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
