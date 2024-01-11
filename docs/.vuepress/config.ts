import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
    lang: "zh-CN",
    title: "Z",
    description: "个人网站",
    permalink: ":year/:month/:day/:title/",
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    theme: defaultTheme({

        navbar: [
            {
                text: '简介',
                children: [
                    {
                        text: 'SubGroup',
                        children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                    },
                ],
            },
            {
                text: '分类',
                children: [
                    {
                        text: 'Always active',
                        link: '/',
                        activeMatch: '/',
                    },
                    {
                        text: 'Active on /foo/',
                        link: '/not-foo/',
                        activeMatch: '^/foo/',
                    },
                ],
            },
        ],
    }),
    plugins: [
        searchPlugin({
        }),
    ],
}