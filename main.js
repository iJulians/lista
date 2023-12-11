const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    if (scrollY >= 1275) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', function(){
    backToTop()
})
