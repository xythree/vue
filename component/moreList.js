


var morelist = Vue.extend({
    data() {
        return {
            moreListData: [
                {name: "我的收藏"},
                {name: "我的相册"},
                {name: "我的文件夹"},
                {name: "我的钱包"}
            ]
        }
    },
    events: {
        moreListData(d) {
            this.moreListData = d
        }
    },
    template: __inline("../template/moreList.html")
})

Vue.component("morelistbox", morelist)





