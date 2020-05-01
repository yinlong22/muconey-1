<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" height="45px"/>
        <ol>
            <li v-for="(group,index) in result" :key="index.id">
                <h3 class="title">{{group.title}}</h3>
                <ol>
                    <li v-for="item in group.items"
                        :key="item.id" class="record">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="note">{{item.notes}}</span>
                        <span>￥{{item.amount}}</span>
                    </li>
                </ol>
            </li>
        </ol>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import Tabs from '@/components/Tabs.vue'
    import intervalList from '@/constants/intervalList'
    import recordTypeList from '@/constants/recordTypeList'

    @Component({
        components: {Tabs},
    })
    export default class Statistics extends Vue {
        tagString(tags: Tag[]) {
            return tags.length === 0 ? '无' : tags.join(',')
        }

        get recordList() {
            return (this.$store.state as RootState).recordList
        }

        get result() {
            const {recordList} = this
            type HashTableValue = { title: string; items: RecordList[] }
            const hashTabel: { [key: string]: HashTableValue } = {}
            for (let i = 0; i < recordList.length; i++) {

                const [date, time] = recordList[i].createdAt!.split('T')
                hashTabel[date] = hashTabel[date] || {title: date, items: []}
                hashTabel[date].items.push(recordList[i])
            }
            return hashTabel
        }

        beforeCreate() {
            this.$store.commit('fetchRecords')
        }

        type = '-'
        interval = 'day'
        intervalList = intervalList
        recordTypeList = recordTypeList
    }
</script>

<style scoped lang="scss">
    ::v-deep {
        .type-tabs-item { //::v-deep或/deep/可以影响外部传到里面的组件
            background: white;

            &.selected {
                background: #c4c4c4;

                &::after {
                    display: none;
                }
            }
        }

        .interval-tabs-item {
            /*height: 45px;*/
        }
    }

    %item {
        padding: 8px 16px;
        line-height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        @extend %item
    }

    .record {
        background: white;
        @extend %item
    }
    .note{
        margin-right: auto;
        margin-left: 16px;
        color: #999;
    }
</style>