<template>
    <label class="notes">
        <span class="name">备注</span>
        <input type="text"
               v-model="value"
               placeholder="在这里输入备注">
<!--        :value="value"
            @input='value=$event.target.value' / ↓ ↓
            当先绑定:value='你的数据'，input事件将'你的数据'赋值为$event.target.value输入值时,就可以简化为 v-module='x'-->
    </label>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'

    @Component
    export default class Notes extends Vue {
        value = ''
    }
</script>

<style lang="scss" scoped>
    .notes {
        background: #f5f5f5;
        font-size: 16px;
        display: flex;
        padding-left: 16px;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>