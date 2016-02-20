function getTextNodes(element){
     var textNodes=[];
     (function checkElement(elem){
       if(elem.hasChildNodes() && elem.nodeType != 3){
         for(var i=0;i<elem.childNodes.length; i++){
           checkElement(elem.childNodes[i]);
         }
       }else if(elem.nodeType == 3){
         textNodes.push(elem);
       }
     })(element)
     return textNodes;
   }
console.dir(getTextNodes(document.body));