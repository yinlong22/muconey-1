<template>
    <label class="formItem">
        <span class="name">{{this.fieldName}}</span>
        <input type="text"
               v-model="value"
               :placeholder="this.placeholder">
        <!--        :value="value"
                    @input='value=$event.target.value' / ↓ ↓
                    当先绑定:value='你的数据'，input事件将'你的数据'赋值为$event.target.value输入值时,就可以简化为 v-module='x'-->
    </label>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator'

    @Component
    export default class FormItem extends Vue {
        @Prop({default:''})value!: string

        @Prop({required: true}) fieldName!: string
        @Prop() placeholder?: string

        @Watch('value')
        onValueChanged(value: string) {
            this.$emit('update:value', value)
        }
    }
</script>

<style lang="scss" scoped>
    .formItem {
        font-size: 16px;
        display: flex;
        padding-left: 16px;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 40px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>