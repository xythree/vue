


var morelistBox = Vue.extend({
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
    methods: {
        listClick() {
            this.$parent.$refs.photolistbox.$dispatch("showPhotosListBox")
            this.$dispatch("showMore")
        }
    },
    events: {
        moreListData(d) {
            this.moreListData = d
        }
    },
    template: __inline("../template/moreList.html")
})

Vue.component("morelistbox", morelistBox)





