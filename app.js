//var server = require('./utils/server');
App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
                success: res = > {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
    })
        // 获取用户信息
        wx.getSetting({
                success: res = > {
                if (res.authSetting['scope.userInfo'])
        {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
                success: res = > {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo

            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
            }
        }
        })
        }
    }
    })
    },
    globalData: {
        userInfo: null
    }
    // onLaunch: function () {
    // 	console.log('App Launch')
    // 	var self = this;
    // 	var rd_session = wx.getStorageSync('rd_session');
    // 	console.log('rd_session', rd_session)
    // 	if (!rd_session) {
    // 		self.login();
    // 	} else {
    // 		wx.checkSession({
    // 			success: function () {
    // 				// 登录态未过期
    // 				console.log('登录态未过期')
    // 				self.rd_session = rd_session;
    // 				self.getUserInfo();
    // 			},
    // 			fail: function () {
    // 				//登录态过期
    // 				self.login();
    // 			}
    // 		})
    // 	}
    // },
    // onShow: function () {
    // 	console.log('App Show')
    // },
    // onHide: function () {
    // 	console.log('App Hide')
    // },
    // rd_session: null,
    // login: function() {
    // 	var self = this;
    // 	wx.login({
    // 		success: function (res) {
    // 			console.log('wx.login', res)
    // 			/*
    // 			server.getJSON('/WxAppApi/setUserSessionKey', {code: res.code}, function (res) {
    // 				console.log('setUserSessionKey', res)
    // 				self.rd_session = res.data.data.rd_session;
    // 				self.globalData.hasLogin = true;
    // 				wx.setStorageSync('rd_session', self.rd_session);
    // 				self.getUserInfo();
    // 			});
    // 			*/
    // 		}
    // 	});
    // },
    // getUserInfo: function() {
    // 	var self = this;
    // 	wx.getUserInfo({
    // 		success: function(res) {
    // 			console.log('getUserInfo', res)
    // 			self.globalData.userInfo = res.userInfo;
    // 			/*
    // 			server.getJSON('/WxAppApi/checkSignature', {
    // 				rd_session: self.rd_session,
    // 				result: res
    // 			}, function (res) {
    // 				console.log('checkSignature', res)
    // 				if (res.data.errorcode) {
    // 					// TODO:验证有误处理
    // 				}
    // 			});
    // 			*/
    // 		}
    // 	});
    // }
    // onLaunch: function () {
    //   // 展示本地存储能力
    //   var logs = wx.getStorageSync('logs') || []
    //   logs.unshift(Date.now())
    //   wx.setStorageSync('logs', logs)

    //   // 登录
    //   wx.login({
    //     success: res => {
    //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     }
    //   })
    //   // 获取用户信息
    //   wx.getSetting({
    //     success: res => {
    //       if (res.authSetting['scope.userInfo']) {
    //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //         wx.getUserInfo({
    //           success: res => {
    //             // 可以将 res 发送给后台解码出 unionId
    //             this.globalData.userInfo = res.userInfo

    //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //             // 所以此处加入 callback 以防止这种情况
    //             if (this.userInfoReadyCallback) {
    //               this.userInfoReadyCallback(res)
    //             }
    //           }
    //         })
    //       }
    //     }
    //   })
    // },
    // globalData: {
    //   userInfo: null
    // }

})
