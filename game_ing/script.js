document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const danceVideo = document.getElementById('danceVideo');
    const webcamVideo = document.getElementById('webcam');

    // 진행 상황 업데이트
    danceVideo.addEventListener('timeupdate', () => {
        const progress = (danceVideo.currentTime / danceVideo.duration) * 100;
        progressBar.style.width = progress + '%';
    });

    // 웹캠 스트림 시작
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            webcamVideo.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing webcam: ', error);
        });
});
