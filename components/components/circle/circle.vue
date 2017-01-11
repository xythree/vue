
<style lang="sass">

.circle_box {
    
    text-align: center;

    path {
        transition: all .5s ease-out;   
    }

}

</style>

<template>
    
    <div class="circle_box" :style="objStyle">
         <svg :width="width" :height="height" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path id="circle_path" v-show="show" :d="d" :stroke-dasharray="dasharray" :stroke-dashoffset="offset" style="fill: #eee;stroke: #000;" />            
            <text class="circle_text" :x="textX" :y="textY" fill="#000">{{textVal}}</text>          
        </svg>
        
        <button @click="plus">&nbsp;+&nbsp;</button>
        <button @click="reduce">&nbsp;-&nbsp;</button>
        
    </div>
    
</template>


<script>

export default {
    data() {
        return {
            show: false,
            num: 5,
            r: 100,
            v: 0,
            scae: 0,
            totallLen: 0,
            dasharray: 0,
            offset: 0,
            textVal: 0          
        }
    },
    methods: {
        change() {
            this.offset = this.dasharray - this.v
            this.valChange()
        },
        plus() {
            if (this.offset <= 0) return            
            this.offset = this.offset - this.scae
            this.valChange()
        },
        reduce() {
            if (this.offset >= this.totallLen) return
            this.offset = +this.offset + this.scae
            this.valChange()
        },
        valChange() {
            var v = Math.round((1 - this.offset/this.dasharray)*100)
            this.v = v
        }
    },
    computed: {
        width() {
            return this.r + this.num + "px"
        },
        height() {
            return this.r + this.num + "px"
        },
        objStyle() {
            return {
                width: this.width
            }
        },
        textX() {
            return this.r/2.15
        },
        textY() {
            return this.r/2
        },
        textVal() {
            return this.v + "%"
        },
        d() {
            var r = this.r
            return `M ${r/2},0 a ${r/2},${r/2} 0 1 1 0,${r} a ${r/2},${r/2} 0 1 1 0,-${r}`
        }
    },
    mounted() {

        this.totallLen = +(document.querySelector("#circle_path").getTotalLength().toFixed(0))
        this.offset = this.totallLen
        this.dasharray = this.totallLen
        this.scae = this.totallLen/10
        this.show = true
        
    }
}


</script>












