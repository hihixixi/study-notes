const secret = require('./config/secret.js');
const moment = require('moment');
moment.locale('zh-cn');



module.exports = [
    [
        '@vuepress/;ast-updated', {
            transformer: (timestamp) => {                
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
            clientId: secret.clientId,
            clientSecret: secret.clientSecret,
            autoCreateIssue: true,
        },
    ],
    '@vuepress/back-to-top', true
]