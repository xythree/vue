


var addressListBox = Vue.extend({
    data() {
        return {
            addressListData: {}
        }
    },
    events: {
        addressListData(d) {
            this.addressListData = d
        }
    },
    template: __inline("../template/addressList.html")
})


Vue.component("addresslistbox", addressListBox)

