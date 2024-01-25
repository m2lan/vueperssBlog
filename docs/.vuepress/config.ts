import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
    base: '/vueperssBlog/',
    lang: "zh-CN",
    title: "Z",
    description: "操作手册",
    permalink: ":year/:month/:day/:title/",
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '易销帮',
                link: '/yxb/admin-opt.md'
            },
            {
                text: '物流追踪',
                link: '/logistics/track'
            },
            {
                text: '供应商产品库',
                link: '/supplier/infomation'
            },
            {
                text: '分类',
                children: [
                    {
                        text: 'Centos7',
                        link: '/centos7/install-nodejs18'
                    },
                    {
                        text: 'Chrome',
                        link: '/chrome/default-unsecure-port'
                    }
                ],
            },
        ],
        sidebar: {
            '/centos7': [
                {
                    text: 'Centos7',
                    collapsible: true,
                    children: [
                        'install-nodejs18'
                    ]
                }
            ],
            '/chrome': [
                {
                    text: 'Chrome',
                    collapsible: true,
                    children: [
                        'default-unsecure-port'
                    ]
                }
            ],
            '/yxb/': [
                'admin-opt',
                '360browser'
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