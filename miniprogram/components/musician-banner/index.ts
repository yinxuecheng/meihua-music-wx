// components/musician-banner/index.ts
Component({

  /**
   * 组件样式隔离
   */
  options: {
    styleIsolation: 'isolated'
  },
    /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    list: {
      type: Array,
      value: []
    }
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
    onClick(e: any) {
      console.log(e);
    }
  }
})
