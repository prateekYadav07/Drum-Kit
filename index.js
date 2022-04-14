var noOfDrums = document.querySelectorAll('.drum').length

for (var i = 0; i < noOfDrums; i++) {
    document.querySelectorAll('.set .drum')[i].addEventListener('click', function () {
        var key = this.innerHTML
        makeSound(key);
        buttonAnimation(key);
    });
}


document.addEventListener('keydown', function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});


function makeSound(key) {
    var instrument;
    switch (key) {
        case 'w':
            var kickBass = 'sounds/kick-bass.mp3';
            instrument = new Drums(key, kickBass);
            instrument.play();
            break;

        case 'a':
            var tom_2 = 'sounds/tom-2.mp3';
            instrument = new Drums(key, tom_2);
            instrument.play();
            break;

        case 's':
            var tom_4 = 'sounds/tom-4.mp3';
            instrument = new Drums(key, tom_4);
            instrument.play();
            break;

        case 'd':
            var tom_1 = 'sounds/tom-1.mp3';
            instrument = new Drums(key, tom_1);
            instrument.play();
            break;

        case 'j':
            var snare = 'sounds/snare.mp3';
            instrument = new Drums(key, snare);
            instrument.play();
            break;

        case 'k':
            var tom_3 = 'sounds/tom-3.mp3';
            instrument = new Drums(key, tom_3);
            instrument.play();
            break;

        case 'l':
            var crash = 'sounds/crash.mp3';
            instrument = new Drums(key, crash);
            instrument.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    console.log(activeKey.className);
    activeKey.classList.add('pressed');


    var delayInMilliseconds = 100;
    setTimeout(function () {
        activeKey.classList.remove('pressed');
    }, delayInMilliseconds);
}

function Drums(innerHtml, sound) {
    this.innerHtml = innerHtml;
    this.sound = sound;
    this.play = function () {
        var audio = new Audio(sound);
        audio.play();
    }
}