let app3 = new Vue({
    el: '#app3',
    ready: function () {
        let categoryService = new WebService();
        categoryService.setUrl(server + "news_category");
        categoryService.setData("");
        categoryService.setSuccessCallback(categoryCallbackHandler);
        categoryService.Load();
        function categoryCallbackHandler(callbackData) {
            console.log(callbackData);
        }
    }
});
