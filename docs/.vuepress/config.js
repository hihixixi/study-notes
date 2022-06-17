const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
const moment = require('moment');

module.exports = {
    base: '/docs/',
    title: '杜毅柳',
    description: '一个又菜又爱学的人!',
    plugins:[
        [
            '@vuepress/;ast-updated',
            {
                transformer: (timestamp) => {
                    moment,locale('zh-cn');
                    return moment(timestamp).format('LLLL');
                }
            }
        ]
    ],
    themeConfig: {
        lastUpdated:'更新时间',
        logo: '/img/logo.png',
        nav: navConf,
        sidebar: sidebarConf,
    }
}