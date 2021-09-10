const hewan = {
  nama: "Kambing Etawa",
  warna: "Putih",
  makan() {
    console.log("Alhamdulillah, kenyang.");
  },
};

hewan.jenisKelamin = "Jantan";
console.log(hewan);

hewan.makan = () => {
  console.log("Alhamdulillah");
};
hewan.makan();

delete hewan.warna;
delete hewan["makan"];

console.log(hewan);
