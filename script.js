document.querySelector('.portal-btn').addEventListener('click', function() {
    const portal = document.querySelector('.portal');
    portal.classList.add('active');
    
    setTimeout(() => {
        window.location.href = 'kingdom.html';
    }, 1500);
});