
__inline("wrap.js")

__inline("home.js")

__inline("addressList.js")

__inline("moreList.js")

__inline("set.js")

__inline("alertBox.js")

__inline("center.js")

__inline("loading.js")

__inline("photoList.js")


//动态加载模块
Vue.component("photoajax", function (resolve, reject) {
    var _t = this

    this.$dispatch("showLoading")
    
    setTimeout(function () {
        resolve({
            template: "<p>ajax back content</p>"
        })
        _t.$dispatch("showLoading")
    }, 3000)

})


var vm = new Vue({
    el: "body"
})










