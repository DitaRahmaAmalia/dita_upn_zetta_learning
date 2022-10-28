function pembelianBuku (buku, diskon, pajak, stok, order, kredit){
    let totalPembayaran = 0;
    
        const harga = buku.harga;
        const totalDiskon = harga * (diskon/100);
        const hargaBukuSetelahDiskon = harga - totalDiskon;
        const totalPajak = hargaBukuSetelahDiskon * (pajak/100);
        const hargaTotal = hargaBukuSetelahDiskon + totalPajak;
        let totalHargaBuku = 0;
        let totalHargaBukuSetelahDiskon = 0;
        let totalSeluruhPajak = 0;

        for(let index = 0; index < order; index++){
        if(buku && buku.harga && index < stok){
            totalHargaBukuSetelahDiskon += hargaBukuSetelahDiskon;
            totalHargaBuku += buku.harga;
            totalSeluruhPajak += hargaTotal;
        }else{
            console.log("Maaf, Stok Buku Yang Anda Cari Habis");
            break;
        }
        }
    totalPembayaran = totalHargaBukuSetelahDiskon + totalSeluruhPajak;

    if(buku && buku.harga && order <= stok){
        console.group();
        console.log("Judul Buku : ", buku.judul);
        console.log("Harga Buku : ", harga);
        console.log("Jumlah Yang di beli : ", order);
        console.log("Total Harga semuanya : ", totalHargaBuku);
        console.log("Presentase Diskon : ", diskon, "%");
        console.log("Harga Buku Setelah Diskon : ", hargaBukuSetelahDiskon);
        console.log("Presentase Pajak : ", pajak,"%");
        console.log("Biaya Pajak: ", totalSeluruhPajak);
        console.log("Harga Total : ", hargaTotal);
        console.log("Sisa Stock Buku :", stok-order);
        if (stok - order === 0) {
            console.log("Mohon maaf Stok Buku Telah Habis");
        }
        else {
            console.log("Stok Buku Masih Tersedia");
        }
        console.log("Cicilan Buku Anda : ", kredit, "kali");
        console.groupEnd();

    } 
    
    let kreditPerBulan = totalPembayaran / kredit;
    let pembayaranKredit = [];
    let i=0;

    while (i < kredit) {
        pembayaranKredit.push({
            cicilan : i+1,
            pembayaran: kreditPerBulan,
        });
        i++;
    }
    console.log(array.from(pembayaranKredit));  
    return totalPembayaran;
}
pembelianBuku({judul: "Ikhlas Paling Serius", harga:55500, publicity: true}, 50, 10, 10, 2, 12);