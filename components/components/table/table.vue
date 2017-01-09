

<style lang="sass">

.table {
    margin: 50px;
    text-align: center;
    
    th,
    td {
        border: 1px solid #ddd;
        padding: 5px 10px;
    }
    
    .iarrow {
        position: relative;
        cursor: pointer;
        
        &:after {
            position: absolute;
            top: 45%;
            right: 5%;
            width: 0;
            height: 0;
            content: "";
            border-style: solid;
            border-width: 4px;
            border-color: #000 transparent transparent;
        }
    }
    .iorder {
        &:after {
            top: 30%;
            border-color: transparent transparent #000 transparent;
        }
    }
}


</style>




<template>

    <div>
    
        <table class="table">
            <tr>
                <th>序号</th>
                <th class="iarrow" :class="{'iorder': !nameOrderAsc}" @click="nameOrder('name')">名称</th>
                <th class="iarrow" :class="{'iorder': !timeOrderAsc}" @click="timeOrder('time')" >日期</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item, index) in orderFn">
                <td>{{ index+1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.time }}</td>
                <td>
                    <button @click="removeBtn(index)">删除</button>
                    <button @click="sureBtn(index)">确定</button>
                </td>
            </tr>
        </table>
        
        <div>{{val}}</div>
        
    </div>

</template>




<script>

import store from "../../vuex/index"
import _ from "lodash"

export default {
    data() {
        return {
            orderFlag: "name",
            timeOrderAsc: true,
            nameOrderAsc: true,
            tableList: [{
                index: 0,
                name: "abc",
                time: "20161230"
            },{
                index: 1,
                name: "def",
                time: "20161231"
            },{
                index: 2,
                name: "ghi",
                time: "20161231"
            }]
        }
    },
    computed: {
        val() {
            return store.getters.doneTodos
        },
        orderFn() {
            if (this.orderFlag == "name") {
                return _.orderBy(
                    this.tableList, 
                    ["name"], 
                    [(this.nameOrderAsc ? "asc" : "desc")]
                )
            }
            if (this.orderFlag == "time") {
                return _.orderBy(
                    this.tableList, 
                    ["time"],
                    [(this.timeOrderAsc ? "asc" : "desc")]
                )
            }
        }
    },
    methods: {
        nameOrder(name) {
            this.nameOrderAsc = !this.nameOrderAsc
            this.timeOrderAsc = true
            this.setOrderFalg(name)
        },
        timeOrder(name) {
            this.timeOrderAsc = !this.timeOrderAsc
            this.nameOrderAsc = true
            this.setOrderFalg(name)
        },
        setOrderFalg(name) {
            if (name) {
                this.orderFlag = name
            }
        },
        orderDefault() {
            this.nameOrderAsc = true
            this.timeOrderAsc = true
        },
        removeBtn(index) {
            var _confirm = confirm("确定删除吗？")
            if (_confirm) {
                this.tableList.splice(index, 1)
            }
        },
        sureBtn(index) {            
            alert(`点击了第${index+1}个`)
        }
    }
}

</script>







































