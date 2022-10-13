// import { produce } from 'immer'
import * as types from '../../actions/mutation-types'

const initialState = {
  userPageBaseInfo: {
    navbar: [
      { title: '我的总览', type: 'overview' },
      { title: '我的信息', type: 'minedetail' },
      { title: '我的订单', type: 'mineorder' },
    ],
    overview: {
      title: '总览',
      sayHi: '你好',
      description:
        '在这个页面，你可以编辑你的个人基本信息，以及了解你的订单状态；完善好你的个人信息的话，我们可以更加方便跟进你。',
      contactInfoContentText: {
        title: '联系信息',
        name: '名称',
        email: '邮箱',
        phone: '电话号码',
        more: '更多信息',
        edit: '编辑',
      },
      orderInfoContentText: {
        title: '订单信息',
        des1: '你下达在',
        des2: '的订单',
        status: ['即将处理', '报价中', '报价完成', '等待付款'],
        des3: '我们正在报价你的订单。',
        history: '订单详情和历史',
      },
      contactUsContentText: {
        title: '联系我们',
        name: '你的专属联系人',
        email: '邮箱',
        phone: '电话',
        wx: '微信号',
        otherQA: '其他疑问，请联系',
        and: '或者及时直接给我们|提供反馈',
      },
    },
    editDetailContentText: {
      title: '我的信息',
      edit: '编辑',
      success: '完成',
      fristname: '姓氏',
      lastname: '名字',
      nickname: '昵称',
      nicknameDes: '如果你喜欢，请告诉我们你的',
      email: '邮箱',
      phone: '手机号码',
      des: '邮箱以及手机号码将同时作为登录网站的账号，请妥善保管',
      changepassword: '登录密码更改',
      new: '新密码',
      confirm: '新密码确认',
      contactinfoTitle: '联系信息',
      contactinfoDes: '你可选择留下你的联系信息，以方便我们随时跟进你。',
      wx: '微信',
      whatsapp: 'WhatsApp',
      otheremail: '额外邮箱',
      othercontact: '其他方式',
      suggest: '改进意见',
      submit: '提交',
    },
    mineOrderContentText: {
      title: '我的订单',
      orderDes: '你的订单|。包含有|款产品，总数量|件。',
      des: '点击编辑按钮，来更改数量以及移除产品。我们不能够保证所有产品都有库存，你可以定制缺货的产品。任何问题请及时联系我们。',
    },
    orderDetailContentText: {
      tableHeads: [
        {
          title: '序号',
          dataIndex: 'index',
          width: '8%',
          editable: false,
        },
        {
          title: '图片',
          dataIndex: 'url',
          width: '10%',
          editable: false,
        },
        {
          title: '产品条码',
          dataIndex: 'code',
          width: '10%',
          editable: false,
        },
        {
          title: '名称',
          dataIndex: 'name',
          width: '10%',
          editable: false,
        },
        {
          title: '规格',
          dataIndex: 'size',
          width: '5%',
          editable: false,
        },
        {
          title: '数量',
          dataIndex: 'num',
          width: '8%',
          editable: true,
        },
        {
          title: '单价',
          dataIndex: 'price',
          width: '8%',
          editable: false,
        },
        {
          title: '总价',
          dataIndex: 'totalprice',
          width: '8%',
          editable: false,
        },
        {
          title: '库存状态',
          dataIndex: 'status',
          width: '10%',
          editable: false,
        },
        {
          title: '操作',
          dataIndex: 'operation',
        },
      ],
    },
  },
  userInfo: {
    fristname: '',
    lastname: '',
    nickname: '',
    username: '',
    userphone: '',
    useremail: '',
    loginMode: '',
    password: '',
    prefix: '',
    avatarImg: '',
    wx: '',
    whatsapp: '',
    otheremail: '',
    othercontact: '',
    suggest: '',
    order: {},
    historyOrder: [],
    contactUs: {},
  },
}

const mutations = {
  [types.QUERY_LOGIN_PAGE_CONTENT](state) {
    return { ...state }
  },
  [types.UPDATE_LOGIN_STATUS](state, action) {
    return {
      ...state,
      loginStatus: action.payload,
    }
  },
  [types.UPDATE_USERINFO](state, action) {
    return {
      ...state,
      userInfo: { ...state.userInfo, ...action.payload },
    }
  },
}

export default function userPageReducer(state = initialState, action) {
  if (!mutations[action.type]) return state
  return mutations[action.type](state, action)
}
