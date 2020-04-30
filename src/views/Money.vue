<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :type.sync="record.type"/>
        <div class="notes">
            <FormItem field-name="备注"
                      placeholder="在这里输入备注"
                      @update:value="onUpdateNotes"/>
        </div>
        <Tags/>
    </Layout>
</template>

<script lang="ts">
    // import Nav from '@/components/Nav.vue'
    import Vue from 'vue'
    import NumberPad from '@/components/Money/NumberPad.vue'
    import Types from '@/components/Money/Types.vue'
    import FormItem from '@/components/Money/FormItem.vue'
    import Tags from '@/components/Money/Tags.vue'
    import {Component} from 'vue-property-decorator'


    // const model = require('@/model.js').model

    // const version = window.localStorage.getItem('version') || '0'
    // if (version === '0.0.1') {//数据库升级，数据迁徙
    //     store.recordList.forEach(record => {
    //         record.createdAt = new Date(2020, 0, 1)
    //     })
    //     window.localStorage.setItem('recordList', JSON.stringify(store.recordList))// 保存数据
    // } else
    //     window.localStorage.setItem('version', '0.0.2')
    // 重置数据库版本

    @Component({
        components: {Tags, FormItem, Types, NumberPad},
    })
    export default class Money extends Vue {
        get recordList() {
            return this.$store.state.count
        }

        record: RecordItem = {tags: [], notes: '', type: '-', amount: 0}

        created() {
            this.$store.commit('fetchRecords')
        }

        onUpdateNotes(value: string) {
            this.record.notes = value
        }

        saveRecord() {
            this.$store.commit('createRecord', this.record)
        }
    }
</script>

<style lang="scss">
    //空格.是tags里面的，没有.是当前tags
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        padding: 13px 0;
    }
</style>