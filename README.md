# DuoLang Js
it's simple model for multi language website
### how to use ?
it's simple
* include the js file in page `<script src="duolang.js"></script>` 
* create new object `var lng = new Language();`
* set your dictionary by `lng.setWords({'About' : 'About Us','Contact':'Contact Us','SignIn' :'Sign In',},'en');`
* `lng.setWords(dictionary array , language symbol string )` you can use ['en','ar','fr'] for example.
* set language by `lng.setLang();`
* > in html use
* `data-word` Attribute to set content to element, like `<p data-word="About"></p>`
* if you use Arabic language use this `lng.arabicDirection();`  to change direction of design.
* use this for buttons or any event to switch between languages `lng.setCookieLang( language symbol string )`  
