

var home = Vue.extend({
    props: {

    },
    data() {
        return {
            loadingStatus: false,      
            homeData: []
        }
    },
    events: {
        homeData(d) {
            this.homeData = d
        }
    },
    methods: {
        alert(d) {            
            d.alertShow = true
            this.$dispatch("showAlertBox", d)
        },  
        scroll() {
            var _t = this
            
            if (this.$el.scrollTop + this.$el.offsetHeight + 50 >= this.$el.firstElementChild.offsetHeight) {
                clearTimeout(this.timer)
                this.loadingStatus = true

                this.timer = setTimeout(function () {

                    for (var i = _t.homeData.length, len = i + 15; i < len; i++) {
                        _t.homeData.push({ src: "", content: i })
                    }
                    _t.loadingStatus = false

                }, 300)
            }
        }
    },
    ready() {

    },
    template: __inline("../template/home.html")
})


Vue.component("homebox", home)



