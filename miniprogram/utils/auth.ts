const tokenKey = 'meihua'

export const setToken = (token: string) => {
  wx.setStorageSync(tokenKey, token)
}

export const getToken = () => {
  return wx.getStorageSync(tokenKey) || null
}

export const removeToken = () => {
  wx.setStorageSync(tokenKey, '')
}