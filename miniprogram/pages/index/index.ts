// index.ts

import { sayHello } from "../../api/hello"

Page({
  data: {
    message: 'hello world'
  },
  hi() {
    sayHello().then( data => {
      console.log(data)
      const message = data + ''
      this.setData({
        message
      })
    })
  }
})
