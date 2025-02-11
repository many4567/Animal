window.addEventListener('load', function () {
    const videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.play();
    });
});