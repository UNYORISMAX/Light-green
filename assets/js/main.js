var myModal = new bootstrap.Modal(document.getElementById("modal-hero"), {});

document.onreadystatechange = function () {
myModal.show();
};

if (document.querySelectorAll('[data-bss-baguettebox]').length > 0) {
   baguetteBox.run('[data-bss-baguettebox]', { animation: 'slideIn' });
}