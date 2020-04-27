<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :type.sync="record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        <!--            如果触发了updateSource时间，会把传的数组赋值给tags-->
    </Layout>
</template>

<script lang="ts">
    // import Nav from '@/components/Nav.vue'
    import Vue from 'vue'
    import NumberPad from '@/components/Money/NumberPad.vue'
    import Types from '@/components/Money/Types.vue'
    import Notes from '@/components/Money/Notes.vue'
    import Tags from '@/components/Money/Tags.vue'
    import {Component, Watch} from 'vue-property-decorator'

    const version = window.localStorage.getItem('version') || '0'
    const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')
    if (version === '0.0.1') {//数据库升级，数据迁徙
        recordList.forEach(record => {
            record.createdAt = new Date(2020, 0, 1)
        })
        window.localStorage.setItem('recordList', JSON.stringify(recordList))// 保存数据
    }else
    window.localStorage.setItem('version', '0.0.2')
    // 重置数据库版本
    type Record = {//type相当于js里的var
        tags: string[];
        notes: string;
        type: string;
        amount: number; //数据类型
        createdAt?: Date; //类
    }

    @Component({
        components: {Tags, Notes, Types, NumberPad}
    })
    export default class Money extends Vue {
        tags = ['衣', '食', '住', '行', '吃鸡']
        recordList: Record[] = recordList
        record: Record = {tags: [], notes: '', type: '-', amount: 0}

        // components:{Nav} /已通过全局引入(在main.ts里)
        onUpdateTags(value: string[]) {
            this.record.tags = value
        }

        onUpdateNotes(value: string) {
            this.record.notes = value
        }

        saveRecord() {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const record2: Record = JSON.parse(JSON.stringify(this.record))
            record2.createdAt = new Date()
            this.recordList.push(record2)
        }

        @Watch('recordList')
        onRecordListChanged() {
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
        }
    }
</script>

<style lang="scss">
    //空格.是tags里面的，没有.是当前tags
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>