<template>
    <div class="link-card" @click="handleClick">
        <div class="link-card__header">
            <div class="link-card__icon">
                <el-icon :size="24">
                    <component :is="getIconComponent()" />
                </el-icon>
            </div>
            <div v-if="link.isOwn" class="link-card__badge">
                自研
            </div>
            <div v-if="link.featured" class="link-card__featured">
                <el-icon :size="16">
                    <Star />
                </el-icon>
            </div>
        </div>
        
        <div class="link-card__content">
            <h3 class="link-card__title">
                {{ link.title }}
            </h3>
            <p class="link-card__description">
                {{ link.description }}
            </p>
        </div>
        
        <div class="link-card__footer">
            <div class="link-card__tags">
                <span
                    v-for="tag in link.tags.slice(0, 3)"
                    :key="tag"
                    class="link-card__tag"
                >
                    {{ tag }}
                </span>
            </div>
            <div class="link-card__action">
                <el-icon :size="16">
                    <ArrowRight />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ILinkItem } from '@/types';
// 使用确实存在的 Element Plus 图标
import { ArrowRight, Brush, Document, Edit, Lightning, Link, Setting, Star, VideoPlay } from '@element-plus/icons-vue';

interface Props {
    link: ILinkItem;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    click: [link: ILinkItem];
}>();

/**
 * 根据分类获取图标组件
 */
const getIconComponent = () => {
    const iconMap: Record<string, any> = {
        development: Edit,        // 开发工具
        design: Brush,           // 设计资源
        productivity: Lightning, // 效率工具
        learning: Document,      // 学习资源
        entertainment: VideoPlay, // 娱乐休闲
        'own-tools': Setting,    // 自研工具
    };
    
    return iconMap[props.link.category] || Link;
};

/**
 * 处理卡片点击
 */
const handleClick = (): void => {
    if (props.link.url && props.link.url !== '#') {
        window.open(props.link.url, '_blank');
    }
    emit('click', props.link);
};
</script>

<style lang="scss" scoped>
.link-card {
    @apply relative bg-white rounded-xl shadow-sm border border-gray-200;
    @apply p-6 cursor-pointer transition-all duration-300;
    @apply hover:shadow-lg hover:scale-105 hover:border-blue-300;
    @apply flex flex-col h-full;

    &__header {
        @apply flex items-start justify-between mb-4;

        .link-card__icon {
            @apply w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center;
            @apply text-blue-600;
        }

        .link-card__badge {
            @apply px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full;
            @apply font-medium;
        }

        .link-card__featured {
            @apply text-yellow-500;
        }
    }

    &__content {
        @apply flex-1 mb-4;

        .link-card__title {
            @apply text-lg font-semibold text-gray-900 mb-2;
            @apply line-clamp-1;
        }

        .link-card__description {
            @apply text-gray-600 text-sm leading-relaxed;
            @apply line-clamp-3;
        }
    }

    &__footer {
        @apply flex items-center justify-between;

        .link-card__tags {
            @apply flex flex-wrap gap-1 flex-1;

            .link-card__tag {
                @apply px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded;
                @apply font-medium;
            }
        }

        .link-card__action {
            @apply text-gray-400 ml-2;
            @apply transition-colors duration-200;
        }
    }

    &:hover {
        .link-card__action {
            @apply text-blue-500;
        }
    }

    // 自研工具特殊样式
    &[data-own="true"] {
        @apply border-green-200 bg-gradient-to-br from-green-50 to-white;

        &:hover {
            @apply border-green-300 shadow-green-100;
        }

        .link-card__icon {
            @apply bg-green-50 text-green-600;
        }
    }

    // 特色推荐特殊样式
    &[data-featured="true"] {
        @apply border-yellow-200 bg-gradient-to-br from-yellow-50 to-white;

        &:hover {
            @apply border-yellow-300 shadow-yellow-100;
        }
    }
}

// 响应式设计
@media (max-width: 768px) {
    .link-card {
        @apply p-4;

        &__header {
            @apply mb-3;

            .link-card__icon {
                @apply w-10 h-10;
            }
        }

        &__content {
            .link-card__title {
                @apply text-base;
            }
        }
    }
}
</style>