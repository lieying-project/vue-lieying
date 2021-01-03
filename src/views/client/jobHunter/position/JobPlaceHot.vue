<template>
    <div class="hot-city">
        <ul class="hot-city-list">
            <li>
                热门城市:
            </li>
            <li v-for="item in hotCity">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "JobPlaceHot",
        data(){
            return {
                hotCity:["全国","北京","上海","广州","深圳","杭州","天津","西安","苏州","武汉","厦门","长沙","成都","郑州","重庆"]
            }
        }
    }
</script>

<style scoped lang="less">

    .hot-city-list{
        padding-left: 0;
        list-style: none;
        color:#414a60;
        font-size: 12rem /@font-size;
        li{
            float: left;
            height: 36rem /@font-size;
            line-height: 36rem /@font-size;
            padding: 0 11rem /@font-size;
        }
    }

</style>
