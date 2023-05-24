var n = document.querySelectorAll(".drum").length;
for (i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", good);
}
function good() {
    var click = this.innerHTML;
    makesound(click);
    buttonAnimation(click);
}
function makesound(me) {
    switch (me) {
        case 'w':
            {
                var sound = new Audio('sounds/crash.mp3')
                sound.play();
                break;

            }

        case 'a':
            {
                var sound = new Audio('sounds/kick-bass.mp3')
                sound.play();
                break;

            }
        case 's':
            {
                var sound = new Audio('sounds/snare.mp3')
                sound.play();
                break;

            }
        case 'd':
            {
                var sound = new Audio('sounds/tom-1.mp3')
                sound.play();
                break;

            }
        case 'j':
            {
                var sound = new Audio('sounds/tom-2.mp3')
                sound.play();
                break;

            }
        case 'k':
            {
                var sound = new Audio('sounds/tom-3.mp3')
                sound.play();
                break;

            }
        case 'l':
            {
                var sound = new Audio('sounds/tom-4.mp3')
                sound.play();
                break;

            }


    }


}
document.addEventListener("keypress", function (event) {
    makesound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
});

function buttonAnimation(light) {
    document.querySelector("." + light).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + light).classList.remove("pressed");
    }, 100);
}
