import Nav from '@/Common/Nav'
import HomeBanner from '@/p_home/HomeBanner'
import HomeCustomise from '@/p_home/HomeCustomise'
import HomeLanding from '@/p_home/HomeLanding'
import HomeCollection from '@/p_home/HomeCollection'
import HomeExplore from '@/p_home/HomeExplore'
import {
  getHomeBanner,
  // getHomePromotion,
  // getHomeRegion,
  // getHomeStylistic,
  // getHomeHot,
  // getHomeElement,
  // getHomeTheme,
} from 'core/service/home'

export default function Home({ data }) {
  const { bannerRes } = data
  const mockLandingData = [
    {
      title: '链条',
      url: '/',
      img: '../img/landing_img1.jpg',
      subTitleLists: [
        { name: '14K 链条', url: '/' },
        { name: '香槟金链条', url: '/' },
        { name: '分色链条', url: '/' },
      ],
    },
    {
      title: '14K 产品',
      url: '/',
      img: '../img/landing_img2.jpg',
      subTitleLists: [
        { name: '14K 戒指', url: '/' },
        { name: '14K 吊坠', url: '/' },
        { name: '14K 耳环', url: '/' },
      ],
    },
    {
      title: '香槟金产品',
      url: '/',
      img: '../img/landing_img3.jpg',
      subTitleLists: [
        { name: '香槟金戒指', url: '/' },
        { name: '香槟金吊坠', url: '/' },
        { name: '香槟金耳环', url: '/' },
      ],
    },
  ]
  const mockHomehotData = {
    title: '热销款式',
    lists: [
      {
        id: 1001,
        title: '热销款式1',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/evileyecollection.jpg',
      },
      {
        id: 1002,
        title: '热销款式2',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/verl-lov.jpg',
      },
      {
        id: 1003,
        title: '热销款式3',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/collection_genuine_1.jpg',
      },
      {
        id: 1004,
        title: '热销款式4',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/neo-homepage.jpg',
      },
      {
        id: 1005,
        title: '热销款式5',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/verl-lov.jpg',
      },
      {
        id: 1006,
        title: '热销款式6',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/love-un%C4%B1verse-homepage.jpg',
      },
    ],
  }
  const mockHomecuxiaoData = {
    title: '促销款式',
    lists: [
      {
        id: 1001,
        title: '促销款式1',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/evileyecollection.jpg',
      },
      {
        id: 1002,
        title: '促销款式2',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/verl-lov.jpg',
      },
      {
        id: 1003,
        title: '促销款式3',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/collection_genuine_1.jpg',
      },
      {
        id: 1004,
        title: '促销款式4',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/neo-homepage.jpg',
      },
      {
        id: 1005,
        title: '促销款式5',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/verl-lov.jpg',
      },
      {
        id: 1006,
        title: '促销款式6',
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new_landing_page/love-un%C4%B1verse-homepage.jpg',
      },
    ],
  }
  const mockHomeExploreData = {
    exploreImgLists: [
      {
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/home-page-new/sylvie-cn.jpg',
        url: '/',
        title: '星座主题',
      },
      {
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/home-page-new/amanda-new_cn.jpg',
        url: '/',
        title: '爱心主题',
      },
      {
        img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/home-page-new/new_homepage1166x676px_amine_gulse_cn.jpg',
        url: '/',
        title: '彩宝主题',
      },
    ],
    // exploreLists: [
    //   {
    //     url: '/',
    //     title: '珍珠首饰',
    //     des: '珍珠是一种独一无二，是送给特别之人最雅致的礼物！',
    //     img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/home-page-new/home-2021-14.jpg',
    //   },
    //   {
    //     url: '/',
    //     title: '男士首饰',
    //     des: '皇室唯一真正的倾爱，铂金的硬度是黄金的四倍，是展现钻石天然光芒的最佳选择',
    //     img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/home-page-new/home-2021-16.jpg',
    //   },
    //   {
    //     url: '/',
    //     title: '凸圆形首饰',
    //     des: '用您想要的凸圆形首饰让您的梦想变为现实......让它成为你珠宝盒中最受欢迎的饰品',
    //     img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/home-page-new/home-2021-14.jpg',
    //   },
    //   {
    //     url: '/',
    //     title: '男士首饰',
    //     des: '皇室唯一真正的倾爱，铂金的硬度是黄金的四倍，是展现钻石天然光芒的最佳选择',
    //     img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/home-page-new/home-2021-13.jpg',
    //   },
    // ],
  }

  return (
    <>
      <Nav />
      <HomeBanner data={bannerRes} />
      <HomeCustomise />
      <HomeLanding data={mockLandingData} />
      <HomeCollection data={mockHomehotData} />
      <HomeCollection data={mockHomecuxiaoData} />
      <HomeExplore data={mockHomeExploreData} />
    </>
  )
}

export async function getServerSideProps() {
  const bannerRes = await getHomeBanner()
  // const promtionRes = await getHomePromotion()
  // const regionRes = await getHomeRegion()
  // const stylisticRes = await getHomeStylistic()
  // const hotRes = await getHomeHot()
  // const elementRes = await getHomeElement()
  // const themeRes = await getHomeTheme()
  return {
    props: {
      data: {
        bannerRes,
        // promtionRes,
        // regionRes,
        // stylisticRes,
        // hotRes,
        // elementRes,
        // themeRes,
      },
    },
  }
}
