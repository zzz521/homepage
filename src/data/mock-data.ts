import type { ILinkCategory, ILinkItem } from '@/types';

/**
 * 模拟分类数据
 */
export const mockCategories: ILinkCategory[] = [
    {
        id: 'development',
        name: '开发工具',
        description: '编程开发相关的实用工具',
        icon: 'Edit',        // 更新为 Edit
        color: '#3b82f6',
    },
    {
        id: 'design',
        name: '设计资源',
        description: '设计师必备的工具和素材',
        icon: 'Brush',       // 更新为 Brush
        color: '#8b5cf6',
    },
    {
        id: 'productivity',
        name: '效率工具',
        description: '提升工作效率的实用工具',
        icon: 'Lightning',   // 更新为 Lightning
        color: '#10b981',
    },
    {
        id: 'learning',
        name: '学习资源',
        description: '技术学习和知识获取平台',
        icon: 'Document',    // 更新为 Document
        color: '#f59e0b',
    },
    {
        id: 'entertainment',
        name: '娱乐休闲',
        description: '有趣的网站和娱乐内容',
        icon: 'VideoPlay',   // 保持 VideoPlay
        color: '#ef4444',
    },
    {
        id: 'own-tools',
        name: '自研工具',
        description: '自主开发的实用工具',
        icon: 'Setting',     // 更新为 Setting
        color: '#06b6d4',
    },
];

/**
 * 模拟链接数据
 */
export const mockLinks: ILinkItem[] = [
    // 开发工具
    {
        id: 'github',
        title: 'GitHub',
        description: '全球最大的代码托管平台，开发者必备',
        url: 'https://github.com',
        category: 'development',
        tags: ['代码托管', 'Git', '开源'],
        isOwn: false,
        featured: true,
    },
    {
        id: 'vscode',
        title: 'Visual Studio Code',
        description: '微软开发的免费代码编辑器',
        url: 'https://code.visualstudio.com',
        category: 'development',
        tags: ['编辑器', 'IDE', '微软'],
        isOwn: false,
        featured: true,
    },
    {
        id: 'postman',
        title: 'Postman',
        description: 'API开发和测试的强大工具',
        url: 'https://www.postman.com',
        category: 'development',
        tags: ['API', '测试', '开发'],
        isOwn: false,
    },
    
    // 设计资源
    {
        id: 'figma',
        title: 'Figma',
        description: '协作式界面设计工具',
        url: 'https://www.figma.com',
        category: 'design',
        tags: ['UI设计', '协作', '原型'],
        isOwn: false,
        featured: true,
    },
    {
        id: 'unsplash',
        title: 'Unsplash',
        description: '高质量免费图片素材库',
        url: 'https://unsplash.com',
        category: 'design',
        tags: ['图片', '素材', '免费'],
        isOwn: false,
    },
    {
        id: 'dribbble',
        title: 'Dribbble',
        description: '设计师作品展示和灵感平台',
        url: 'https://dribbble.com',
        category: 'design',
        tags: ['设计', '灵感', '作品集'],
        isOwn: false,
    },
    
    // 效率工具
    {
        id: 'notion',
        title: 'Notion',
        description: '全能的笔记和协作工具',
        url: 'https://www.notion.so',
        category: 'productivity',
        tags: ['笔记', '协作', '管理'],
        isOwn: false,
        featured: true,
    },
    {
        id: 'trello',
        title: 'Trello',
        description: '简单易用的项目管理工具',
        url: 'https://trello.com',
        category: 'productivity',
        tags: ['项目管理', '看板', '协作'],
        isOwn: false,
    },
    
    // 学习资源
    {
        id: 'mdn',
        title: 'MDN Web Docs',
        description: 'Web开发技术文档和学习资源',
        url: 'https://developer.mozilla.org',
        category: 'learning',
        tags: ['文档', 'Web', '学习'],
        isOwn: false,
        featured: true,
    },
    {
        id: 'stackoverflow',
        title: 'Stack Overflow',
        description: '程序员问答社区',
        url: 'https://stackoverflow.com',
        category: 'learning',
        tags: ['问答', '社区', '编程'],
        isOwn: false,
    },
    
    // 娱乐休闲
    {
        id: 'codepen',
        title: 'CodePen',
        description: '前端代码分享和展示平台',
        url: 'https://codepen.io',
        category: 'entertainment',
        tags: ['代码', '分享', '前端'],
        isOwn: false,
    },
    
    // 自研工具
    {
        id: 'my-tool-1',
        title: '个人工具箱',
        description: '集成多种实用功能的个人工具集合',
        url: '#',
        category: 'own-tools',
        tags: ['工具集', '实用', '个人开发'],
        isOwn: true,
        featured: true,
    },
    {
        id: 'my-tool-2',
        title: '代码片段管理器',
        description: '管理和分享代码片段的工具',
        url: '#',
        category: 'own-tools',
        tags: ['代码片段', '管理', '分享'],
        isOwn: true,
    },
];