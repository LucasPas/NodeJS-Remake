(function(){
  const doc= document;
  let hover= doc.querySelector("#dlbutton");
  hover.addEventListener("mouseover",function(){
    hover.style.opacity=0.8;
  });
  hover.addEventListener("mouseout",function(){
    hover.style.opacity=1;
  });
})();
(function(){
  const doc= document;
  let hover= doc.querySelector("#dlbutton2");
  hover.addEventListener("mouseover",function(){
    hover.style.opacity=0.8;
  });
  hover.addEventListener("mouseout",function(){
    hover.style.opacity=1;
  });
})();
