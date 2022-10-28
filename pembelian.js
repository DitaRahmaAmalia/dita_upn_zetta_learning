function pembelianBuku (buku, diskon, pajak){
    let result = 0;
    if(buku && buku.harga){
        const harga = buku.harga;
        const totalDiskon = harga * (diskon/100);
        const hargaBukuSetelahDiskon = harga - totalDiskon;
        const totalPajak = hargaBukuSetelahDiskon * (pajak/100);
        const hargaTotal = hargaBukuSetelahDiskon + totalPajak;
        

        console.group();
        console.log("Judul Buku : ", buku.judul);
        console.log("Harga Buku : ", harga);
        console.log("Presentase Diskon : ", diskon,"%");
        console.log("Harga Buku Setelah Diskon : ", hargaBukuSetelahDiskon);
        console.log("Presentase Pajak : ", pajak,"%");
        console.log("Harga Total : ", hargaTotal);
        console.groupEnd();
    }   
    return 0;
}

pembelianBuku({judul: "Ikhlas Paling Serius", harga:55500, publicity: true}, 50, 10);