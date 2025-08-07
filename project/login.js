(function) {
const fonts = ["cursive", "sans-serif", "serif", "monospace"]; let captchaValue = "";
function generateCaptcha(){
}
let value = btoa (Math.random() * 1000000000);
value =value.substr(0,5+Math.random()*5);
captchavalue = value;
}
function setCaptcha(){
let html = captchavalue.split("").map((char)=>{
const rotate = -20+ Math.trunc (Math.random()*30); 
const font = Math.trunc(Math.random()*fonts.length);
 return '<span
style="
transform:rotate(${rotate}deg);
font-family:${fonts [font]}
"
>${char}</span>';
}).join("");
document.querySelector(".login-form.captcha.preview").innerHTML=html;
}
function initcaptcha (){
    Document.querySelector("login-form .catcha .captcha-refresh").addEventListner("click",function(){
    generateCaptcha();
    setCaptcha();
});
    generateCaptcha();
    setCaptcha();
}
initcaptcha();
})();

