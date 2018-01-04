class Language{

    Words : object = {};

    getCookie(name: string): string {
        const nameLenPlus = (name.length + 1);
        return document.cookie

            .split(';')
            .map(c => c.trim())
            .filter(cookie => {
                return cookie.substring(0, nameLenPlus) === `${name}=`;
            })
            .map(cookie => {
                return decodeURIComponent(cookie.substring(nameLenPlus));
            })[0] || null;
    }

    getLang(name : string = 'lang'){

        if(this.getCookie(name) === null) return 'en';

        if(this.getCookie(name) != null) return this.getCookie(name);

    }
    setWords(data : any , lang : string) {

        this.Words[lang] = data;

    }


    setCookieLang(name : string = this.getLang()){

        document.cookie = "lang=" + name;
        location.reload();
    }


    setLang(name = this.getLang()){

        let data_Words = this.Words[name];

        for (let w in data_Words){
            let atr:string = "[data-word='"  + w + "']";
            if(document.querySelector(atr) != null) document.querySelector(atr).innerHTML += data_Words[w];
        }

    }
    arabicDirection(lang){
        if(this.getLang() === "ar") document.querySelector("body").style.direction = "rtl";
    }
}

