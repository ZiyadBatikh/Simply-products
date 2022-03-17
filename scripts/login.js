function showOrHideEye() {
    var input = document.getElementById("myInput");
    var showEye = document.getElementById("hide1");
    var hideEye = document.getElementById("hide2");

    if (input.type === 'password') {
        input.type = "text";
        showEye.style.display = 'block';
        hideEye.style.display = 'none';


    } else {
        input.type = "password";
        showEye.style.display = 'none';
        hideEye.style.display = 'block';

    }
}