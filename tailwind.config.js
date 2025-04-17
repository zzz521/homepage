/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './src/App.vue',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#020a1a',
            white: '#fff',
            // 绿色
            green: {
                40: '#F1F8EE',
                75: '#E3F1DE',
                200: '#B5DAA6',
                500: '#45A321',
                600: '#1D8820',
                700: '#1C6606',
                800: '#0D4001',
            },
            // 灰色
            gray: {
                10: '#fafbfc',
                20: '#f4f5f7',
                30: '#ebecf0',
                40: '#dfe1e6',
                55: '#bcc2cc',
                60: '#b3bac5',
                90: '#8993a4',
                140: '#8A8A8A',
                200: '#6b778c',
                450: '#495973',
                600: '#344563',
                800: '#444444',
                1100: '#020a1a',
                hover: '#b3bac533',
                disable: '#bcc2cc99'
            },
            // 灰色
            grey: {
                10: '#fafbfc',
                20: '#f4f5f7',
                30: '#ebecf0',
                40: '#dfe1e6',
                55: '#bcc2cc',
                60: '#b3bac5',
                90: '#8993a4',
                140: '#8A8A8A',
                200: '#6b778c',
                450: '#495973',
                600: '#344563',
                800: '#444444',
                1100: '#020a1a',
                hover: '#b3bac533',
                disable: '#bcc2cc99'
            },
            // 蓝色
            blue: {
                40: '#edf4fc',
                75: '#ddebf8',
                200: '#a3c8ed',
                500: '#1976d2',
                600: '#1667b8',
                700: '#13599e',
            },
            eureka: {
                40: '#F2F9FF',
                75: '#E6F4FF',
                200: '#82C3FF',
                500: '#0764E9',
                600: '#0456D1',
                700: '#0247B0',
                800: '#00369C',
            },
            // 红色
            red: {
                40: '#fcedef',
                75: '#f8dde0',
                200: '#eda3ad',
                500: '#d11a32',
                600: '#b8172c',
                700: '#9e1426',
            },
            // 黄色
            yellow: {
                40: '#fdf5ec',
                75: '#faecda',
                200: '#f1cb9c',
                500: '#dc7c08',
                600: '#c26a05',
                700: '#a85604',
            },
            // 其他
            purple: {
                75: '#e2d5ed',
                500: '#914aed',
            },
            spring: {
                40: '#effafa',
                75: '#d4f0f6',
                200: '#82d7e4',
                500: '#27b4d1',
                600: '#008fac',
                700: '#0c6885',
            },
            special: {
                yellow: '#f7f28d',
            },
        },
        extend: {},
    },
    plugins: [],
};
