let vm = new Vue({
    el: "#app",
    data: {
        idCard: "",
        flag: 0
    },
    methods: {
        //验证身份证号
        idCardChk: function (str) {
            if (str.length !== 18) {
                return false;
            }
            str = str.toUpperCase();//字符全部转大写
            let newStr = str.substr(0, 17);//取字符前17位
            let wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            let codeArr = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
            let sigma = 0;
            for (let i = 0; i < 17; i++) {
                sigma += parseInt(newStr[i]) * wi[i];
            }
            let code = codeArr[(sigma % 11)];
            newStr = newStr + "" + code;
            return (newStr == str);
        }
    },
    computed: {
        birthday: function () {
            let num = this.idCard;
            let birthday = "未知";
            if (num !== "") {
                if (this.idCardChk(num)) {
                    this.flag = 1;
                    let year = num.substr(6, 4);
                    let month = num.substr(10, 2);
                    let date = num.substr(12, 2);
                    birthday = year + "-" + month + "-" + date;
                    return birthday;
                } else {
                    this.flag = 2;
                    return birthday;
                }
            } else {
                this.flag = 0;
                return birthday;
            }
        },
        gender: function () {
            let garder = "未知";
            let num = this.idCard;
            if (this.idCardChk(num)) {
                gender = num.substr(16, 1);
                return (gender % 2) ? "男" : "女";
            } else {
                return garder;
            }
        },
        areaInfo: function () {
            let area = "未知";
            let num = this.idCard;
            if (this.idCardChk(num)) {
                let areaCode = num.substr(0, 6);
                if (areaCode != "undefined") {
                    for (x in areaCodeArr) {
                        if (areaCode == areaCodeArr[x].areaCode) {
                            area = areaCodeArr[x].detail;
                            break;
                        }
                    }
                }
            }
            return area;
        },
        age: function () {
            let age = "未知";
            let num = this.idCard;
            if (this.idCardChk(num)) {
                now = new Date();
                let nowyear = now.getFullYear();
                let nowmonth = now.getMonth();
                let nowdate = now.getDate();
                let year = num.substr(6, 4);
                let month = num.substr(10, 2);
                let date = num.substr(12, 2);
                if (parseInt(nowmonth + "" + nowdate) < parseInt(month + date)) {
                    age = nowyear - year - 1;
                } else {
                    age = nowyear - year;
                }
            }
            return age;
        },
        constellation: function () {
            let num = this.idCard;
            let cst = "未知";
            if (this.idCardChk(num)) {
                let month = num.substr(10, 2);
                let date = num.substr(12, 2);
                let md = month + "" + date;
                if (md != "undefined") {
                    for (x in constellations) {
                        if (parseInt(md) <= parseInt(constellations[x].End) && parseInt(md) >= parseInt(constellations[x].Start)) {
                            cst = constellations[x].Name;
                            break;
                        }
                    }
                }
            }
            return cst;
        }
    },
});
