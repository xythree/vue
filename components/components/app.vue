
<template>


    <div>
        
        <select_box :selectList="selectList"></select_box>
        
        <city_box :cityList="cityList"></city_box>
        
		<calendar_box2 :defaultTime="time" ></calendar_box2>
		
        <table_box></table_box>
        
        <page_box></page_box>
        
        <vuex_box></vuex_box>
        
        
        <br />
        <circle_box></circle_box>
        
        <br />
        
        <calendar_box :defaultTime="time" ></calendar_box>
        
        
    </div>
    
    
    
</template>


<script>


import store from "./../vuex/index"
import select_box from "./select/select.vue"
import city_box from "./city/city.vue"
import table_box from "./table/table.vue"
import page_box from "./page/page.vue"
import circle_box from "./circle/circle.vue"
import calendar_box from "./calendar/calendar.vue"
import calendar_box2 from "./calendar/calendar2.vue"

import vuex_box from "./vuex/vuex.vue"

export default {
    data() {
        return {
            time: "2016/2/11",
            selectList: [
                {name: "北京"},
                {name: "深圳"}
            ],
            cityList: [
                {name: "广东", child: [
                    {name: "广州", child: [
                        {name: "天河区", child: []},
                        {name: "白云区", child: []}
                    ]},
                    {name: "深圳", child: [
                        {name: "南山区", child: []},
                        {name: "宝安区", child: []}
                    ]}
                ]},
                {name: "北京", child: [
                    {name: "东城区", child: []},
                    {name: "西城区", child: []}
                ]},
                {name: "广西", child: [
                    {name: "南宁", child: [
                        {name: "隆安", child: []},
                        {name: "靖西", child: []}
                    ]},
                    {name: "百色", child: [
                        {name: "平果", child: []},
                        {name: "田东", child: []}
                    ]}
                ]}
            ]
        }
    },
    store,
    components: {
        select_box,     
        city_box,
        table_box,
        page_box,
        vuex_box,
        circle_box,
        calendar_box,
        calendar_box2
    }
}



</script>



















