import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Introduction',
        component: () => import('@/views/IntroductionView.vue'),
        meta: {
            title: '欢迎来到Geek空间',
        },
    },
    {
        path: '/homepage',
        name: 'Homepage',
        component: () => import('@/views/HomepageView.vue'),
        meta: {
            title: 'Geek空间 - 链接汇总',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

// 路由守卫 - 设置页面标题
router.beforeEach((to, from, next) => {
    if (to.meta?.title) {
        document.title = to.meta.title as string;
    }
    next();
});

export default router;