import React, { useEffect, useRef, useState } from 'react';

const MESSAGES = [
  {
    id: 1,
    title: '最新消息',
    text: '今年的圣诞节在12月21日举行',
    gradient: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: '系统维护',
    text: '下周三凌晨 2:00-4:00 将进行系统维护，期间服务可能中断',
    gradient: 'bg-gradient-to-r from-green-400 to-blue-500',
  },
  {
    id: 3,
    title: '优惠活动',
    text: '新用户注册立即获得三个月高级订阅体验',
    gradient: 'bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500',
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // 自动轮换：每 6 秒
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % MESSAGES.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  if (!MESSAGES || MESSAGES.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-12 text-center animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div
          className="w-4/5 mx-auto relative overflow-hidden rounded-lg"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 消息列表（绝对定位，淡入淡出） */}
          {MESSAGES.map((msg, idx) => (
            <div
              key={msg.id}
              className={`absolute inset-0 p-8 text-white shadow-lg transition-opacity duration-700 ease-in-out rounded-lg ${msg.gradient} ${
                idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={idx === current ? 'false' : 'true'}
            >
              <h3 className="text-2xl font-semibold mb-2">{msg.title}</h3>
              <p className="text-lg">{msg.text}</p>
            </div>
          ))}

          {/* 居中显示占位，用于保持高度 */}
          <div className="invisible p-8">
            <h3 className="text-2xl font-semibold mb-2">{MESSAGES[0].title}</h3>
            <p className="text-lg">{MESSAGES[0].text}</p>
          </div>

          {/* 切换点 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex items-center space-x-2">
            {MESSAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Show message ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current ? 'w-8 bg-white/90' : 'w-3 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;