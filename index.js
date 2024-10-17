document.addEventListener("DOMContentLoaded", function() {
    const showMessageBtn = document.getElementById('message');
    showMessageBtn.addEventListener('click', function() {
        M.toast({html: '¡Se agrego al carrito!', classes: 'rounded amber darken-1'});
        // alert('¡Se agrego al carrito!');
    });

    const changeThemeBtn = document.getElementById('change-theme');
    const body = document.body;

    changeThemeBtn.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });
});
