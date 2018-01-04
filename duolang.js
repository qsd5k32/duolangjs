var Language = /** @class */ (function () {
    function Language() {
        this.Words = {};
    }
    Language.prototype.getCookie = function (name) {
        var nameLenPlus = (name.length + 1);
        return document.cookie
            .split(';')
            .map(function (c) { return c.trim(); })
            .filter(function (cookie) {
            return cookie.substring(0, nameLenPlus) === name + "=";
        })
            .map(function (cookie) {
            return decodeURIComponent(cookie.substring(nameLenPlus));
        })[0] || null;
    };
    Language.prototype.getLang = function (name) {
        if (name === void 0) { name = 'lang'; }
        if (this.getCookie(name) === null)
            return 'en';
        if (this.getCookie(name) != null)
            return this.getCookie(name);
    };
    Language.prototype.setWords = function (data, lang) {
        this.Words[lang] = data;
    };
    Language.prototype.setCookieLang = function (name) {
        if (name === void 0) { name = this.getLang(); }
        document.cookie = "lang=" + name;
        location.reload();
    };
    Language.prototype.setLang = function (name) {
        if (name === void 0) { name = this.getLang(); }
        var data_Words = this.Words[name];
        for (var w in data_Words) {
            var atr = "[data-word='" + w + "']";
            if (document.querySelector(atr) != null)
                document.querySelector(atr).innerHTML += data_Words[w];
        }
    };
    Language.prototype.arabicDirection = function (lang) {
        if (this.getLang() === "ar")
            document.querySelector("body").style.direction = "rtl";
    };
    return Language;
}());
