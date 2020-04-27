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

<script lang="ts">//ts的数据data和methods直接写
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'

@Component
export default class Types extends Vue {
    // 只要写了任何的赋值语句，ts文件会自动将它变为实例的属性，直接就是data属性
    @Prop() readonly type!: string//!的意思是不要初始值
    //@Pros告诉vue xxx不是data 是外部传来的props
    //Number告诉vue xxx运行时是Number类型
    //xxx为属性名， number|undefined 告诉TS xxx的编译时的类型

    selectType(type: string) {//type只能是-和+号中的一个
        if (type !== '-' && type !== '+') {
            throw new Error('type is unknown')
        }
        this.$emit('update:type',type)
    }

}

// export default {            /js
//     name: 'Types',
//     props:['xxx'],
//     data() {
//         return {
//             type: '-'
//         }
//     },
//     mounted(){
//         console.log(this.xxx)
//     },
//     methods: {
//         selectType(type) {//type只能是-和+号中的一个
//             if (type !== '-' && type !== '+') {
//                 throw new Error('type is unknown')
//             }
//             this.type = type//type=传入的type
//         }
//     }
// }
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