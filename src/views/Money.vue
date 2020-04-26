<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad/>
            <Types :xxx="2333"/>
            <Notes/>
            <Tags :data-source="tags"/>
        </Layout>
    </div>
</template>

<script lang="js">
    // import Nav from '@/components/Nav.vue'
    import NumberPad from '@/components/Money/NumberPad.vue'
    import Types from '@/components/Money/Types.vue'
    import Notes from '@/components/Money/Notes.vue'
    import Tags from '@/components/Money/Tags.vue'

    export default {
        name: 'Money',
        components: {Tags, Notes, Types, NumberPad},
        // components:{Nav} /已通过全局引入(在main.ts里)
        data() {
            return {
                tags: ['衣', '食', '住', '行', '吃鸡']
            }
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