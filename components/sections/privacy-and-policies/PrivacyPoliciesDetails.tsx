import React from "react";


const PrivacyPoliciesDetails: React.FC  = () => {
  
  function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('scrolled to bottom');
      // if(window.FLUTTER_CHANNEL){
      //   window.FLUTTER_CHANNEL.postMessage('end of scroll');
      // }
    }
  }

  // https://stackoverflow.com/a/53465182
  // https://stackoverflow.com/a/29726000
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  }, [])
  
    return(
      <div>
        <p>
        Menjaga dan melindungan data pribadi Pengguna adalah prioritas kami. Sehingga Kebijakan Privasi ini 
        adalah bentuk nyata dari CFUND untuk menjaga, merawat serta memberikan penghormatan kepada 
        Pengguna website dan aplikasi CFUND. Kebijakan Privasi ini merupakan dokumen yang menjadi satu 
        kesatuan dengan dokumen Syarat dan Ketentuan serta Dokumen Pemberitahuan Resiko. Secara umum 
        Kebijakan Privasi ini mengatur hal-hal terkait dengan perolehan, pengumpulan, pengolahan, penganalisisan, 
        pengiriman, pembukaan, penampilan, penyimpanan, perubahan, penghapusan dan segala bentuk pengelolaan 
        data lainnya atas data dan/atau informasi yang disediakan oleh Pengguna baik yang diberikan secara 
        sukarela melalui pendaftaran maupun pada saat pengguna menggunakan website atau aplikasi CFUND. 
       </p>
       <ol>
        <li>Pernyataan dan Jaminan
          <p>
            Dengan memilih “Setuju” / “Sepakat” / “Saya Telah Membaca (Kebijakan Privasi, Dokumen Pemberitahuan Resiko 
            serta Syarat dan Ketentuan) pengguna menyatakan dan menjamin bahwasanya seluruh informasi/data/keterangan 
            yang diberikan kepada CFUND adalah data yang benar dan akurat serta sah dihadapan hukum. Pengguna juga 
            menyatakan bahwa Pengguna telah membaca, mengerti, memahami dan menyepakati segala syarat dan ketentuan, 
            dokumen pemberitahuan resiko dan Kebijakan Privasi yang berlaku didalam CFUND. Pengguna menyatakan sepakat 
            dan memberikan kuasa kepada CFUND untuk memperoleh, mengumpulkan, mengolah, menganalisis, menampilkan, 
            mengirimkan, membuka, menyimpan, mengubah, menyerahkan dan/atau mempergunakan data tersebut untuk tujuan-tujuan 
            yang telah diberitahukan di dalam Kebijakan Privasi, Syarat dan Ketentuan, dan Dokumen Pemberitahuan Resiko.
          </p>
        </li>
        <li>Pengumpulan dan Perolehan Data Pribadi
          <ol>
            <li>
            Tujuan Kami Mengumpulkan Data Pengguna
            <p>
            Kami mengumpulkan data pribadi beserta data lainnya untuk melakukan pengelolaan dana, memproses perintah 
            transaksi termasuk withdrawal, top up dan/atau deposit (selanjutnya disebut sebagai <b>“Perintah Tranksaksi”</b>), 
            melakukan pengembangan usaha, memberikan pelayanan atas jasa kami, melakukan kegiatan pemasaran serta hal-hal 
            lainnya yang dapat dilakukan berdasarkan Peraturan Perundang-Undangan yang berlaku.
            </p>
            </li>
            <li>
            Cara Kami Melakukan Pengumpulan Data
            <p>
            Kami melakukan pengumpulan data melalui data yang kami dapatkan pada saat anda melakukan registrasi, 
            aktivitas anda dalam aplikasi dan data-data lainnya yang kami himpun melalui Pihak Ketiga
            </p>
            </li>
            <li>
            Data Yang Kami Kumpulkan
            <p>
            Kami mengumpulkan data-data anda melalui data yang Pengguna berikan kepada Kami dan data-data tambahan 
            yang kami himpun melalui permintaan kami (melalui aplikasi/website/penyertaan dokumen), aktivitas Pengguna, 
            informasi yang kami himpun melalui pihak ketiga serta data/informasi yang telah diketahui secara umum. 
            Adapun data yang Kami kumpulkan adalah sebagai berikut:
            </p>
              <ol>
                <li>
                Data yang disediakan oleh Pengguna
                <p>
                Kami mengumpulkan data pada saat Anda melakukan registrasi / sign up dalam aplikasi CFUND 
                (selanjutnya disebut <b>“Data Pribadi”</b>) berupa:
                <table>
                  <tr>
                    <td>-</td>
                    <td>Nama Lengkap</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Nomor Induk Kependudukan</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Alamat Email</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Tempat / Tanggal Lahir</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Jenis Kelamin</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Status Pernikah</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Nama Suami/Istri (Jika ada)</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Nama Ibu Kandung</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Alamat</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Sumber Penghasilan</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Pekerjaan</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Nama Perusahaan</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Bidang Usaha</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Alamat Perusahaan</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>No. Telp Perusahaan</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Penghasilan per Tahun</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Nama Ahli Waris</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Kontak Darurat</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Hubungan Kerabat</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Alamat</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>No. Telp</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>Alamat Email</td>
                  </tr>
                </table>
                </p>
                </li>
                <li>
                Data yang kami dapatkan pada saat pengguna menggunakan website atau aplikasi CFUND:
                <p>
                <table>
                  <tr>
                    <td>- Data lokasi (seperti IP Address, Geo-Location dan lokasi Wi-Fi);</td>
                  </tr>
                  <tr>
                    <td>- Data mengenai perangkat yang digunakan termasuk sistem operasi, 
                      model perangkat keras, nomor IMEI dan informasi jaringan seluler;</td>
                  </tr>
                  <tr>
                    <td>- Data aktivitas Pengguna termasuk yang didapatkan pada waktu pendaftaran, 
                      login dan transaksi;</td>
                  </tr>
                  <tr>
                    <td>- Data mengenai nomor rekening Pengguna yang di dapatkan pada saat 
                      Pengguna melakukan Perintah Transaksi;</td>
                  </tr>
                </table>
                </p>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
        Penggunaan Data Pribadi Pengguna
        <p>
        Anda memberikan CFUND hak untuk menggunakan Data Pribadi yang diperoleh dan 
        dikumpulkan untuk melakukan hal-hal sebagai berikut:
        </p>
        <ol>
          <li>
          Memproses seluruh Perintah Transaksi yang diinginkan oleh 
          Pengguna sesuai dengan syarat dan ketentuan yang berlaku pada website atau aplikasi CFUND.
          </li>
          <li>
          Memberikan layanan pelanggan CFUND terkait dengan:
          <p>
            <table>
              <tr>
                <td>i. Menerima, memproses, memeriksa dan menyelesaikan masalah yang dialami Pengguna;</td>
              </tr>
              <tr>
                <td>ii. Menghubungi pihak terkait melalui telepon, surat, email atau metode lainnya untuk 
                  memberikan pemberitahuan dan menyelesaikan permasalahan yang dialami oleh Pengguna;</td>
              </tr>
              <tr>
                <td>iii. Menggunakan Data yang didapatkan untuk peningkatan layanan CFUND; dan</td>
              </tr>
              <tr>
                <td>iv. Memberikan informasi mengenai promo, produk, kegiatan, survei serta pembaharuan sistem CFUND;</td>
              </tr>
            </table>
          </p>
          </li>
          <li>
          Melakukan kegiatan promosi atas produk, kegiatan dan pengenalan produk baru. 
          Kami tidak akan membagikan Data Pribadi Pengguna untuk keperluan promosi pihak lainnya.
          </li>
          <li>
          Menyediakan informasi terkait kepada Pengguna berita-berita yang kami anggap menarik dan berguna bagi Pengguna.
          </li>
          <li>
          Melakukan pengawasan dan investigasi atas seluruh aktivitas maupun transaksi yang kami anggap mencurigakan 
          atau terdapat pelanggaran atas syarat dan ketentuan yang berlaku termasuk melakukan upaya-upaya lanjutan 
          atas pengawasan atau investigasi yang CFUND lakukan.
          </li>
          <li>
          CFUND dapat menggunakan Data pribadi anda terkait dengan pelaksanaan kepatuhan yang disyaratkan oleh 
          Undang-Undang, Aksi Korporasi (merger/akuisisi/konsolidasi/likuidasi), pelaksanaan audit (teknologi, 
          keuangan, keamanan dan keandalan sistem) oleh internal maupun eksternal. kegiatan pengembangan usaha 
          CFUND yang dilakukan oleh Pihak Ketiga seperti vendor/perusahaan/firma/Lembaga riset untuk kepentingan 
          peningkatan kualitas layanan atau produk CFUND.
          </li>
          <li>
          Data Anda dapat Kami gunakan terkait dengan adanya transaksi yang melibatkan CFUND.
          </li>
          <li>
          Menggunakan Data Pengguna apabila berdasarkan perintah atau putusan pengadilan/keperluan penyidikan 
          dan/atau penyelidikan/sengketa hukum/perintah institusi negara terkait (sepanjang diperbolehkan 
          oleh Undang-Undang dan memenuhi aspek formal).
          </li>
          <li>
          Menggunakan Data Pengguna untuk tujuan perpajakan serta kewajiban 
          dan/atau kepatuhan lainnya yang disyaratkan oleh Undang-Undang.
          </li>
        </ol>
        </li>
        <li>
        Pengungkapan Data Pribadi
        <p>
          Seluruh data Anda yang kami peroleh tidak dapat kami ungkapkan, jual atau alihkan kepada pihak lainnya
           tanpa adanya persetujuan dari Pengguna. Segala bentuk pengungkapan Data Pribadi hanya dilakukan untuk 
           tujuan yang disyaratkan oleh Peraturan Perundang-Undangan yang berlaku atau keperluan kegiatan usaha 
           CFUND sebagaimana diatur dalam Pasal 3 (tiga) Kebijakan Privasi ini atau Syarat dan Ketentuan CFUND 
           dalam bentuk kesimpulan/generik/demografi tanpa mengungkapkan seluruh Data Pribadi milik Pengguna.
        </p>
        </li>
        <li>
        Hak-Hak Pemilik Data
        <ol>
          <li>
          Hak Untuk Mengakses Data Pribadi
          <p>
          Anda berhak untuk meminta kepada Kami seluruh Salinan data Anda yang Kami miliki. 
          Seluruh biaya yang timbul atas permintaan Salinan tersebut ditanggung oleh Pengguna.
          </p>
          </li>
          <li>
          Hak Untuk Melakukan Perubahan
          <p>
          Anda berhak untuk meminta kepada Kami untuk memperbaiki data yang Pengguna anggap tidak akurat. 
          Anda juga memiliki hak untuk meminta kepada kami untuk melengkapi data yang Pengguna anggap tidak lengkap.
          </p>
          </li>
          <li>
          Hak Untuk Meminta Penghapusan
          <p>
          Dalam kondisi tertentu, Apabila anda tidak lagi melanjutkan layanan (tidak lagi memiliki dana 
          yang CFUND Kelola), anda dapat meminta untuk melakukan penghapusan Data Pribadi yang Anda miliki.
          </p>
          </li>
        </ol>
        </li>
        <li>
        Perubahan Kebijakan Privasi
        <p>
        Untuk senantiasa menghormati, melindungi dan melakukan upaya terbaik bagi Pengguna, 
        CFUND dapat melakukan perubahan Kebijakan Privasi ini dari waktu ke waktu. Dengan terus 
        menggunakan situs dan Aplikasi CFUND maka hal tersebut merupakan bentuk persetujuan atas 
        segala bentuk perubahan tersebut.
        </p>
        </li>
        <li>
        Bagaimana Cara Pengguna Menghubungi Kami
        <p>
        Kami melayani anda dengan sepenuh hati, apabila Pengguna memiliki pertanyaan yang berkaitan 
        dengan kegiatan usaha, operasionalisasi situs dan aplikasi, transaksi, atau hal-hal lain yang 
        ingin Anda ketahui, silahkan hubungi CFUND melalui:
        <table>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>cs@cfund.id</td>
              </tr>
              <tr>
                <td>No. Telp</td>
                <td>:</td>
                <td>+62 811 874 583</td>
              </tr>
              <tr>
                <td>Office</td>
                <td>:</td>
                <td>Jl. Bangka Raya No. 42A, Mampang Prapatan, Pela Mampang, Jakarta Selatan, 12720</td>
              </tr>
        </table>
        </p>
        </li>
       </ol>
      </div>
    
    )
};

export default PrivacyPoliciesDetails;