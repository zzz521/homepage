import type { ILinkCategory, ILinkItem, ILinkManager } from '@/types';

/**
 * 链接管理服务
 * 单一职责：专门处理链接数据的增删改查
 */
export class LinkManager implements ILinkManager {
    private _links: ILinkItem[] = [];
    private _categories: ILinkCategory[] = [];

    constructor(initialLinks: ILinkItem[] = [], initialCategories: ILinkCategory[] = []) {
        this._links = [...initialLinks];
        this._categories = [...initialCategories];
    }

    get links(): ILinkItem[] {
        return [...this._links];
    }

    get categories(): ILinkCategory[] {
        return [...this._categories];
    }

    addLink(link: ILinkItem): void {
        if (this._links.find(l => l.id === link.id)) {
            throw new Error(`链接 ${link.id} 已存在`);
        }
        this._links.push({ ...link });
    }

    removeLink(id: string): void {
        const index = this._links.findIndex(l => l.id === id);
        if (index === -1) {
            throw new Error(`链接 ${id} 不存在`);
        }
        this._links.splice(index, 1);
    }

    updateLink(id: string, updates: Partial<ILinkItem>): void {
        const link = this._links.find(l => l.id === id);
        if (!link) {
            throw new Error(`链接 ${id} 不存在`);
        }
        Object.assign(link, updates);
    }

    getLinksByCategory(categoryId: string): ILinkItem[] {
        return this._links.filter(link => link.category === categoryId);
    }

    searchLinks(query: string): ILinkItem[] {
        const lowerQuery = query.toLowerCase();
        return this._links.filter(link => 
            link.title.toLowerCase().includes(lowerQuery) ||
      link.description.toLowerCase().includes(lowerQuery) ||
      link.tags.some(tag => tag.toLowerCase().includes(lowerQuery)),
        );
    }

    /**
   * 获取自己开发的工具
   */
    getOwnTools(): ILinkItem[] {
        return this._links.filter(link => link.isOwn);
    }

    /**
   * 获取特色推荐
   */
    getFeaturedLinks(): ILinkItem[] {
        return this._links.filter(link => link.featured);
    }

    /**
   * 添加分类
   */
    addCategory(category: ILinkCategory): void {
        if (this._categories.find(c => c.id === category.id)) {
            throw new Error(`分类 ${category.id} 已存在`);
        }
        this._categories.push({ ...category });
    }
}