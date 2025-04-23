// console.log("Hello World")

// Function untuk menentukan kategori usia
// function getKategoriUsia(usia) {
//     let categoryUsia;
//     if (usia >= 0 && usia <= 12) {
//         categoryUsia = "Anak"
//     } else if (usia >= 13 && usia <= 17) {
//         categoryUsia = "Remaja";
//     } else if (usia >= 18 && usia <= 59) {
//         categoryUsia = "Dewasa";
//     } else if (usia >= 60) {
//         categoryUsia = "Lansia";
//     }
//     console.log(categoryUsia)
//     return
//   } 
//   getKategoriUsia(32);

const prompt = require("prompt-sync")();

  // Function untuk menentukan kategori usia
function getKategoriUsia(usia) {
    if (usia >= 0 && usia <= 12) {
      return "Anak-anak";
    } else if (usia >= 13 && usia <= 17) {
      return "Remaja";
    } else if (usia >= 18 && usia <= 59) {
      return "Dewasa";
    } else if (usia >= 60) {
      return "Lansia";
    } else {
      return "Usia tidak valid";
    }
  }
  
   // Inisialisasi jumlah per kategori
  let jumlahKategori = {
    "Anak-anak": 0,
    "Remaja": 0,
    "Dewasa": 0,
    "Lansia": 0
  };
  
   // Loop untuk input usia
  let lanjut = true;
  
  while (lanjut) {
    let input = prompt("Input usia (ketik 'done' untuk selesai):");
  
    if (input === "done") {
      lanjut = false;
      break;
    }
  
    let usia = parseInt(input);
    if (isNaN(usia)) {
      console.log("Input tidak valid. Masukkan angka.");
      continue;
    }
  
    let kategori = getKategoriUsia(usia);
  
    if (kategori in jumlahKategori) {
      jumlahKategori[kategori]++;
    } else {
      console.log("Usia tidak valid.");
    }
  }
  
   // Tampilkan hasil
  console.log("Jumlah orang per kategori:");
  for (let kategori in jumlahKategori) {
    console.log(`${kategori}: ${jumlahKategori[kategori]}`);
  }