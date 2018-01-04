# DuoLang Js
it's simple model for multi language website
### how to use ?
it's simple
1. include the js file in page `<script src="duolang.js"></script>` 
2. create new object `var lng = new Language();`
3. set your dictionary by `lng.setWords({'About' : 'About Us','Contact':'Contact Us','SignIn' :'Sign In',},'en');`
4. `lng.setWords(dictionary array , language symbol string )` you can use ['en','ar','fr'] for example.
5. set language by `lng.setLang();`
6.if you use Arabic language use this `lng.arabicDirection();`  to change direction of design.     
