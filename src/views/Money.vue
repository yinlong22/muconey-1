<template>
        <Layout class-prefix="layout">
            {{record}}
            <NumberPad :value.sync="record.amount"/>
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
    import {Component} from 'vue-property-decorator'

    type Record={//type相当于js里的var
        tags: string[];
        notes: string;
        type: string;
        amount: number;
    }

    @Component({
        components: {Tags, Notes, Types, NumberPad}
    })
    export default class Money extends Vue {
        tags = ['衣', '食', '住', '行', '吃鸡']
        record: Record={tags: [],notes: '',type: '-',amount: 0}
        // components:{Nav} /已通过全局引入(在main.ts里)
        onUpdateTags(value: string[]) {
            this.record.tags=value
        }

        onUpdateNotes(value: string) {
            this.record.notes=value
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