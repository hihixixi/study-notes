const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
const moment = require('moment');

module.exports = {
    base: '/study-notes/',
    title: '杜毅柳',
    description: '一个又菜又爱学的人!',
    plugins: [
        [
            '@vuepress/;ast-updated',{
                transformer: (timestamp) => {
                    moment, locale('zh-cn');
                    return moment(timestamp).format('LLLL');
                }
            }
        ],
        [
            '@vuepress/pwa', {
                serviceWorker: true,
                updatePopup: {
                    message: "杜某某又肝了新东西!!!",
                    buttonText: "刷新"
                }
            }
        ],
        [
            '@vssue/vuepress-plugin-vssue', {
                // 设置 `platform` 而不是 `api`
                platform: 'github-v4',
          
                // 其他的 Vssue 配置
                owner: 'hihixixi',
                repo: 'study-notes',
                clientId: '7ec6e50f0194e6864c74',
                clientSecret: '1a3bb85eb496638363693a614c7f306787e9113e',
                autoCreateIssue: true,
              },
        ]
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/img/logo.png',
        nav: navConf,
        sidebar: sidebarConf,
    }
}