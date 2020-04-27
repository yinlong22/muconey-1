import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'
import EditLabel from '@/views/EditLabel.vue'

Vue.use(VueRouter)

// @ts-ignore
// @ts-ignore
const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: 'money'//首页默认为money
    },
    {
        path: '/money',
        component: Money
    },
    {
        path: '/labels',
        component: Labels
    },
    {
        path:'/labels/edit',
        component:EditLabel
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '*',
        component:NotFound
    }
]

const router = new VueRouter({
    routes
})

export default router
