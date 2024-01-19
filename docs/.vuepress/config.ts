import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
    base: '/vueperssBlog/',
    lang: "zh-CN",
    title: "Z",
    description: "个人网站",
    permalink: ":year/:month/:day/:title/",
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '分类',
                children: [
                    {
                        text: 'Centos7',
                        children: [
                            '/document/centos7/install-nodejs18.md'
                        ]
                    },
                    {
                        text: 'Chrome',
                        children: [
                            '/document/chrome/default-unsecure-port.md'
                        ]
                    }
                ],
            },
        ],
        sidebar: {
            '/document/': [
                {
                    text: 'Centos7',
                    collapsible: true,
                    children: [
                        '/document/centos7/install-nodejs18.md'
                    ],
                },
                {
                    text: 'Chrome',
                    collapsible: true,
                    children: [
                        '/document/chrome/default-unsecure-port.md'
                    ],
                }
            ]
        }
    }),
    plugins: [
        searchPlugin({
        }),
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功!"
            }
        }],
    ],
}