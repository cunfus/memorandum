document.querySelectorAll('#english').forEach(item => {
    item.addEventListener('click', function () {
        // console.log(item.innerText)
        var sound = document.createElement('audio');
        sound.id = 'audio-player';
        sound.src = 'https://dict.youdao.com/dictvoice?type=2&audio='+item.innerText;
        sound.type = 'audio/mpeg';
        sound.play();
    })
});

