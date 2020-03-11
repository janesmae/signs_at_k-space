(function(){
  "use strict";
  var t,s,r=6,h=function(){
    this.offsetHeight > t && (r+=1),
    s = t/r,
    this.style.fontSize = s+'px'
  },b=document.getElementById("editable");
  t=b.offsetHeight;
  b.addEventListener("input", h);
})();
