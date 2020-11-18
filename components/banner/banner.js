// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    banner:[
      {id:1,img:'../../images/banner1.png'},
      {id:2,img:'../../images/banner2.png'},
      {id:3,img:'../../images/banner3.png'},
      {id:4,img:'../../images/banner4.png'},
    ],
    list:[
      {
        id:1,
        img:'../../images/yellow.png',
        img1:'../../images/yellow1.png',
        text:'热门课程',
        url:'../../pages/hot/hot'
      },
      {
        id:2,
        img:'../../images/purple.png',
        img1:'../../images/purple1.png',
        text:'教育头条',
        url:'../../pages/hot/hot'
      },
      {
        id:3,
        img:'../../images/pink.png',
        img1:'../../images/pink1.png',
        text:'非翔活动',
        url:'../../pages/hot/hot'
      },
      {
        id:4,
        img:'../../images/blue.png',
        img1:'../../images/blue1.png',
        text:'咨询教师',
        url:'../../pages/hot/hot'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
