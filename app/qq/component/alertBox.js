

var alertBox = Vue.extend({
    data() {
        return {
            alertData: {
                alertShow: false,          
                title: "",
                content: ""
            }
        }        
    },
    events: {
        showAlertBox(data) {
            this.alertData = data
        }
    },
    methods: {
        close() {
            this.alertData.alertShow = false
            this.$dispatch("alertBoxClose", "close") 
        },
        sure() {
            this.alertData.alertShow = false 
            this.$dispatch("alertBoxClose", "sure")
        }
    },
    template: __inline("/template/alertBox.html")
})

Vue.component("alertbox", alertBox)


