var app = window.app || {};
app.supported = function() {
    if('querySelector' in document && 'addEventListener' in window && 'localStorage' in window){
        return true;
    }
};
app.require = function(param, script){
    script = document.createElement('script');
    script.src = param;
    script.async = true;
    document.body.appendChild(script);
};