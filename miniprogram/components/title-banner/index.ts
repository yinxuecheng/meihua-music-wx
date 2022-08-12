// components/title-banner/index.ts
Component({
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '默认列表'
    },
    moreLable: {
      type: String,
      value: '更多>>'
    },
    hideMore :{
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
