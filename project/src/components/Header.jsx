import React from 'react';

function Header() {
  return (
    <header className="bg-white text-black py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">Apple (台灣)</a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#macbook-pro" className="hover:text-gray-500 transition-colors">MacBook Pro</a></li>
            <li><a href="#ipad-pro" className="hover:text-gray-500 transition-colors">iPad Pro</a></li>
            <li><a href="#iphone" className="hover:text-gray-500 transition-colors">iPhone</a></li>
            <li><a href="#watch" className="hover:text-gray-500 transition-colors">Watch</a></li>
            <li><a href="#tv" className="hover:text-gray-500 transition-colors">TV</a></li>
            <li><a href="#support" className="hover:text-gray-500 transition-colors">Support</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;