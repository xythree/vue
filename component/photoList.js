


var photoListBox = Vue.extend({
    data() {
        return {
            title: "photoList",
            showPhotosListBox: false
        }
    },
    methods: {
        back() {
            this.$emit("showPhotosListBox")
        }
    },
    events: {
        showPhotosListBox() {
            this.showPhotosListBox = !this.showPhotosListBox
        }
    },
    template: __inline("/template/photoList.html")
})



Vue.component("photolistbox", photoListBox)


