window.addEventListener('load', () => {
    const loading = document.getElementById('loading-screen');
    const content = document.getElementById('main-content');

    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
            content.classList.add('visible');
        }, 800);
    }, 2500); // Đợi 2.5 giây rồi vào game
});
