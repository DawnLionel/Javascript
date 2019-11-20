function WebService() {
    let url;
    this.setUrl = function (_url) {
        url = _url;
    };
    let data;
    this.setData = function (_data) {
        data = _data;
    };
    let successCallback;
    this.setSuccessCallback = function (_successCallback) {
        successCallback = _successCallback;
    };
    let errorCallback;
    this.setErrorCallback = function (_errorCallback) {
        errorCallback = _errorCallback;
    };
    this.Load = function () {
        $axios({
            method:'get',
            url:url,
            data:data,
            crossDomain:true,
            responseType:'json',
            success:successCallback,
            error:errorCallback,
        })
            .then(function (response) {
                successCallback;
        })
            .catch(function (error){
                errorCallback;
        })
    };
}
