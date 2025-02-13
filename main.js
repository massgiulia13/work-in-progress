document.addEventListener('DOMContentLoaded', function () {
    var transparencyLink = document.getElementById('transparency-link');
    var cardsContainer = document.getElementById('cards-container');
    var logoRegular = document.querySelector('.logo-regular');
    var textInfo = document.querySelector('.text-info');
    var bgGradient = document.querySelector('.bg-gradient');
    var transparencyText = document.querySelector('.transparency-text');
    var backButton = document.querySelector('.btn-primary');

    transparencyLink.addEventListener('click', function () {
        cardsContainer.style.display = (cardsContainer.style.display === 'none') ? 'flex' : 'none';
        textInfo.style.display = (textInfo.style.display === 'none') ? 'block' : 'none';
        logoRegular.classList.toggle('smaller-logo');
        bgGradient.classList.toggle('larger-bg-gradient');
        transparencyText.classList.remove('hidden');
        transparencyText.classList.add('dynamic-text');
    });

    backButton.addEventListener('click', function () {
        cardsContainer.style.display = 'flex';
        textInfo.style.display = 'block';
        logoRegular.classList.remove('smaller-logo');
        bgGradient.classList.remove('larger-bg-gradient');
        transparencyText.classList.remove('dynamic-text');
        transparencyText.classList.add('hidden');
    });
});

function navigateToPage2() {
    document.body.classList.add('fade-out');
    setTimeout(function () {
        window.location.href = 'home.html';
    }, 500);
}

