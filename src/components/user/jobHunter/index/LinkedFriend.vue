<template>
    <div class="linked-friend">
        <dl class="linked-items">
            <dt> 友情链接</dt>
            <dd>
                <a>美术问答</a>
                <a>法律咨询</a>
                <a>玻璃厂招聘</a>
                <a>看准网新闻</a>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
  name: "LinkedFriend"
}
</script>

<style scoped lang="less">
    .linked-friend {

        padding: 15rem /@font-size 0 30rem /@font-size 0;
        background-color: #F5F7F9;

        .linked-items {
            width: 1184rem /@font-size;
            margin: 0 auto;
            display: flex;
            dt{
                width: auto;
                line-height: 30rem /@font-size;
                font-size: 12rem /@font-size;
            }
            dd{
                display: flex;
                a{
                    width: auto;
                    line-height: 30rem /@font-size;
                    color: #9fa3b0;
                    font-size: 12rem /@font-size;
                    margin-right: 26rem /@font-size;
                    display: inline-block;
                }
            }

        }
    }
</style>
