<template>
    <ul class="product-list">
        <li v-for="i in 2" :key="i">
            <img src="../../assets/imgs/a3d3365a0247102b4169c8ce8ab06fc9a3bc6b90af90d04f986a2e4fca41cf9b_s.jpg">
            <a>
                <span class="name">【曈学曈玩】—名校打造有中国特色的每一个孩子的国际化私立学校</span>
                <span class="url">http://www. taobao.com</span>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
  name: "ProductList"
}
</script>

<style scoped lang="less">
    @import "../../assets/styles/variables";
    .product-list{
        display: flex;
        flex-flow: column nowrap;
        list-style-type: none;
        margin: 0;
        padding: 0;
        li{

            display: flex;
            align-items: center;
            img{
                width: 60rem /@font-size;
                height: 60rem /@font-size;
            }
            a{
                cursor: pointer;
                font-size: 16rem /@font-size;
                margin-left: 20rem /@font-size;
                color: #414a60;
                display: flex;
                flex-flow: column nowrap;
                line-height: 25rem /@font-size;
                &:hover{
                    color: #18c3b1;
                }
                .url{
                    color:@gray;
                    font-size: 14rem /@font-size;

                }
            }
        }
    }
</style>
