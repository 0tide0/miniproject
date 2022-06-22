//index.js
Page({
  data: {
    imgSrc: '/images/kitty.png' //图片源文件
  },
  tapCat: function() {
    let audio = wx.createInnerAudioContext() //创建音频上下文
    audio.src = '/audios/meow.mp3' //声音源文件，需要放在根目录下
    audio.play() //播放音频
  }
})