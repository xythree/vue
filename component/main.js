
__inline("home.js")


__inline("addressList.js")


__inline("moreList.js")

__inline("alertBox.js")


var vm = new Vue({
    el: "body",
    data: {
        home: true,
        addressList: false,
        iconData: ["主页", "通讯录", "设置"],
        iconIndex: 0,
        rightTransition: false,
        title: "",
        iwrapStyle: {},
        bodyStyle: {}
    },
    methods: {
        showMore() {            
            this.rightTransition = !this.rightTransition            
        },
        iconToggle(index) {

            switch (index) {
                case 0:
                    this.home = true
                    this.addressList = false

                    this.$emit("showHome")
                    break
                case 1:
                    this.home = false
                    this.addressList = true

                    this.$emit("showAddressList")
                    break
                case 2:
                    this.home = false
                    this.addressList = false
                    break
            }
            this.iconIndex = index
            this.title = this.iconData[this.iconIndex]
        }
    },
    events: {
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



