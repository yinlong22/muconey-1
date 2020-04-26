<template>
    <ul class="types">
        <!-- 如果type是-号，就selected-->
        <li :class="type==='-'&&'selected'"
            @click="selectType('-')">支出
        </li>
        <!--vue直接省略了false <li :class="type==='-'? 'selected':''">支出</li>-->
        <li :class="type==='+'&&'selected'"
            @click="selectType('+')">收入
        </li>
    </ul>
</template>

<script lang="js">
    export default {
        name: 'Types',
        props:['xxx'],
        data() {
            return {
                type: '-'//-表示支出，+表示收入
            }
        },
        mounted(){
            console.log(this.xxx)
        },
        methods: {
            selectType(type) {//type只能是-和+号中的一个
                if (type !== '-' && type !== '+') {
                    throw new Error('type is unknown')
                }
                this.type = type//type=传入的type
            }
        }
    }
</script>

<style lang="scss" scoped>
    .types {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 25px;
        align-items: center;

        > li {
            width: 50%;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected::after { //选中后的效果
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 5px;
                background: #333;
            }
        }
    }
</style>