import React from 'react';

function AppleTV() {
  const tvShows = [
    {
      title: 'K-Pop 跨界戰',
      description: '真人實境節目· 樂壇重量級人物與當紅 K-Pop 偶像聯手出擊，上演別開生面的歌曲大對決。',
      link: 'https://tv.apple.com/tw/show/k-pop-%E8%B7%A8%E7%95%8C%E6%88%B0/umc.cmc.1yvpbd5uvcq8txtj1gfnw5iox?l=zh-Hant?itscg=10000&itsct=atv-apl_hp-stream_now--220622',
    },
    {
      title: '全面入侵',
      description: '科幻· 牠們回來了，而且更強。',
      link: 'https://tv.apple.com/tw/show/%E5%85%A8%E9%9D%A2%E5%85%A5%E4%BE%B5/umc.cmc.70b7z97fv7azfzn5baqnj88p6?l=zh-Hant?itscg=10000&itsct=atv-apl_hp-stream_now--220622',
    },
    {
      title: '柏拉圖式關係',
      description: '喜劇· 塞斯羅根和蘿絲拜恩這對重逢的昔日摯友，展開了意外搞笑的友誼新篇章。',
      link: 'https://tv.apple.com/tw/show/%E6%9F%8F%E6%8B%89%E5%9C%96%E5%BC%8F%E9%97%9C%E4%BF%82/umc.cmc.y7bc18x7co813l8i2tlsyb4l?l=zh-Hant?itscg=10000&itsct=atv-apl_hp-stream_now--220622',
    },
    {
      title: '戰酷',
      description: '劇情片· 為了團結人民，強悍的夏威夷戰士卡亞納，扛起了艱巨的任務。',
      link: 'https://tv.apple.com/tw/show/%E6%88%B0%E9%85%8B/umc.cmc.6ag0zq020ielwv7m83v8r4dkw?l=zh-Hant?itscg=10000&itsct=atv-apl_hp-stream_now--220622',
    },
    {
      title: '阿卡普科',
      description: '喜劇· 心想事成的度假天堂，就在這裡。',
      link: 'https://tv.apple.com/tw/show/%E9%98%BF%E5%8D%A1%E6%99%AE%E7%A7%91/umc.cmc.8xrkg9zywke7g6a9ahmvpr3l?l=zh-Hant?itscg=10000&itsct=atv-apl_hp-stream_now--220622',
    },
    {
      title: '基地',
      description: '科幻· 未來，絕非亙久不變。',
      link: 'https://tv.apple.com/tw/show/%E5%9F%BA%E5%9C%B0/umc.cmc.5983fipzqbicvrve6jdfep4x3?l=zh-Hant?itscg=10000&itsct=atv-apl_hp-stream_now--220622',
    },
    {
      title: '野性見證',
      description: '紀錄片· 展開壯闊遠征，救援六種瀕危動物。',
      link: 'https://tv.apple.com/tw/show/%E9%87%8E%E6%80%A7%E8%A6%8B%E8%AD%89/umc.cmc.4w1tfn11hyb3frc9tp5fpksbb?l=zh-Hant?itscg=10000&itsct=atv-apl_hp-stream_now--220622',
    },
    {
      title: '玩火燎原',
      description: '驚悚· 調查員和警探聯手追捕連續縱火犯，沒想到卻引燃一場充滿祕密與猜忌的病態遊戲。',
      link: 'https://tv.apple.com/tw/show/%E7%8E%A9%E7%81%AB%E7%87%8E%E5%8E%9F/umc.cmc.4lplbt076d3um4tenis7k58e3?l=zh-Hant?itscg=10000&itsct=atv-apl_hp-stream_now--220622',
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Apple TV+</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tvShows.map((show, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">{show.title}</h3>
              <p className="text-gray-700 mb-4">{show.description}</p>
              <a href={show.link} className="text-blue-600 hover:text-blue-800 transition-colors">立即串流播放</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppleTV;