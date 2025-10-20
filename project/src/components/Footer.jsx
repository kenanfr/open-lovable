import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="flex flex-wrap justify-center space-x-6 md:space-x-12">
            <li><a href="#" className="hover:text-gray-300 transition-colors">關於 Apple</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Apple Store</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">支援</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">隱私權政策</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">使用條款</a></li>
          </ul>
        </nav>
        <p className="text-center mt-6 text-gray-400">Copyright © {new Date().getFullYear()} Apple Inc. 保留一切權利。</p>
      </div>
    </footer>
  );
}

export default Footer;