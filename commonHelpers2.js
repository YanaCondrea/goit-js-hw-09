import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a={email:"",message:""},t=document.querySelector(".feedback-form"),l="feedback-form-state";t.addEventListener("input",function(e){(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")&&(a[e.target.name]=e.target.value.trim(),localStorage.setItem(l,JSON.stringify(a)))});const s=localStorage.getItem(l);if(s!==null){const e=JSON.parse(s);t.elements.email.value=e.email,a.email=e.email,a.message=e.message,t.elements.message.value=e.message}t.addEventListener("submit",e=>{e.preventDefault(),a.email==""||a.message==""?alert("Fill please all fields"):(console.log(a),localStorage.removeItem(l),t.reset())});
//# sourceMappingURL=commonHelpers2.js.map