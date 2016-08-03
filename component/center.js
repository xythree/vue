

var centerBox = Vue.extend({
    data() {
        return {
            centerShow: false,
            title: "个人中心"
        }
    },
    methods: {
        close() {
            this.centerShow = !this.centerShow
        }
    },
    events: {        
        centerShow() {            
            this.centerShow = !this.centerShow
        }
    },
    template: __inline("/template/center.html")
})


Vue.component("centerbox", centerBox)


