var nama = "Amel";
var peran = "Tabib";

if (peran === "" && nama === "") {
  console.log("Nama harus diisi!");
} else if (peran === "") {
  console.log("Halo, " + nama + "! Pilih peranmu untuk memulai game!");
} else if (nama === "") {
  console.log("Halo, " + peran + "! Siapa namamu?");
} else if (peran === "Ksatria") {
  console.log("Selamat datang di dunia Proxytia, " + nama + "!");
  console.log(
    "Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!"
  );
} else if (peran === "Tabib") {
  console.log("Selamat datang di dunia Proxytia, " + nama + "!");
  console.log(
    "Halo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka!"
  );
} else if (peran === "Penyihir") {
  console.log("Selamat datang di dunia Proxytia, " + nama + "!");
  console.log(
    "Halo " +
      peran +
      " " +
      nama +
      ", ciptakan keajaiban yang akan membantu kemenanganmu!"
  );
}
