var t = document.querySelectorAll('.js-modals-container')[0];

t.addEventListener("DOMNodeInserted", function(){
    var e = t.querySelectorAll('.username');
    if (e.length == 1) {
        var user = e[0];
        if (! user.getAttribute('data-urlified')){
            user.setAttribute('data-urlified', 'true');

            var user_ = user.cloneNode(true);
            var span = user_.children[0];
            user_.removeChild(span);
            username = user_.textContent;
        
            var a = document.createElement('a');
            a.href = "https://twitter.com/" + username;
        
            user.parentNode.insertBefore(a, user);
            a.appendChild(user);
        }
    }
});
