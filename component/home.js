

var home = Vue.extend({
    props: {

    },
    data() {
        return {
            homeData: []
        }
    },
    events: {
        homeData(d) {
            this.homeData = d
        }
    },
    template: __inline("../template/home.html")
})


Vue.component("homebox", home)



