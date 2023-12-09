function showWinModal() {
    document.querySelector('body').style.pointerEvents = 'none';
    setTimeout(function () {
        var modalwin = document.getElementById('modal-content1');
        modalwin.style.display = "block";
        document.getElementById("modal-close1").addEventListener("click", function () {
            modalwin.style.display = "none";
        });
    }, 1000);
}
