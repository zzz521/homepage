// 基础类型定义

/**
 * 链接项接口
 */
export interface ILinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string;
  category: string;
  tags: string[];
  isOwn: boolean; // 是否为自己开发的工具
  featured?: boolean; // 是否为特色推荐
}

/**
 * 链接分类接口
 */
export interface ILinkCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
  color?: string;
}

/**
 * 介绍步骤接口
 */
export interface IIntroStep {
  id: string;
  title: string;
  content: string;
  animation?: string;
  background?: string;
}

/**
 * 步骤管理器接口
 */
export interface IStepManager {
  currentStep: number;
  totalSteps: number;
  nextStep(): void;
  prevStep(): void;
  goToStep(step: number): void;
  canGoNext(): boolean;
  canGoPrev(): boolean;
}

/**
 * 链接管理器接口
 */
export interface ILinkManager {
  links: ILinkItem[];
  categories: ILinkCategory[];
  addLink(link: ILinkItem): void;
  removeLink(id: string): void;
  updateLink(id: string, updates: Partial<ILinkItem>): void;
  getLinksByCategory(categoryId: string): ILinkItem[];
  searchLinks(query: string): ILinkItem[];
}