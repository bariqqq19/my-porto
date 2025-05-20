<?php
// Cek apakah permintaan menggunakan POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db   = "portfolio";

    // Koneksi ke database
    $conn = new mysqli($host, $user, $pass, $db);

    // Periksa koneksi
    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }

    // Ambil data dari form dengan perlindungan XSS sederhana
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $phone   = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Simpan ke database dengan prepared statement
    $sql = "INSERT INTO contact (name, email, phone, message) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $name, $email, $phone, $message);

    if ($stmt->execute()) {
        echo "<script>alert('Pesan berhasil dikirim!'); window.location.href='index.html';</script>";
    } else {
        echo "Gagal mengirim: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    // Jika bukan POST, kembalikan error 405
    http_response_code(405);
    echo "Metode tidak diizinkan.";
}
?>
