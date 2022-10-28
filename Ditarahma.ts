function Slicer(text: string, awal_index: number, akhir_index: number): string {
    var hasil = "";
    for (var i = awal_index; i < akhir_index; i++) {
        hasil += text[i];
    }
    return hasil;
}
console.log(Slicer("Learning Typescript is different than Javascript", 9, 19));