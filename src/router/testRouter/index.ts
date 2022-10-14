/**
 *
 * 测试侧边栏路由
 *
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const test: Array<RouteRecordRaw> = [
  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: 'test',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/test/index.vue'),
        name: 'test',
        meta: {
          title: 'test',
          icon: '#icondashboard',
          affix: true
        }
      }
    ]
  }
]
export default test
