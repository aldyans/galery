const evThumb = document.querySelectorAll('.thumb');

function ubahGambar(item) {
    attribute = item.getAttribute('src');
    const jumbo = document.querySelector('.jumbo');
    jumbo.setAttribute('src', attribute);
    jumbo.classList.add('fade');
    setTimeout(() => {
        jumbo.classList.toggle('fade');
    }, 500);
};

function thumbClear() {
    evThumb.forEach(element => {
        element.className = 'thumb';
    });
}

evThumb.forEach(element => {
    element.addEventListener('click', function(e) {
        const item = e.target;
        ubahGambar(item);
        thumbClear();
        item.classList.add('active');
    });
});
