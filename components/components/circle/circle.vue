
<template>
    
    <div class="circle_box">
         <svg width="300px" height="300px" version="1.1" xmlns="http://www.w3.org/2000/svg">

            <path v-path id="path" :d="d" :stroke-dasharray="dasharray" :stroke-dashoffset="offset" style="fill: #eee;stroke: #000;" />
        
        </svg>
        <button @click="plus">+</button>
        <button @click="reduce">-</button>
    </div>
    
</template>


<script>

export default {
    directives: {
        path: {
            bind(el, binding, vNode) {
                
            }
        }
    },
    data() {
        return {
            v: 0,
            totallLen: 0,
            dasharray: 0,
            offset: 0
        }
    },
    methods: {
        change() {
            this.offset = this.dasharray - this.v
            this.valChange()
        },
        plus() {
            this.offset = this.offset - this.totallLen/10
            this.valChange()
        },
        reduce() {
            this.offset = +this.offset + this.totallLen/10
            this.valChange()
        },
        valChange() {
            var v = (1 - this.offset/this.dasharray).toFixed(2)

            console.log(this.offset)
            console.log(this.dasharray)
        }
    },
    computed: {
        d() {
            return "M 50,0 a 50,50 0 1 1 0,100 a 50,50 0 1 1 0,-100"
        }
    },
    mounted() {

        this.offset = this.totallLen
        this.dasharray = this.totallLen
        this.totallLen = document.querySelector("#path").getTotalLength()

    }
}


</script>












