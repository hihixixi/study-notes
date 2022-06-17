const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
const headConf = require('./config/headConf.js');
const pluginsConf = require('./config/pluginsConf.js');

module.exports = {
    base: '/study-notes/',
    title: '杜毅柳',
    description: '一个又菜又爱学的人!',
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/img/logo.png',
        nav: navConf,
        sidebar: sidebarConf,
    }
}