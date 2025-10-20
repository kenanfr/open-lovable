import React from 'react';

function TradeIn() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Apple Trade In 換購方案</h2>
        <p className="text-lg text-gray-700 mb-6">以 iPhone 13 或後續機型換購，獲享 NT$5,500 至 NT$23,100 折抵優惠1。</p>
        <a href="https://www.apple.com/tw/shop/goto/trade_in" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 inline-block">查看你裝置的估價</a>
      </div>
    </section>
  );
}

export default TradeIn;