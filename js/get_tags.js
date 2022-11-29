//get_tags.js
window.addEventListener("load", function (){
    var all_element = doucument.getElementsByTagName('*');
    Array.prototype.forEach.call(all_element, function (el){
        var includePath = el.dataset.includePath;
        if (includePath){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function (){
                if(this.readyState==4 && this.status==200){
                    el.outerHTML = this.responseTest;
                }
            };
            xhttp.open('Get', includePath, true);
            xhttp.send();
        }
    });
});