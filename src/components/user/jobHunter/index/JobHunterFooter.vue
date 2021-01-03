<template>

    <div class="footer">


        <div class="home-inner">

            <div class="footer-about">
                <dl>
                    <dt> 企业服务</dt>
                    <dd>
                        <a>职位搜索</a>
                        <a>新闻资讯</a>

                    </dd>
                </dl>
                <dl>
                    <dt> 使用与帮助</dt>
                    <dd>
                        <a>平台协议</a>
                        <a>防骗指南</a>
                        <a>使用帮助</a>
                    </dd>
                </dl>

                <dl>
                    <dt> 联系猎英</dt>
                    <dd>
                        <a>xxx技术有限公司</a>
                        <a>联系电话:xxxx</a>
                        <a>举报邮箱:xxxxxxxx</a>
                    </dd>
                </dl>
            </div>
            <div class="footer-social">
                <p>猎英</p>
                <p>企业服务热线和举报投诉 <span>xxxxx</span></p>
                <p>工作日 <span>8:00-22:00</span></p>
                <p>休息日 <span>9:30-18:30 </span></p>
            </div>
        </div>
        <div class="copyright">
            <p>
                <span>Copyright © 2020 猎英</span>
            </p>
        </div>


    </div>
</template>

<script>
export default {
  name: "JobHunterFooter"
}
</script>

<style scoped lang="less">

    .footer {
        background-color: #FFFFFF;

        .footer-social{

        }
        .home-inner {
            width: 1184rem /@font-size;
            margin: 0 auto;

            display: flex;
            justify-content: space-between;


            .footer-about{
                display: flex;
                dl {
                    width: 192rem /@font-size;
                    margin-right: 30rem /@font-size;

                    dt {
                        height: 30rem /@font-size;
                        line-height: 30rem /@font-size;
                        font-size: 14rem /@font-size;
                        color: #414a60;
                        margin-bottom: 10rem /@font-size;

                    }

                    dd {
                        margin: 0;
                        display: flex;
                        flex-flow: column nowrap;

                        a {
                            color: #8d92a1;
                            display: block;
                            width: 100%;
                            font-size: 12rem /@font-size;

                            height: 24rem /@font-size;
                            line-height: 24rem /@font-size;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .footer-social{

                p{
                    display: flex;
                    justify-content: flex-end;
                    font-size: 13rem /@font-size;
                    color: #8d92a1;
                }
            }


        }

        .copyright {
            display: flex;
            justify-content: center;
            width: 1184rem /@font-size;
            margin: 0 auto;

            p {
                height: 40rem /@font-size;
                line-height: 40rem /@font-size;
                padding: 0;
                margin: 0;

                span {
                    color: #8d92a1;
                    display: inline-block;
                    margin-right: 15rem /@font-size;

                    a {
                        color: #111;
                    }

                }
            }
        }
    }
</style>
