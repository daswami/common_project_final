document.querySelector("#n").addEventListener('click', function() {
    document.querySelector("#yes").style.display = "none";
    document.querySelector("#no").style.display = "block";
}
);

document.querySelector("#y").addEventListener("click", function () {
    document.querySelector("#no").style.display = "none";
    document.querySelector("#yes").style.display = "block";
});