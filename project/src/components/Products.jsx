import React from 'react';

function Products() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* MacBook Pro */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2" id="macbook-pro">MacBook Pro 14 吋</h2>
          <p className="text-gray-700 mb-4">超強驅動來自 M5。</p>
          <p className="text-gray-700 mb-4">推出日期，敬請期待</p>
          <a href="https://www.apple.com/tw/macbook-pro/" className="text-blue-600 hover:text-blue-800 transition-colors">進一步了解</a>
        </div>

        {/* iPad Pro */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2" id="ipad-pro">iPad Pro</h2>
          <p className="text-gray-700 mb-4">先進的 AI 表現，以實力改寫遊戲規則。</p>
          <p className="text-gray-700 mb-4">推出日期，敬請期待</p>
          <a href="https://www.apple.com/tw/ipad-pro/" className="text-blue-600 hover:text-blue-800 transition-colors">進一步了解</a>
        </div>

        {/* iPhone 17 Pro */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2" id="iphone">iPhone 17 Pro</h2>
          <p className="text-gray-700 mb-4">Pro 實力全釋放。</p>
          <a href="https://www.apple.com/tw/iphone-17-pro/" className="text-blue-600 hover:text-blue-800 transition-colors">進⼀步了解</a>
        </div>

        {/* iPhone Air */}
         <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2" id="iphone-air">iPhone Air</h2>
          <p className="text-gray-700 mb-4">史上最薄 iPhone，蘊含渾厚實力。</p>
          <a href="https://www.apple.com/tw/iphone-air/" className="text-blue-600 hover:text-blue-800 transition-colors">進⼀步了解</a>
        </div>

         {/* Apple Watch Series 11 */}
         <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2" id="watch">Apple Watch Series 11</h2>
          <p className="text-gray-700 mb-4">絕技在手，全方位看顧你的健康。</p>
          <a href="https://www.apple.com/tw/apple-watch-series-11/" className="text-blue-600 hover:text-blue-800 transition-colors">進一步了解</a>
        </div>

         {/* MacBook Air */}
         <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2" id="macbook-air">MacBook Air</h2>
          <p className="text-gray-700 mb-4">全新天藍色，M4 效能沖天。</p>
          <a href="https://www.apple.com/tw/macbook-air/" className="text-blue-600 hover:text-blue-800 transition-colors">進一步了解</a>
        </div>

         {/* Apple Vision Pro */}
         <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2" id="vision-pro">Apple Vision Pro</h2>
          <p className="text-gray-700 mb-4">全新 M5 晶片和新款頭帶，實力強大，穿戴舒適.</p>
          <p className="text-gray-700 mb-4">推出日期，敬請期待</p>
          <a href="https://www.apple.com/tw/apple-vision-pro/" className="text-blue-600 hover:text-blue-800 transition-colors">進一步了解</a>
        </div>

        {/* iCloud+ */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2" id="icloud">iCloud+</h2>
          <p className="text-gray-700 mb-4">超強支援 iPhone，帶來額外的儲存空間，自動備份及更多功能。</p>
          <a href="https://www.apple.com/tw/icloud/" className="text-blue-600 hover:text-blue-800 transition-colors">進⼀步了解</a>
        </div>

      </div>
    </section>
  );
}

export default Products;