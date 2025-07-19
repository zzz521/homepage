<template>
    <div class="category-sidebar">
        <div class="category-sidebar__header">
            <h2 class="category-sidebar__title">
                分类导航
            </h2>
        </div>
        
        <div class="category-sidebar__content">
            <div
                v-for="category in categories"
                :key="category.id"
                :class="[
                    'category-sidebar__item',
                    { 'category-sidebar__item--active': activeCategory === category.id }
                ]"
                @click="handleCategoryClick(category.id)"
            >
                <div class="category-sidebar__item-icon" :style="{ color: category.color }">
                    <el-icon :size="20">
                        <component :is="getIconComponent(category.icon)" />
                    </el-icon>
                </div>
                <div class="category-sidebar__item-content">
                    <h3 class="category-sidebar__item-title">
                        {{ category.name }}
                    </h3>
                    <p class="category-sidebar__item-desc">
                        {{ category.description }}
                    </p>
                </div>
                <div class="category-sidebar__item-count">
                    {{ getCategoryCount(category.id) }}
                </div>
            </div>
            
            <!-- 全部分类选项 -->
            <div
                :class="[
                    'category-sidebar__item',
                    { 'category-sidebar__item--active': activeCategory === 'all' }
                ]"
                @click="handleCategoryClick('all')"
            >
                <div class="category-sidebar__item-icon" style="color: #6b7280;">
                    <el-icon :size="20">
                        <Grid />
                    </el-icon>
                </div>
                <div class="category-sidebar__item-content">
                    <h3 class="category-sidebar__item-title">
                        全部分类
                    </h3>
                    <p class="category-sidebar__item-desc">
                        查看所有链接
                    </p>
                </div>
                <div class="category-sidebar__item-count">
                    {{ totalCount }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ILinkCategory, ILinkItem } from '@/types';
// 使用确实存在的 Element Plus 图标
import { Brush, Document, Edit, Grid, Lightning, Setting, VideoPlay } from '@element-plus/icons-vue';
import { computed } from 'vue';

interface Props {
    categories: ILinkCategory[];
    links: ILinkItem[];
    activeCategory: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    categoryChange: [categoryId: string];
}>();

/**
 * 根据图标名称获取图标组件
 */
const getIconComponent = (iconName?: string) => {
    const iconMap: Record<string, any> = {
        Edit,        // 开发工具 (替代 Code)
        Brush,       // 设计资源 (替代 Palette)
        Lightning,   // 效率工具 (替代 Zap)
        Document,    // 学习资源 (替代 Reading)
        VideoPlay,   // 娱乐休闲
        Setting,     // 自研工具 (替代 Tools)
        Grid,        // 全部分类
    };
    
    return iconMap[iconName || 'Grid'] || Grid;
};

/**
 * 获取分类下的链接数量
 */
const getCategoryCount = (categoryId: string): number => {
    return props.links.filter(link => link.category === categoryId).length;
};

/**
 * 总链接数量
 */
const totalCount = computed(() => props.links.length);

/**
 * 处理分类点击
 */
const handleCategoryClick = (categoryId: string): void => {
    emit('categoryChange', categoryId);
};
</script>

<style lang="scss" scoped>
.category-sidebar {
    @apply w-80 bg-white border-r border-gray-200 h-full overflow-y-auto flex-shrink-0;

    &__header {
        @apply p-6 border-b border-gray-100;

        .category-sidebar__title {
            @apply text-xl font-semibold text-gray-900;
        }
    }

    &__content {
        @apply p-4 space-y-2;
    }

    &__item {
        @apply flex items-center p-4 rounded-lg cursor-pointer;
        @apply transition-all duration-200 hover:bg-gray-50;
        @apply border border-transparent;

        &--active {
            @apply bg-blue-50 border-blue-200;

            .category-sidebar__item-title {
                @apply text-blue-700;
            }

            .category-sidebar__item-desc {
                @apply text-blue-600;
            }
        }

        &:hover:not(&--active) {
            @apply bg-gray-50;
        }

        &-icon {
            @apply flex-shrink-0 mr-3;
        }

        &-content {
            @apply flex-1 min-w-0;

            .category-sidebar__item-title {
                @apply font-medium text-gray-900 text-sm mb-1;
            }

            .category-sidebar__item-desc {
                @apply text-xs text-gray-500 line-clamp-2;
            }
        }

        &-count {
            @apply flex-shrink-0 ml-2 px-2 py-1;
            @apply bg-gray-100 text-gray-600 text-xs rounded-full;
            @apply font-medium min-w-[24px] text-center;
        }
    }
}

// 响应式设计
@media (max-width: 1024px) {
    .category-sidebar {
        @apply w-64;
    }
}

@media (max-width: 768px) {
    .category-sidebar {
        @apply w-full h-auto border-r-0 border-b flex-shrink-0;

        &__header {
            @apply p-4;
        }

        &__content {
            @apply flex overflow-x-auto space-y-0 space-x-2 pb-2 p-4;
        }

        &__item {
            @apply flex-shrink-0 w-48;
        }
    }
}
</style>