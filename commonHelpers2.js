import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),t="feedback-form-state";a.elements.email.value=localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)).email:"";a.elements.message.value=localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)).message:"";a.addEventListener("input",r);a.addEventListener("submit",l);function r(e){localStorage.setItem("feedback-form-state",JSON.stringify({email:e.currentTarget.elements.email.value.trim(),message:e.currentTarget.elements.message.value.trim()}))}function l(e){e.preventDefault(),e.currentTarget.elements.email.value&&e.currentTarget.elements.message.value&&(console.log(JSON.parse(localStorage.getItem(t))),localStorage.removeItem(t),e.currentTarget.reset())}
//# sourceMappingURL=commonHelpers2.js.map
