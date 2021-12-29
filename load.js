document.body.innerHTML += ('<div id="loader-wrapper"><div id="loader"></div><div class="loader-section section-left"></div><div class="loader-section section-right"></div><div id="load_title">页面加载中</div></div>');
window.onload = function () {
    document.body.className += ' loaded';
}
