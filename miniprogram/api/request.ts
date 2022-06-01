const baseURL = 'https://meihua-music-1943480-1312031099.ap-shanghai.run.tcloudbase.com'
export const get = (uri: string) =>{
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) =>{
    wx.request({
      url: baseURL + uri,
      method: 'GET',
      success: (res)=>{
        resolve(res.data)
      },
      fail: reject,
      complete: ()=>{
        wx.hideLoading()
      }
    })
  })
}

