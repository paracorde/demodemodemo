function transform(x, maxtime){
    x.innerHTML = "";
    time = 0;
    recur = function(){
        time += 100;
        x.parentNode.children[1].children[0].style.width = time/maxtime*140+"px";
        x.parentNode.children[2].children[0].innerHTML = "0:0"+Math.floor(time/1000);
        if (time >= maxtime) {x.innerHTML = ""; return};
        setTimeout(recur, 100);
    }
    setTimeout(recur, 100);
}

window.onload = function(){
    setTimeout(function(){
        document.getElementById('thisone').focus();
        setTimeout(function(){
            document.getElementById('cover').classList.add('show');
            // document.getElementById('bigpost').style.display = 'block';
            document.getElementById('bigpost').classList.add('pop');
            setTimeout(function(){
                transform(document.getElementById('play1'), 6000);
                setTimeout(function(){
                    transform(document.getElementById('play2'), 5500);
                    setTimeout(function(){
                        transform(document.getElementById('play3'), 3000);
                    }, 6000);
                }, 6500);
            }, 3000);
        }, 3000);
    }, 3000);
}