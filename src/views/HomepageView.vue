<template>
    <div class="homepage-view">
        <main class="homepage-main">
            <!-- 侧边栏 -->
            <CategorySidebar
                :categories="categories"
                :links="allLinks"
                :activeCategory="activeCategory"
                @categoryChange="handleCategoryChange"
            />
            
            <!-- 主内容区 -->
            <div class="homepage-content">
                <div class="homepage-content__header">
                    <div class="homepage-content__title-section">
                        <h1 class="homepage-content__title">
                            {{ getCurrentCategoryName() }}
                        </h1>
                        <p class="homepage-content__subtitle">
                            {{ getCurrentCategoryDescription() }}
                        </p>
                    </div>
                    
                    <div class="homepage-content__stats">
                        <span class="homepage-content__count">
                            共 {{ filteredLinks.length }} 个链接
                        </span>
                    </div>
                </div>
                
                <!-- 可滚动的内容区域 -->
                <div class="homepage-content__scrollable">
                    <!-- 特色推荐区域 -->
                    <div v-if="featuredLinks.length > 0 && activeCategory === 'all'" class="featured-section">
                        <h2 class="featured-section__title">
                            <el-icon class="featured-section__icon">
                                <Star />
                            </el-icon>
                            特色推荐
                        </h2>
                        <div class="featured-section__grid">
                            <LinkCard
                                v-for="link in featuredLinks"
                                :key="`featured-${link.id}`"
                                :link="link"
                                @click="handleLinkClick"
                            />
                        </div>
                    </div>
                    
                    <!-- 链接网格 -->
                    <div class="links-section">
                        <h2 v-if="activeCategory === 'all'" class="links-section__title">
                            全部链接
                        </h2>
                        
                        <div class="links-grid">
                            <LinkCard
                                v-for="link in filteredLinks"
                                :key="link.id"
                                :link="link"
                                @click="handleLinkClick"
                            />
                        </div>
                        
                        <!-- 空状态 -->
                        <div v-if="filteredLinks.length === 0" class="empty-state">
                            <el-icon :size="64" class="empty-state__icon">
                                <Box />
                            </el-icon>
                            <h3 class="empty-state__title">
                                暂无链接
                            </h3>
                            <p class="empty-state__description">
                                该分类下还没有添加任何链接
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import CategorySidebar from '@/components/CategorySidebar.vue';
import LinkCard from '@/components/LinkCard.vue';
import { mockCategories, mockLinks } from '@/data/mock-data';
import { LinkManager } from '@/services/LinkManager';
import type { ILinkItem } from '@/types';
import { Box, Star } from '@element-plus/icons-vue';
import { computed, onMounted, ref } from 'vue';

// 响应式数据
const activeCategory = ref<string>('all');
const linkManager = ref<LinkManager>();

// 初始化数据
onMounted(() => {
    linkManager.value = new LinkManager(mockLinks, mockCategories);
});

// 计算属性
const categories = computed(() => linkManager.value?.categories || []);
const allLinks = computed(() => linkManager.value?.links || []);

const filteredLinks = computed(() => {
    if (!linkManager.value) return [];
    
    if (activeCategory.value === 'all') {
        return linkManager.value.links;
    }
    
    return linkManager.value.getLinksByCategory(activeCategory.value);
});

const featuredLinks = computed(() => {
    if (!linkManager.value) return [];
    return linkManager.value.getFeaturedLinks();
});

// 方法
const handleCategoryChange = (categoryId: string): void => {
    activeCategory.value = categoryId;
};

const handleLinkClick = (link: ILinkItem): void => {
    console.log('点击链接:', link);
    // 这里可以添加点击统计等逻辑
};

const getCurrentCategoryName = (): string => {
    if (activeCategory.value === 'all') {
        return 'Geek空间';
    }
    
    const category = categories.value.find(cat => cat.id === activeCategory.value);
    return category?.name || '未知分类';
};

const getCurrentCategoryDescription = (): string => {
    if (activeCategory.value === 'all') {
        return '发现各种实用工具和优质网站资源';
    }
    
    const category = categories.value.find(cat => cat.id === activeCategory.value);
    return category?.description || '';
};
</script>

<style lang="scss" scoped>
.homepage-view {
    @apply h-screen bg-gray-50 overflow-hidden;
}

.homepage-main {
    @apply flex h-full;

    .homepage-content {
        @apply flex-1 flex flex-col overflow-hidden;

        &__header {
            @apply bg-white border-b border-gray-200 p-6;
            @apply flex items-center justify-between flex-shrink-0;

            .homepage-content__title-section {
                .homepage-content__title {
                    @apply text-2xl font-bold text-gray-900 mb-1;
                }

                .homepage-content__subtitle {
                    @apply text-gray-600;
                }
            }

            .homepage-content__stats {
                .homepage-content__count {
                    @apply text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full;
                }
            }
        }

        &__scrollable {
            @apply flex-1 overflow-y-auto;
        }
    }
}

.featured-section {
    @apply p-6 bg-white border-b border-gray-200;

    &__title {
        @apply flex items-center text-lg font-semibold text-gray-900 mb-4;

        .featured-section__icon {
            @apply mr-2 text-yellow-500;
        }
    }

    &__grid {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4;
    }
}

.links-section {
    @apply p-6;

    &__title {
        @apply text-lg font-semibold text-gray-900 mb-6;
    }
}

.links-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6;
}

.empty-state {
    @apply flex flex-col items-center justify-center py-16 text-center;

    &__icon {
        @apply text-gray-300 mb-4;
    }

    &__title {
        @apply text-lg font-medium text-gray-900 mb-2;
    }

    &__description {
        @apply text-gray-500;
    }
}

// 响应式设计
@media (max-width: 1024px) {
    .homepage-main {
        @apply flex-col;
    }

    .links-grid {
        @apply grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
    }

    .featured-section__grid {
        @apply grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
    }
}

@media (max-width: 768px) {
    .homepage-view {
        @apply h-auto min-h-screen overflow-visible;
    }

    .homepage-main {
        @apply flex-col h-auto;
    }

    .homepage-content {
        &__header {
            @apply flex-col items-start space-y-3 p-4;
        }

        &__scrollable {
            @apply overflow-visible;
        }
    }

    .links-grid {
        @apply grid-cols-1 gap-4;
    }

    .featured-section__grid {
        @apply grid-cols-1 gap-4;
    }

    .featured-section,
    .links-section {
        @apply p-4;
    }
}
</style>