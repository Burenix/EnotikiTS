function showLoseModal () {
    document.querySelector('body')!.style.pointerEvents = 'none';
    setTimeout(function(){ 
        const modallose: any = document.getElementById('modal-content');
        modallose.style.display="block"; 
        document.getElementById("modal-close")!.addEventListener("click", function(){
            modallose.style.display="none";            
        });
    }, 1000);
}