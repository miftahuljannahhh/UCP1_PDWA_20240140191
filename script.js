function tampilkanTabel() {
    var tbody = document.getElementById("tabelAnggota");
    if (!tbody) return;
  
    var dataAnggota = [
      { nama: "Haechan Lee", email: "haechan@email.com", minat: "Mobile Development" },
      { nama: "Jeon Wonwoo", email: "wonwoo@email.com", minat: "Data Science" },
      { nama: "Kim Seokjin", email: "jin@email.com", minat: "Cybersecurity" }
    ];
  
    var tambahan = JSON.parse(localStorage.getItem("anggotaBaru") || "[]");
    var list = dataAnggota.concat(tambahan);
    
    var tambahan = JSON.parse(localStorage.getItem("anggotaBaru") || "[]");
    var list = dataAnggota.concat(tambahan);

    for (var i = 0; i < list.length; i++) {
      tbody.innerHTML += "<tr>" +
        "<td>" + (i + 1) + "</td>" +
        "<td>" + list[i].nama + "</td>" +
        "<td>" + list[i].email + "</td>" +
        "<td>" + list[i].minat + "</td>" +
        "</tr>";
    }
  }
  
  var arrayAnggota = [];
  
  function submitForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var minat = document.getElementById("minat").value;
  
    if (nama == "" || email == "" || minat == "") {
      alert("Semua field harus diisi!");
      return;
    }
  
    var anggotaBaru = { nama: nama, email: email, minat: minat };
    arrayAnggota.push(anggotaBaru);
  
    var existing = JSON.parse(localStorage.getItem("anggotaBaru") || "[]");
    existing.push(anggotaBaru);
    localStorage.setItem("anggotaBaru", JSON.stringify(existing));
  
    var hasil = document.getElementById("hasilInput");
    hasil.style.display = "block";
    hasil.innerHTML = "Data berhasil disimpan!<br>Nama: " + nama + " | Email: " + email + " | Minat: " + minat;
  
    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("minat").value = "";
  }
  

  var daftarGambar = [
    "gambar1.jpg",
    "gambar2.jpg"
  ];
  
  var indexGambar = 0;
  
  function gantiGambar() {
    indexGambar = indexGambar + 1;
    if (indexGambar >= daftarGambar.length) {
      indexGambar = 0;
    }
    document.getElementById("gambar").src = daftarGambar[indexGambar];
  }
  
  tampilkanTabel();