import React from "react";

const projects = [
  {
    category: "Android",
    title: "SMAN 14 Bandung App",
    slug: "#sma14",
    imageUrl: "img/projects/sma_14.jpg",
    subtitle: "Aplikasi Android Core Team DSC UNIKOM untuk solving local business problem.",
    period: "September 2018",
    tech: "Java, Retrofit, Firebase",
    team: [
      {
        name: "Yusri Sahrul",
        link: "https://github.com/yusrisahrul10",
      },
      {
        name: "Helsan Firmansyah",
        link: "https://github.com/helsanf",
      },
      {
        name: "Ary Sugiarto",
        link: "https://github.com/arysugiarto",
      },
      {
        name: "Feryanto Abi",
        link: "https://github.com/FeryantoAbiF",
      },
    ],
    description: (
      <>
        <p>
          Sebuah aplikasi Android di mana siswa siswa dari SMAN 14 Bandung dapat
          dengan mudah mengakses informasi tentang sekolahnya, termasuk berita dan acara
          dengan cepat dan mudah secara <i>online</i> dan terintegrasi di dalam satu aplikasi.
        </p>
        <p>
          Menggunakan{" "}
          <a href="https://github.com/square/retrofit">
            Retrofit
          </a> sebagai <i>library</i> Rest Client, dan Firebase untuk fitur notifikasi.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/yusrisahrul10/ProjectAndroidDSC",
      },
      {
        name: "Google Play (terminated)",
        link: "bit.ly/SMA-14-APPS",
      },
    ],
  },
  {
    category: "Android",
    title: "SekolahQu",
    slug: "#sekolahqu",
    imageUrl: "img/projects/sekolahqu.jpg",
    subtitle: "Aplikasi manajemen informasi sekolah berbasis Android",
    period: "Juli 2019",
    tech: "Java, Retrofit, Firebase, Rx",
    team: [
      {
        name: "Yusri Sahrul",
        link: "https://github.com/yusrisahrul10",
      },
      {
        name: "Helsan Firmansyah",
        link: "https://github.com/helsanf",
      },
    ],
    description: (
      <>
        <p>
          <a href="https://www.instagram.com/p/Bs-gwM1n0lO-zfMledL5EHd7FyxOt9mwOr6Fcc0/">SekolahQu</a> merupakan 
          aplikasi manajemen informasi untuk beberapa SMA di Indonesia.
          Masyarakat dapat mengakses informasi berdasarkan list sekolah yang dipilih, langsung di dalam satu
          aplikasi.
        </p>
        <p>
        <b>Tech Stack</b>
        <ul>
          <li>
            Java
          </li>
          <li>
          <a href="https://github.com/square/retrofit">
            Retrofit
          </a>
          </li>
          <li>
          <a href="http://reactivex.io/">
            RxJava
          </a>
          </li>
          <li>
            SQLite
          </li>
          <li>
            MVP Pattern
          </li>
          <li>
            Firebase Messaging
          </li>
        </ul>
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/yusrisahrul10/SekolahQu",
      },
      {
        name: "Google Play (terminated)",
        link: "bit.ly/LinkSekolahQu",
      },
    ],
  },
  {
    category: "Android",
    title: "Alif Ain",
    slug: "#alifain",
    imageUrl: "img/projects/alifain.jpg",
    subtitle: "Aplikasi e-commerce sederhana untuk produk yang dijual di Alif Ain",
    period: "Juli 2019",
    tech: "Kotlin, Retrofit, Ktx",
    team: [
      {
        name: "Yusri Sahrul",
        link: "https://github.com/yusrisahrul10",
      },
      {
        name: "Helsan Firmansyah",
        link: "https://github.com/helsanf",
      },
    ],
    description: (
      <>
        <p>
          Kami mengembangkan sebuah aplikasi e-commerce sederhana berbasis Android untuk toko <a href="https://www.instagram.com/p/Bs-gwM1n
          0lO-zfMledL5EHd7FyxOt9mwOr6Fcc0/">Alif Ain</a>. Fitur-fitur
           yang terdapat di aplikasi ini yaitu login, register, pilih barang ke keranjang, dan checkout. 
           Untuk pembayaran belum menggunakan <i>payment gateway</i> sehingga
           masih dikonfirmasi secara manual.
        </p>
        <p>
        <b>Tech Stack</b>
        <ul>
          <li>
            Kotlin
          </li>
          <li>
          <a href="https://github.com/square/retrofit">
            Retrofit
          </a>
          </li>
          <li>
          <a href="https://rajaongkir.com/">
            Rajaongkir API
          </a>
          </li>
          <li>
            SQLite
          </li>
          <li>
            MVP Pattern
          </li>
        </ul>
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/yusrisahrul10/AlifAin",
      },
      {
        name: "Google Play (terminated)",
        link: "bit.ly/alif-ain",
      },
    ],
  },
  {
    category: "Android",
    title: "Football Apps",
    slug: "#footballapps",
    imageUrl: "img/projects/football.png",
    subtitle: "Aplikasi informasi terkait dengan sepakbola. Menampilkan data dari API The Sport DB",
    period: "Desember 2018",
    tech: "Kotlin, Retrofit, Coroutines, KTX",
    description: (
      <>
        <p>
          Merupakan aplikasi yang menampilkan informasi yang berhubungan dengan sepakbola, mulai dari histori pertandingan,
          pertandingan selanjutnya, dan info tim beserta pemain-pemainnya.
          Aplikasi ini dibuat untuk Final Project dari {" "}
          <a href="https://www.dicoding.com/certificates/NVP718E1VPR0">Kotlin Android Developer Expert</a>. Dicoding.
        </p>
        <b>Tech Stack</b>
        <ul>
          <li>
            Kotlin
          </li>
          <li>
          <a href="https://github.com/square/retrofit">
            Retrofit
          </a>
          </li>
          <li>
            Coroutines
          </li>
          <li>
            Kotlin Android Extension
          </li>
          <li>
            SQLite
          </li>
          <li>
          <a href="https://github.com/Kotlin/anko/wiki/Anko-Layouts">
            Anko Layouts
          </a>
          </li>
          <li>
            MVP Pattern
          </li>
        </ul>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/yusrisahrul10/football-apps",
      },
    ],
  },
  {
    category: "Android",
    title: "Upload Image",
    slug: "#uploadimage",
    imageUrl: "img/projects/uploadimage.png",
    subtitle:
      "Aplikasi sederhana untuk mengunggah gambar yang dipilih ke dalam Firebase",
    period: "Maret 2020",
    tech: "Kotlin, Firebase Storage",
    description: (
      <>
        <p>
          Di sini saya belajar tentang pemanfaatan Firebase Storage untuk menyimpan data gambar
          yang dipilih dari aplikasi.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/yusrisahrul10/upload-image-app",
      },
    ],
  },
  {
    category: "Android",
    title: "Movie Catalogue",
    slug: "#moviecatalogue",
    imageUrl: "img/projects/movie.png",
    subtitle: "Aplikasi informasi terkait dengan sepakbola. Menampilkan data dari API TMDB",
    period: "Februaru 2020",
    tech: "Kotlin, Retrofit, Room, Rx",
    description: (
      <>
        <p>
          Merupakan aplikasi yang menampilkan informasi yang terdiri dari list <i>movie</i>, dan <i>tv show</i>
          Aplikasi ini dibuat untuk Final Project dari {" "}
          <a href="https://www.dicoding.com/certificates/72ZDEO7RLPYW">Belajar Android Jetpack Pro</a>. Dicoding.
        </p>
        <p>
          Di sini, saya banyak belajar tentang <i>Android Development</i> yang sangat relevan dan dibutuhkan di industri.
          Seperti Architecture Component, ViewModel, LiveData, sampai Unit dan Instrumentation Testing.
        </p>
        <b>Tech Stack</b>
        <ul>
          <li>
            Kotlin
          </li>
          <li>
          <a href="https://github.com/square/retrofit">
            Retrofit
          </a>
          </li>
          <li>
          <a href="http://reactivex.io/">
            RxJava
          </a>
          </li>
          <li>
            Dependency Injection
          </li>
          <li>
            KTX (Kotlin Extension)
          </li>
          <li>
            Room
          </li>
          <li>
            LiveData
          </li>
          <li>
            MVVM Pattern
          </li>
        </ul>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/yusrisahrul10/Movie-Catalogue-Jetpack",
      },
    ],
  },
  {
    category: "Android",
    title: "Taking Order App",
    slug: "#takingorder",
    imageUrl: "img/projects/takingorder.png",
    subtitle: "Aplikasi untuk pemesanan/booking untuk restoran",
    period: "Desember 2020",
    tech: "Flutter, BLOC",
    description: (
      <>
        <p>
          Merupakan aplikasi pemesanan berdasarkan nomor meja dibuat untuk klien {" "}
          <a href="https://datadigi.id">Datadigi</a> yang mempunyai beberapa fitur seperti, pilih makanan,
          checkout keranjang, dan konfirmasi pesanan.
        </p>
        <p>
          Di sini, saya pertama kalinya menggunakan Flutter untuk men-develop aplikasi ini, dan juga
          BLOC sebagai <i>design pattern</i> yang digunakan.
        </p>
      </>
    ),
  },
  {
    category: "Android",
    title: "Android Point of Sale (APOS)",
    slug: "#apos",
    imageUrl: "img/projects/apos.jpg",
    subtitle: "Aplikasi Point of Sale (POS) untuk klien dari Datadigi",
    period: "Februari 2021",
    tech: "Kotlin, Retrofit, Room, Bluetooth Printer",
    description: (
      <>
        <p>
          Merupakan aplikasi Point of Sale (POS) berbasis Android, dengan fitur-fitur di dalamnya
          terdiri dari login, pilih meja, pilih menu, simpan ke antrian, dan pembayaran.
        </p>
        <p>
          Tantangan dalam pengembangan aplikasi ini adalah pencetakan struk saat transaksi selesai,
          di mana saya menerapkan penggunaan <i>inner</i> Bluetooth Printer di <i>device</i> POS
          tersebut. Selain itu, saya pun harus membat tampilan yang responsive baik dijalankan di
          <i>device</i> portrait maupun tablet.
        </p>
        <b>Tech Stack</b>
        <ul>
          <li>
            Kotlin
          </li>
          <li>
          <a href="https://github.com/square/retrofit">
            Retrofit
          </a>
          </li>
          <li>
            KTX (Kotlin Extension)
          </li>
          <li>
            Room
          </li>
          <li>
            Bluetooth Printer
          </li>
          <li>
            LiveData
          </li>
          <li>
            MVP, MVVM Pattern
          </li>
        </ul>
      </>
    ),
  },
  {
    category: "Website",
    title: "Personal Website",
    slug: "#mywebsite",
    imageUrl: "img/projects/webprofile.png",
    subtitle: "Personal Web Profile dari Yusri Sahrul",
    period: "Agustus 2021",
    tech: "Docusaurus, Node.js, React.js, Travis-CI",
    description: (
      <>
        <p>
          Website ini dibangun menggunakan  {" "}
          <a href="https://docusaurus.io/">Docusaurus</a>, <i>frontend</i> menggunakan React.js,
          dan Continous Integration menggunakan Travis-CI.
        </p>
        <p>
          <i>Special credit</i> untuk <a href="https://evantay.com/">Evan Tay</a> yang telah menyediakan tema ini.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/yusrisahrul10/my-website",
      },
    ],
  },
];

export default projects;
