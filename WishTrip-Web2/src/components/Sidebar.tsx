import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import homeIcon from '../assets/homeIcon.png';
import mapIcon from '../assets/mapIcon.png';
import recordIcon from '../assets/recordIcon.png';
import settingIcon from '../assets/settingIcon.png';

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: '홈', path: '/', icon: homeIcon },
    { name: '지도', path: '/map', icon: mapIcon },
    { name: '기록', path: '/listandmemo', icon: recordIcon },
    { name: '설정', path: '/setting', icon: settingIcon },
  ];

  return (
    <aside className="w-60 h-screen bg-white border-r shadow-sm fixed top-0 left-0 z-10">
      <div className="p-6">
        <img src={logo} alt="WishTrip Logo" className="w-32 mx-auto" />
      </div>
      <nav className="flex flex-col gap-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-100 transition ${
              location.pathname === item.path ? 'bg-blue-200 font-semibold' : ''
            }`}
          >
            <img src={item.icon} alt={`${item.name} 아이콘`} className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
