document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-li");

    hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    });
});

$(document).ready(function() {
    $("#contact-form").submit(function(e) {
        e.preventDefault();

        let isValid = true;

        // Validasi Nama
        const name = $("#name").val().trim();
        if (name === "" || name.length > 50) {
            alert("Nama lengkap wajib diisi dan maksimal 50 karakter.");
            isValid = false;
        }

        // Validasi Email
        const email = $("#email").val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email) || email.length > 50) {
            alert("Email wajib diisi dengan format yang benar dan maksimal 50 karakter.");
            isValid = false;
        }

        // Validasi Nomor Handphone
        const phone = $("#phone").val().trim();
        const phonePattern = /^[0-9]{10,13}$/;
        if (phone === "" || !phonePattern.test(phone)) {
            alert("Nomor handphone wajib diisi dengan angka 10-13 digit.");
            isValid = false;
        }

        // Validasi Pesan
        const message = $("#message").val().trim();
        if (message === "" || message.length > 300) {
            alert("Pesan wajib diisi dan maksimal 300 karakter.");
            isValid = false;
        }

        if (isValid) {
            alert("Formulir berhasil dikirim!");
            this.submit();
        }
    });
});
