

<style lang="sass">

.ipage {    
    text-align: center;
    
    .inext,
    .iprev {
        display: inline-block;
        padding: 1px 3px;
        border: 1px solid #ccc;
        color: #666;
        border-radius: 3px;
        cursor: pointer;
        
        &:hover {
            color: #39f;
            border-color: #39f;
        }
    }
    
    .ipage_box {
        display: inline-block;
		
        a {
            display: inline-block;
            padding: 1px 3px;
            width: 20px;            
            border: 1px solid #ccc;
            border-radius: 3px;
            color: #666;
            
            &:hover {
                color: #39f;
                border-color: #39f;
            }
        }
    }
    
    .idisabled {
        cursor: not-allowed;
        color: #ddd;
        border-color: #ddd;
        
        &:hover {
            color: #ddd;
            border-color: #ddd;
        }
    }
}

</style>



<template>

    <div class="ipage">
        <span class="iprev idisabled" >上一页</span>
        <div class="ipage_box">
            <a href="javascript:;">1</a>
            <a href="javascript:;">2</a>
        </div>
        <span class="inext" >下一页</span>
    </div>

</template>


<script>

export default {
    data() {
        return {
            
        }
    }
}

</script>

