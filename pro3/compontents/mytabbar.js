Vue.component('mytabbar', {
    props: ['active'],
    data: function () {
        return {}
    },
    template: '<van-tabbar v-model="active">\n' +
        '        <van-tabbar-item url="index.html" icon="home-o">新闻</van-tabbar-item>\n' +
        '        <van-tabbar-item url="search.html" icon="search">搜索</van-tabbar-item>\n' +
        '        <van-tabbar-item url="weather.html" icon="calender-o">天气</van-tabbar-item>\n' +
        '        <van-tabbar-item url="uesr.html" icon="user-circle-o">我</van-tabbar-item>\n' +
        '    </van-tabbar>'
})