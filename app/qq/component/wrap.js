
var wrapBox = Vue.extend({
    template: __inline("/template/wrap.html"),
    data() {
        return {
            abc: { a: 1, b: 2 },
            home: true,
            addressList: false,
            set: false,
            loadingShow: false,
            iconData: ["主页", "通讯录", "设置"],
            iconIndex: 0,
            rightTransition: false,
            title: "",
            iwrapStyle: {},
            bodyStyle: {}
        }
    },
    methods: {
        centerShow() {
            this.$broadcast("centerShow")
        },
        showMore() {
            this.$emit("showMore")
        },
        iconToggle(index) {

            switch (index) {
                case 0:
                    this.home = true
                    this.addressList = false
                    this.set = false
                    this.$emit("showHome")
                    break
                case 1:
                    this.home = false
                    this.addressList = true
                    this.set = false
                    this.$emit("showAddressList")
                    break
                case 2:
                    this.home = false
                    this.addressList = false
                    this.set = true
                    this.$emit("showSet")
                    break
            }
            this.iconIndex = index
            this.title = this.iconData[this.iconIndex]
        }
    },
    events: {
        showMore() {
            this.rightTransition = !this.rightTransition
        },
        showHome() {
            var arr = []
            for (var i = 0; i < 60; i++) {
                arr.push({ src: "", content: i })
            }
            this.$broadcast("homeData", arr)
        },
        showAddressList() {
            var arr = []
            for (var i = 0; i < 30; i++) {
                arr.push({ content: i })
            }
            this.$broadcast("addressListData", arr)
        },
        showSet() {
            this.$broadcast("setShow")
        },
        showLoading() {
            this.loadingShow = !this.loadingShow
        },
        showAlertBox(d) {
            this.$broadcast("showAlertBox", d)
        }
    },
    ready() {

        this.iwrapStyle = {
            width: window.innerWidth + "px"
        }
        this.bodyStyle = {
            height: window.innerHeight - 80 + "px"
        }

        this.title = this.iconData[this.iconIndex]

        this.$emit("showHome")
    }
})

Vue.component("wrapbox", wrapBox)


