
<style lang="sass">

$c1: #ddd;

.city_box {
    position: relative;    
    display: inline-block;    
    cursor: pointer;
    
    .select_ipt {
        input {
            text-indent: 5px;
            width: 150px;
            height: 22px;
            line-height: 22px;      
            border: 1px solid $c1;
            border-radius: 3px 0 0 3px;
            background: #fff;
        }
        b {
            display: none;
            position: absolute;
            top: 1px;
            right: 24px;
            height: 22px;
            line-height: 21px;
            width: 22px;
            text-align: center;
            font-size: 12px;
            border-radius: 50%;
            background: $c1;
            transform: scale(.6);
            color: #999;
        }
        &:hover {
            b {
                display: block;
            }
        }
        span {
            position: absolute;
            top: 0;
            right: 0;
            height: 22px;
            width: 22px;
            vertical-align: middle;
            border: 1px solid $c1;
            border-left: none;
            border-radius: 0 3px 3px 0;
            background: #eee;
            
            &:after {
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -5px;
                margin-top: -2px;
                content: "";
                width: 0;
                height: 0;
                border-width: 5px;
                border-color: #999 transparent transparent;
                border-style: solid;
                transform-origin: center 2px;
                transition: all .35s ease-out;
            }
        }
    }
    .city_lists_box {
        display: none;
        position: absolute;
        top: 23px;
        width: 200px;
        max-height: 200px;     
        border-radius: 0 0 3px 3px;        
        overflow: auto;
        

        ul {
            display: inline-block;
            vertical-align: top;
            min-width: 65px;
            height: 100%;
            border: 1px solid #ddd;
            background: #fff;
            
            &:nth-child(2),
            &:nth-child(3) {
                border-left: none;
            }
        }
        
        li {
            position: relative;
            padding: 3px 5px;
            border-bottom: 1px dashed #eee;
            
            &:hover {
                cursor: pointer;
                background: #eee;
            }           
            &:last-child {
                border-bottom: none;
                padding-bottom: 5px;
            }
        }
        .next {
            
            &:after {
                position: absolute;
                content: ">";
                font-size: 14px;
                right: 5px;
                font-family: arial;
                color: #d0d0d0;
            }           
        }
    }
}
.city_show {
    .city_lists_box {
        display: inline-block;
        transform-origin: center top;
        animation: show_ani .35s ease-out both;
		z-index: 888;
    }
    .select_ipt {
        span {
            &:after {
                transform: rotate(180deg);
            }
        }
    }
}
@keyframes show_ani {
    0% {
        opacity: 0;
        transform: rotateX(45deg);      
    }
    100% {
        opacity: 1;
        transform: rotateX(0);
    }
}
</style>

<template>
    
    <div class="city_box" :class="{city_show: cityShow}" v-close="closeFn">
        <div class="select_ipt">
            <input type="text" readonly v-model="value" @click="showSelect" />          
            <span @click="showSelect"></span>
            <b v-show="emptyVal" title="清空" @click="clearEmpty" >X</b>
        </div>
        <div class="city_lists_box">
            <ul>
                <li v-for="item in cityList" :class="{next: item.child.length}" @click="getValue(item)" >{{item.name}}</li>
            </ul><ul v-show="cityList2.length">
                <li v-for="item in cityList2" :class="{next: item.child.length}" @click="getValue2(item)" >{{item.name}}</li>
            </ul><ul v-show="cityList3.length">
                <li v-for="item in cityList3" @click="getValue3(item)" >{{item.name}}</li>
            </ul>
        </div>
    </div>
    
</template>


<script>

import close from "../close/close.vue"

export default {
    props: ["cityList"],
    data() {
        return {
            cityList2: [],
            cityList3: [],
            emptyVal: false,
            cityShow: false,
            temp: [],
            value: ""
        }
    },
    directives: {
        close
    },
    methods: {
        showSelect() {
            this.cityShow = !this.cityShow
        },
        clearEmpty() {
            this.value = ""
            this.emptyVal = false
            this.cityList2 = []
            this.cityList3 = []
            this.temp = []
        },
        getValue(arg) {
            this.cityList2 = arg.child
            this.cityList3 = []
            this.temp = []
            this.temp[0] = arg.name
        },
        getValue2(arg) {
            this.cityList3 = arg.child            
            this.temp[1] = arg.name
            
            if (!this.cityList3.length) {                           
                this.setValue()
                this.showSelect()
            }
        },
        getValue3(arg) {
            this.temp[2] = arg.name
            this.setValue()
            this.showSelect()
        },
        setValue() {            
            this.value = this.temp.join("/")
            this.emptyVal = true
        },      
        closeFn() {
            this.cityShow = false
        }
    }
}

</script>





