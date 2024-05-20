document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const danceVideo = document.getElementById('dance-video');

    // 비디오 재생 시간에 맞춰 진행률을 업데이트하는 함수
    function updateProgress() {
        const duration = danceVideo.duration;
        const currentTime = danceVideo.currentTime;
        
        if (duration > 0) {
            const progress = (currentTime / duration) * 100;
            progressBar.style.width = progress + '%';
        }

        // 다음 프레임에서 다시 업데이트
        requestAnimationFrame(updateProgress);
    }

    // 비디오가 재생될 때마다 진행률 업데이트 시작
    danceVideo.addEventListener('timeupdate', updateProgress);

    // 웹캠 스트림을 비디오 요소에 연결
    const constraints = { video: true };
    const userVideo = document.getElementById('user-video');

    function handleSuccess(stream) {
        userVideo.srcObject = stream;
    }

    function handleError(error) {
        console.error('Error accessing media devices.', error);
    }

    navigator.mediaDevices.getUserMedia(constraints)
        .then(handleSuccess)
        .catch(handleError);
});
