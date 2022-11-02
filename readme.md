

Nama : Dita Rahma Amalia Prodi : Sistem Informasi Angkatan : 2020

    Angular adalah platform dan framework yang digunakan untuk membangun aplikasi one-page client menggunakan HTML dan TypeScript. Angular ditulis menggunakan TypeScript, untuk memudahkanmu dalam implementasi fungsi inti dan opsional ke dalam aplikasi yang kamu buat.

    Arsitektur aplikasi Angular bergantung pada konsep dasar tertentu. Blok penyusun dasarnya adalah NgModules, yang menyediakan konteks kompilasi untuk komponen.

    NgModules mengumpulkan kode terkait ke dalam set fungsional. Aplikasi Angular kemudian didefinisikan oleh satu set NgModules. Sebuah aplikasi memiliki setidaknya modul root yang memungkinkan Bootstrap dan biasanya memiliki lebih banyak modul feature.

    Komponen adalah blok bangunan yang menyusun aplikasi. Komponen menyertakan kelas TypeScript dengan dekorator @Component(), template HTML, dan styles. Dekorator @Component() menentukan informasi khusus Angular yaitu sebuah pemilih CSS yang mendefinisikan bagaimana komponen digunakan dalam template. Elemen HTML di template Anda yang cocok dengan pemilih ini menjadi instance dari komponen tersebut. Template HTML yang menginstruksikan Angular cara merender komponen Satu set opsional gaya CSS yang menentukan tampilan elemen HTML template hubungan component dan module adalah, module berisikan component yang saling berhubungan satu sama lain dan component juga membutuhkan module untuk mingidentifikasi components lainnya

    Jawaban kuis :

    halaman pertama dapat dibagi ke banyak komponen dengan menggunakan file html, typescript dan css.
    komponen - komponen tersebut lalu akan digabungkan dalam sebuah modul yang sesuai dengan fungsi atau tempatnya misal da beberapa modul di angular seperti app.module.ts / app.component.ts dll
    hasil dari runing dari projek angular tersebut berupa satu file html yang diinjeksi oleh js yang berdasarkan modul yang terdapat dalam projek seperti modul yang saya sebutkan tersebut.

