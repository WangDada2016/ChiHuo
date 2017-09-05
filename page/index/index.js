var app = getApp();
Page({
    data: {
        //filterId: 1,
        // cart: {
        // 	count: 0,
        // 	total: 0,
        // 	list: {}
        // },
    },

    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res =
        >
            {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res = > {
                app.globalData.userInfo = res.userInfo
            this.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
            })
        }
        })
        }
    },
    //计算
    tapAddCart: function (e) {
        this.addCart(e.target.dataset.id);
        console.log(e.target.dataset.id);
    },
    tapReduceCart: function (e) {
        this.reduceCart(e.target.dataset.id);
    },
    addCart: function (id) {
        console.log(this.data.cart.list);
        var num = this.data.cart.list[id] || 0;
        console.log("num" + num);

        this.data.cart.list[id] = num + 1;
        this.countCart();
    },
    reduceCart: function (id) {
        var num = this.data.cart.list[id] || 0;
        if (num <= 1) {
            delete this.data.cart.list[id];
        } else {
            this.data.cart.list[id] = num - 1;
        }
        this.countCart();
    },
    countCart: function () {
        var count = 0,
            total = 0;
        for (var id in this.data.cart.list) {
            var goods = this.data.goods[id];
            count += this.data.cart.list[id];
            total += goods.price * this.data.cart.list[id];
        }
        this.data.cart.count = count;
        this.data.cart.total = total;
        this.setData({
            cart: this.data.cart
        });
    },

    //显示隐藏购物车
    // showCartDetail: function () {
    // 	this.setData({
    // 		showCartDetail: !this.data.showCartDetail
    // 	});
    // },
    // hideCartDetail: function () {
    // 	this.setData({
    // 		showCartDetail: false
    // 	});
    // },

    //显示隐藏商品详情弹窗
    showGoodsDetail: function (e) {

        this.setData({
            showGoodsDetail: !this.data.showGoodsDetail,
            id: e.target.dataset.id
        });
    },
    hideGoodsDetail: function () {
        this.setData({
            showGoodsDetail: false
        });
    },


    // pay: function () {
    // 	wx.navigateTo({
    // 		url: '../pay/pay'
    // 	})
    // },

    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
});

