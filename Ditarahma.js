function Slicer (text, awal_index, akhir_index) {
    var hasil = "";
    for (var i = awal_index; i < akhir_index; i++) {
        hasil += text[i];
    }
    return hasil;
}
console.log(Slicer("Learning Typescript is different than Javascript", 9, 19));
