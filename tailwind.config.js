/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './src/App.vue',
    ],
    theme: {
        colors: {
            // 保留原有的自定义颜色
            transparent: 'transparent',
            black: '#020a1a',
            white: '#fff',
            // 绿色 - 添加完整的绿色系列
            green: {
                40: '#F1F8EE',
                50: colors.green[50],
                75: '#E3F1DE',
                100: colors.green[100],
                200: '#B5DAA6',
                300: colors.green[300],
                400: colors.green[400],
                500: '#45A321',
                600: '#1D8820',
                700: '#1C6606',
                800: '#0D4001',
                900: colors.green[900],
            },
            // 灰色
            gray: {
                10: '#fafbfc',
                20: '#f4f5f7',
                30: '#ebecf0',
                40: '#dfe1e6',
                50: colors.gray[50],
                55: '#bcc2cc',
                60: '#b3bac5',
                90: '#8993a4',
                100: colors.gray[100],
                140: '#8A8A8A',
                200: '#6b778c',
                300: colors.gray[300],
                400: colors.gray[400],
                450: '#495973',
                500: colors.gray[500],
                600: '#344563',
                700: colors.gray[700],
                800: '#444444',
                900: colors.gray[900],
                1100: '#020a1a',
                hover: '#b3bac533',
                disable: '#bcc2cc99',
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
                disable: '#bcc2cc99',
            },
            // 蓝色
            blue: {
                40: '#edf4fc',
                50: colors.blue[50],
                75: '#ddebf8',
                100: colors.blue[100],
                200: '#a3c8ed',
                300: colors.blue[300],
                400: colors.blue[400],
                500: '#1976d2',
                600: '#1667b8',
                700: '#13599e',
                800: colors.blue[800],
                900: colors.blue[900],
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
                50: colors.red[50],
                75: '#f8dde0',
                100: colors.red[100],
                200: '#eda3ad',
                300: colors.red[300],
                400: colors.red[400],
                500: '#d11a32',
                600: '#b8172c',
                700: '#9e1426',
                800: colors.red[800],
                900: colors.red[900],
            },
            // 黄色
            yellow: {
                40: '#fdf5ec',
                50: colors.yellow[50],
                75: '#faecda',
                100: colors.yellow[100],
                200: '#f1cb9c',
                300: colors.yellow[300],
                400: colors.yellow[400],
                500: '#dc7c08',
                600: '#c26a05',
                700: '#a85604',
                800: colors.yellow[800],
                900: colors.yellow[900],
            },
            // 紫色 - 添加完整的紫色系列
            purple: {
                50: colors.purple[50],
                75: '#e2d5ed',
                100: colors.purple[100],
                200: colors.purple[200],
                300: colors.purple[300],
                400: colors.purple[400],
                500: '#914aed',
                600: colors.purple[600],
                700: colors.purple[700],
                800: colors.purple[800],
                900: colors.purple[900],
            },
            // 粉色 - 添加完整的粉色系列
            pink: {
                50: colors.pink[50],
                100: colors.pink[100],
                200: colors.pink[200],
                300: colors.pink[300],
                400: colors.pink[400],
                500: colors.pink[500],
                600: colors.pink[600],
                700: colors.pink[700],
                800: colors.pink[800],
                900: colors.pink[900],
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
