document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.album-gallery');
    const galleryContainer = document.querySelector('.album-gallery-container');

    galleryContainer.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // 마우스 위치 계산
        const scrollWidth = gallery.scrollWidth - galleryContainer.clientWidth;
        const scrollPos = (x / galleryContainer.clientWidth) * scrollWidth;

        gallery.scrollLeft = scrollPos;
    });
});
