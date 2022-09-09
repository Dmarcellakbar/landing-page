import React from "react";

const TncDetails: React.FC = () => {
  
  function handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('scrolled to bottom');
      if(window.FLUTTER_CHANNEL){
        window.FLUTTER_CHANNEL.postMessage('end of scroll');
      }
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
      Halo, selamat datang di CFUND, CFUND adalah aplikasi manajemen aset kripto yang diluncurkan dan dinaungi oleh PT Cuma Untuk Anak Negeri (<b>“CFUND”</b>). 
      </p>
      <p>
      Halaman ini adalah halaman yang berisi tentang ketentuan dan prasyarat umum atas penggunaan Situs Website, Aplikasi dan layanan kami (<b>“Syarat dan Ketentuan”</b>). 
      Syarat dan Ketentuan Umum ini mengatur hal-hal terkait dengan penggunaan Situs Website dan Aplikasi CFUND. Syarat dan Ketentuan ini merupakan dokumen hukum 
      berupa perjanjian dan karenanya Pengguna diwajibkan untuk membaca secara seksama dan memahami sepenuhnya yang juga berdampak pada hak dan kewajiban Pengguna. 
      Dengan mendaftarkan diri dalam Situs Website atau Aplikasi CFUND, Pengguna dianggap telah membaca dan memahami serta menyetujui seluruh klausul yang ada dalam 
      Syarat dan Ketentuan ini. Apabila Pengguna tidak menyepakati baik Sebagian maupun seluruh ketentuan dalam Syarat dan Ketentuan ini, maka Pengguna tidak dapat 
      menggunakan layanan yang disediakan dalam Situs atau Aplikasi CFUND.
      </p>
      <ol>
        <li><b>Definisi</b>
          <ol>
            <li>
            Decentralized Finance (De-Fi) adalah ekosistem keuangan terdesentralisasi dengan menggunakan teknologi blockchain.
            </li>
            <li>
            Yield Farming adalah instrumen yang digunakan untuk mendapatkan keuntungan melalui aset kripto tertentu yang disimpan dan dikunci sebagai likuiditas pasar terdesentralisasi, dengan imbalan berupa token aset kripto tertentu.
            </li>
            <li>
            taking adalah instrumen untuk menyimpan dan mengunci aset kripto dengan batas waktu tertentu untuk mendapatkan keuntungan.            
            </li>
            <li>
            Masa Penguncian Dana (Lock Period) adalah batasan waktu bagi Pengguna untuk menginvestasikan dananya dalam produk CFUND selama 3 (tiga) bulan terhitung sejak terakhir kali nasabah melakukan penyetoran dana dan berlaku kembali setelah periode Capital Unlocked berakhir.            </li>
            <li>
            Capital Unlocked adalah masa penarikan seluruh dana nasabah setelah melewati Masa Penguncian Dana.
            </li>
            <li>
            Maximal Drawdown adalah Standar Operasional Prosedur dalam pengelolaan dana yang diterapkan oleh CFUND dalam hal terjadi kerugian dalam pengelolaan dana, kerugian yang dialami tidak lebih dari 20% (dua puluh persen) pada suatu bulan pengelolaan.
            </li>
            <li>
            Performance Fee adalah biaya yang dibebankan atas jasa pengelolaan dana yang telah diberikan oleh CFUND sebesar 20% (dua puluh persen) dari keuntungan bulanan yang secara otomatis dipotong dari keuntungan bulanan yang didapatkan oleh Pengguna.            </li>
            <li>
            Management Fee adalah biaya sebesar 2% (dua persen) dari setiap dana yang disetorkan oleh Nasabah.            
            </li>
            <li>
            Wallet Address adalah alamat dompet aset kripto yang dimiliki oleh Pengguna maupun Pengelola.            
            </li>
          </ol>
        </li>

        <li><b>Pendaftaran Akun</b>
          <ol>
            <li>
            Untuk dapat menggunakan layanan CFUND, Pengguna diwajibkan untuk melakukan pendaftaran akun CFUND melalui Situs Website atau Aplikasi CFUND.            </li>
            <li>
            Pendaftaran akun CFUND sebagaimana dimaksud dalam poin (1) diatas wajib memenuhi Persyaratan Umum maupun Persyaratan Khusus lainnya yang diatur oleh CFUND.
            </li>
            <li>
            Persyaratan Umum Pendaftaran Akun:
              <ol>
                <li>
                Berusia minimal 18 (delapan belas) tahun;
                </li>
                <li>
                Memiliki Kartu Tanda Penduduk (bagi warga negara Indonesia) atau Passport yang diterbitkan oleh instansi yang berwenang negara asal Pengguna;
                </li>
                <li>
                Memberikan informasi pribadi termasuk namun tidak terbatas pada:
                  <table>
                    <tr>
                      <td>-</td>
                      <td>Nama Lengkap</td>
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
                      <td>Status Pernikahan</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>Nama Suami/Istri (jika ada)</td>
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
                </li>
                <li>
                Membaca, memahami dan menyetujui dokumen pemberitahuan resiko;                
                </li>
                <li>
                Membaca, memahami dan menyetujui Syarat dan Ketentuan yang ditetapkan oleh CFUND;                </li>
                <li>
                Membaca, memahami dan menyetujui Kebijakan Privasi CFUND.                </li>
              </ol>
            </li>
            
          </ol>
        </li>

        <li>
          <b>Persyaratan Khusus Pendaftaran Akun:</b>
          <ol>
            <li>
            Memiliki pekerjaan tetap;
            </li>
            <li>
            Memiliki penghasilan tetap dengan nilai minimal penghasilan bulanan sesuai 
            dengan kriteria produk CFUND yang akan dipilih oleh Pengguna;
            </li>
            <li>
            Bagi pengguna CFUND Galaxy berlaku persyaratan minimum pendapatan tahunan 
            yang disertai dengan dokumen pendukung yang menunjukkan keabsahan nilai minimum pendapatan tahunan.
            </li>
          </ol>
        </li>

        <li>
          <b>Kepimilikan Akun</b>
          <ol>
            <li>
            Pendaftaran akun dilakukan berdasarkan data-data yang diberikan oleh Pengguna. Keakuratan data 
            menjadi hal penting dalam pelayanan CFUND. Kami menyarankan kepada Pengguna untuk memberikan 
            seluruh informasi yang dibutuhkan secara jelas dan benar untuk menghindari adanya kekurangan 
            atau kesalahan saat menyediakan layanan kami kepada Pelanggan.
            </li>
            <li>
            Akun hanya diperuntukkan bagi pengguna yang melakukan pendaftaran 
            dengan menggunakan data dirinya sendiri. Pengguna tidak diperbolehkan untuk 
            menggunakan akun milik orang lain tanpa adanya persetujuan dari Pengelola.
            </li>
          </ol>
        </li>

        <li>
          <b>Penunjukan dan Pemberian Kuasa</b>
          <ol>
            <li>
            Pengguna dengan ini menyepakati untuk menunjuk Pengelola untuk 
            melakukan pengelolaan atas dana yang disetorkan sesuai dengan nilai yang 
            tertera dalam form pengelolaan dana yang telah disediakan oleh Pengelola.
            </li>
            <li>
            Pengguna memberikan hak penuh kepada Pengelola untuk melakukan penempatan 
            seluruh dan/atau sebagian dana yang disetorkan kepada Pengelola melalui 
            perintah transaksi online termasuk namun tidak terbatas pada memproses 
            pembelian (subscription), penjualan (redemption), pengalihan (switching) 
            serta hal-hal lainnya yang dianggap perlu oleh Pengelola. Mekanisme pengelolaan 
            yang dilakukan merupakan diskresi penuh Pengelola untuk melakukan pengelolaan dana 
            dengan memperhatikan kondisi keuangan dan perhitungan atas risiko-risiko yang dapat 
            timbul dan telah diketahui oleh Pengguna. 
            </li>
            <li>
            Dalam melakukan pengelolaan dana, Pengguna juga memberikan hak penuh kepada 
            Pengelola untuk melakukan Tindakan-tindakan termasuk namun tidak terbatas pada:
            <ol>
              <li>
              Memilih dan menentukan bursa aset kripto (crypto exchange), memerintahkan bursa 
              aset kripto untuk melakukan pencairan aset, melakukan penempatan dana pada satu atau lebih 
              aset kripto, melakukan penarikan keuntungan (margin), melakukan perdagangan aset kripto atas seluruh dan/atau sebagian dana Pengguna;
              </li>
              <li>
              Melakukan penempatan dana dan/atau aset kripto kepada Pihak Ketiga atau afiliasi Pengelola, 
              memerintahkan Pihak Ketiga untuk melakukan perdagangan aset kripto, serta memilih dan menentukan strategi perdagangan;
              </li>
              <li>
              Melakukan penempatan dana pada platform perdagangan aset kripto, platform kripto yang terdesentralisasi 
              (Decentralized Finance) termasuk namun tidak terbatas pada platform crypto peer-to-peer lending, 
              Yield Farming, Staking serta media lainnya yang dianggap perlu oleh Pengelola
              </li>
              <li>
              Melakukan upaya-upaya yang dianggap perlu berdasarkan penilaian Pengelola untuk melindungi 
              kepentingan Pengguna untuk menjalankan kewajiban Pengelola yang diatur dalam Perjanjian ini. 
              Apabila terdapat suatu kondisi genting dimana berdasarkan penilaian Pengelola membutuhkan 
              keputusan yang cepat maka hal tersebut dapat dilakukan tanpa adanya persetujuan dari Pengguna.
              </li>
            </ol>
            </li>
            <li>
            Pengelola dapat melakukan pengalihan dana pada rekening terpisah dari satu rekening ke rekening 
            lainnya seperti pembayaran komisi, pembayaran biaya transaksi, kliring dan pembayaran atas 
            keterlambatan dalam memenuhi kewajibannya
            </li>
            <li>
            Pengguna memberikan kuasa kepada Pengelola untuk menghubungi bank, lembaga keuangan, 
            penyelenggara pasar fisik aset kripto, atau institusi lain yang terkait untuk memperoleh 
            keterangan atau verifikasi mengenai informasi yang diterima dari Pengguna. 
            Pengguna mengerti bahwa penelitian mengenai data hutang pribadi dan bisnis dapat dilakukan oleh 
            Pengelola apabila diperlukan. Pengguna diberikan kesempatan untuk memberitahukan secara tertulis 
            dalam jangka waktu yang telah disepakati untuk melengkapi persyaratan yang diperlukan.
            </li>
            <li>
            Pengguna dengan ini memberikan kuasa kepada CFUND untuk menggunakan data yang telah diberikan 
            oleh Pengguna kepada CFUND untuk keperluan termasuk namun tidak terbatas pada pelaporan kepada 
            instansi terkait sepanjang disyaratkan oleh Peraturan Perundang-Undangan yang berlaku, pelaksanaan 
            audit internal maupun eksternal, pengembangan kegiatan usaha CFUND, keperluan aksi korporasi 
            (merger, akuisisi, konsolidasi, likuidasi), perintah pengadilan atau instansi terkait.
            </li>
          </ol>
        </li>

        <li><b>Pernyataan dan Jaminan</b>
          <ol>
            <li><b>Pengelola dengan ini menyatakan dan menjamin bahwa:</b>
              <ol>
                <li>
                Pengelola menyatakan bahwa Pengelola memberikan jasa pengelolaan dana kepada lebih dari 1 (satu) Pengguna. 
                Pengelola menetapkan strategi pengelolaan berdasarkan kondisi, tujuan penempatan dana serta hal-hal lain 
                yang berkaitan dengan pelaksanaan kewajiban pengelola. Kebijakan yang ditetapkan oleh Pengelola merupakan 
                kebijakan yang bertujuan untuk melindungi kepentingan seluruh Pengguna. Seluruh Pengguna akan diperlakukan 
                secara adil sesuai dengan ketentuan-ketentuan yang diatur di dalam Perjanjian ini, Peraturan Perundang-Undangan, 
                serta kebijakan yang berlaku dalam PT Cuma Untuk Anak Negeri;
                </li>
                <li>
                Pengelola menyatakan bahwa dalam melaksanakan kewajiban-kewajiban untuk melakukan pengelolaan dana Pengelola 
                akan bertindak berdasarkan prinsip pengelolaan dana yang baik serta dilandasi analisa dan perhitungan yang baik 
                untuk melindungi kepentingan Pengguna;
                </li>
                <li>
                Pengelola menyatakan bahwa pada saat ini pengelolaan hanya diberlakukan terbatas pada Pihak-Pihak tertentu 
                (close loop) dan bukan ditujukan untuk masyarakat umum. Pengelola saat ini tengah melakukan pemrosesan perizinan 
                pada instansi terkait yang berwenang untuk mengeluarkan izin tersebut;
                </li>
              </ol>
            </li>
            
            <li>
            <b>Pengguna dengan ini menyatakan dan menjamin bahwa:</b>
              <ol>
                <li>
                Pengguna menyatakan bahwa dana yang disetorkan kepada Pengelola bukanlah merupakan hasil dari tindakan-tindakan 
                yang dikualifikasikan sebagai tindak pidana atau hal-hal lainnya yang bertentangan dengan Peraturan Perundang-Undangan 
                yang berlaku di Negara Republik Indonesia. Sehingga dengan ini Pengguna melepaskan Pengelola dari segala tuntutan hukum 
                baik pidana maupun perdata yang timbul dari hubungan hukum antara Pengguna dengan Pihak Ketiga dan/atau Pihak lain yang terkait;
                </li>
                <li>
                Pengelola bergantung penuh pada informasi yang telah diberikan oleh Pengguna oleh karena itu Pengguna menyatakan bahwa 
                seluruh informasi yang diberikannya kepada Pengelola adalah informasi yang benar dan dapat dipertanggungjawabkan kebenarannya;
                </li>
                <li>
                Dalam hal Pengguna merupakan badan hukum Perseroan, Pengguna menjamin bahwa dalam melakukan pengambilan keputusan untuk melakukan 
                penempatan dana telah memenuhi seluruh ketentuan yang berlaku pada Anggaran Dasar dan Peraturan Perundang-Undangan yang berlaku. Pengguna
                dengan ini menjamin untuk melepaskan Pengelola dari segala tuntutan, gugatan atau upaya hukum lainnya apabila terdapat pelanggaran-pelanggaran 
                yang terjadi terkait dengan pengambilan keputusan untuk melakukan penempatan dana pada Pengelola;
                </li>
                <li>
                Pengguna menjamin bahwa dirinya tidak sedang berada dalam kondisi pailit atau sedang menghadapi suatu perkara hukum yang dapat mempengaruhi 
                pelaksanaan kewajiban Pengguna sesuai dengan yang diatur dalam Perjanjian ini;
                </li>
                <li>
                Pengguna mengetahui bahwa Pengelola berhak untuk mengetahui hal-hal terkait dengan informasi identitas, sumber dana, informasi terkait pemilik 
                manfaat (beneficial owner) serta Pihak-Pihak yang berkaitan dengan pengikatan dalam Perjanjian ini;
                </li>
                <li>
                Pengguna juga melepaskan Pengelola dari gugatan pidana maupun Perdata terkait dengan syarat-syarat administrative (seperti perizinan dan aspek 
                lainnya) yang diatur dalam Peraturan Perundang-Undangan. Pengguna memahami dan mengetahui bahwa CFUND saat ini tengah dalam proses pemenuhan persyaratan administratif tersebut;
                </li>
                <li>
                Pengguna memahami bahwa terdapat risiko-risiko yang ada dalam setiap instrumen investasi. Risiko-risiko tersebut juga termasuk risiko yang timbul berkaitan dengan kondisi politik, 
                ekonomi, sosial, keamanan dan bisnis. Pengguna dengan ini memahami seluruh penjelasan serta simulasi keuntungan yang telah disampaikan oleh Pengelola dalam surat pemberitahuan risiko 
                dan melepaskan Pengelola dari segala tuntuntuan akibat adanya kerugian bagi Pengguna yang terjadi setelah Pengelola melakukan Pengelolaan berdasarkan itikad baik dan perhitungan yang patut.
                </li>
              </ol>
            </li>
          </ol>
        </li>

        <li>
        <b>Kerahasiaan</b>
        <p>
        Seluruh informasi yang diberikan oleh Pengguna kepada Pengelola terkait informasi data diri, 
        nilai investasi dan keuntungan adalah informasi yang sifatnya rahasia dan informasi tersebut 
        tidak dapat diungkapkan, dipublikasikan, dialihkan kepada Pihak Ketiga tanpa adanya persetujuan 
        tertulis dari Pengguna melalui persetujuan atas Kebijakan Privasi atau berdasarkan perintah Pengadilan. 
        Pengguna juga wajib untuk menjaga seluruh informasi terkait dengan strategi investasi dan perdagangan 
        Pengelola kecuali mendapatkan persetujuan tertulis Pengelola atau berdasarkan perintah Pengadilan.
        </p>
        </li>

        <li>
          <b>Penyetoran Dana Awal</b>
          <ol>
            <li>
            Pengguna menempatkan sejumlah dana ke rekening terpisah (Segregated Account) Pengelola Dana sebagai dana 
            awal yang akan dikelola oleh Pengelola (selanjutnya disebut sebagai <b>“Modal”</b>) nilai minimum Modal yang dapat 
            Pengguna setorkan kepada Pengelola Dana adalah sebagai berikut:
            <ol>
              <li><b>CFUND MOON</b>
                <table>
                  <tr>
                    <td>Minimum Modal</td>
                    <td>-</td>
                    <td>Rp.5.000.000,-</td>
                    <td>(lima juta Rupiah)</td>
                  </tr>
                  <tr>
                    <td>Minimum Top-Up</td>
                    <td>-</td>
                    <td>Rp.1.000.000,-</td>
                    <td>(satu juta Rupiah)</td>
                  </tr>
                </table>
              </li>
              <li><b>CFUND STARS</b>
                <table>
                  <tr>
                    <td>Minimum Modal</td>
                    <td>-</td>
                    <td>Rp.50.000.000,-</td>
                    <td>(lima puluh juta Rupiah)</td>
                  </tr>
                  <tr>
                    <td>Minimum Top-Up</td>
                    <td>-</td>
                    <td>Rp.10.000.000,-</td>
                    <td>(sepuluh juta Rupiah)</td>
                  </tr>
                </table>
              </li>
              <li><b>CFUND GALAXY</b>
                <table>
                  <tr>
                    <td>Minimum Modal</td>
                    <td>-</td>
                    <td>Rp.500.000.000,-</td>
                    <td>(lima ratus juta Rupiah)</td>
                  </tr>
                  <tr>
                    <td>Minimum Top-Up</td>
                    <td>-</td>
                    <td>Rp.100.000.000,-</td>
                    <td>(seratus juta Rupiah)</td>
                  </tr>
                </table>
              </li>
            </ol>
            </li>
            <li>
            Pengguna memahami terdapat kemungkinan dalam suatu kondisi di mana terjadi perubahan nilai yang disebabkan oleh 
            fluktuasi harga Dollar Amerika Serikat pada saat Pengelola mengkonversi dana yang disetor oleh Pengguna. 
            Pengguna memahami bahwa terdapat kemungkinan perubahan harga tersebut dan karenanya mengetahui dan menyepakati 
            nilai dana dalam Rupiah yang ditampilkan pada laporan atau keterangan dalam aplikasi dapat berubah sesuai dengan 
            fluktuasi harga Dollar.
            </li>
            <li>
            Penyetoran dana awal sebagaimana dimaksud dalam Pasal 8.1 di atas dapat dilakukan setiap saat. Namun, apabila 
            Pengguna melakukan transfer pada rentang hari Senin-Jumat, maka pengelolaan akan dilakukan pada hari Senin di minggu berikutnya
            </li>
            <li>
            Pengguna akan dibebankan atas biaya-biaya yang diperlukan untuk transaksi, yaitu biaya transaksi, pajak, komisi, biaya pelayanan, 
            dan biaya lainnya yang dapat dipertanggungjawabkan oleh Pengelola
            </li>
            <li>
            Penyetoran Dana Awal (Deposit) atau Penambahan Dana (Top-Up) dilakukan dengan mekanisme transfer melalui virtual account atau transfer 
            bank. Apabila terdapat kendala yang dialami oleh Pengguna pada saat melakukan penyetoran dana maka Pengguna wajib menginformasikan kepada 
            CFUND terkait kendala yang dihadapi dan CFUND akan menindaklanjuti kendala tersebut kepada Pihak terkait. 
            </li>
          </ol>
        </li>
        
        <li><b>Ketentuan Pengelolaan Dana</b>
          <ol>
            <li>
              Masa Penguncian Dana
              <ol>
                <li>
                Seluruh dana yang telah disetorkan oleh Pengguna hanya dapat ditarik kembali setelah 3 (tiga) bulan 
                terhitung setelah dana terakhir yang disetorkan kepada Pengelola tersebut diterima oleh Pihak Pertama 
                (selanjutnya disebut sebagai <b>“Masa Penguncian Dana”</b>). Pengguna tetap dapat melakukan penarikan atas 
                keuntungan bulanan. Penguncian dana dilakukan terhadap seluruh dana Pengguna.
                </li>
                <li>
                Setelah melewati masa Penguncian Dana, status dana yang tertera pada aplikasi CFUND akan menunjukkan <b>“Capital Unlocked”</b>. 
                Dalam periode inilah Pengguna dapat melakukan penarikan seluruh dana milik Pengguna. Apabila Pengguna tidak melakukan penarikan 
                pada saat masa Capital Unlocked, maka akan diberlakukan kembali Penguncian Dana sebagaimana dimaksud dalam Pasal 7.1 (a) diatas untuk 3 (tiga) bulan berikutnya.
                </li>
              </ol>
            </li>
            <li>
            Dalam melakukan pengelolaan dana, Pengelola menetapkan Maximal Drawdown senilai 20% (dua puluh persen). Yang dimaksud dengan Maximal Drawdown adalah pada setiap 
            penempatan dana milik Pengguna pada aset kripto, Pengelola akan melakukan cut loss apabila terjadi penurunan hingga 20% (dua puluh persen) dari total dana Pengguna. 
            Apabila hal ini terjadi dalam suatu bulan pengelolaan maka Pengguna tidak akan dibebankan biaya Performance Fee bulanan sebagaimana diatur dalam Perjanjian ini.
            </li>
            <li>
            Apabila hal sebagaimana dimaksud dalam Pasal 5.2 terjadi maka Kami akan menghubungi Pengguna terkait apakah Pengguna ingin tetap melanjutkan investasinya atau tidak 
            </li>
            <li>
            Jika dalam pelaksanaan pengelolaan dana tercapai maximal drawdown, maka Pengguna dapat memilih hal-hal berikut ini:
              <ol>
                <li>
                Menghentikan pengelolaan dana dengan kerugian 20% (dua puluh persen) dari total dana yang dimiliki oleh Pengguna; atau
                </li>
                <li>
                Melanjutkan proses pengelolaan dana dengan Modal yang tersisa.
                </li>
              </ol>
            </li>
            <li>
            Pengelola akan memberikan laporan terkait keuntungan atau kerugian yang didapatkan oleh Pengguna melalui Aplikasi CFund ke dalam akun milik Pengguna
            </li>
          </ol>
        </li>
        
        <li><b>Biaya-Biaya</b>
            <ol>
              <li>
              Pengguna berkewajiban menanggung biaya sebanyak 2% (dua persen) dari total nilai dana yang disetorkan Pengguna setiap Pengguna melakukan penyetoran 
              dana (deposit dan penambahan dana/top-up) sebagai biaya manajemen (“Management Fee”) kepada Pengelola. Pemotongan biaya manajemen ini dilakukan setelah Pengguna melakukan penyetoran dana kepada Pengelola.
              </li>
              <li>
              Pengguna juga memiliki kewajiban untuk membayarkan biaya senilai 20% (dua puluh persen) dari keuntungan bulanan yang didapatkan Pengguna atas dana yang dikelola oleh Pengelola sebagai biaya performa (Performance Fee) tiap bulannya.
              </li>
              <li>
              Pada saat melakukan penarikan keuntungan maupun penarikan seluruh dana seluruh biaya pajak yang timbul atas transaksi tersebut akan dibebankan kepada Pengguna.
              </li>
            </ol>
        </li>

        <li><b>Penarikan Keuntungan Dan Penarikan Dana Pengguna</b>
            <ol>
              <li>Penarikan Keuntungan Bulanan
                <ol>
                  <li>
                  Pengguna dapat melakukan penarikan keuntungan setelah 1 (satu) bulan pengelolaan dana yang terhitung sejak Pengguna melakukan penyetoran dana. 
                  </li>
                  <li>
                  Penarikan keuntungan dapat dilakukan tiap bulannya melalui aplikasi CFUND. Pengguna dapat memilih mekanisme penarikan yaitu dengan cara dikirimkan 
                  melalui crypto wallet address atau bank transfer. Penarikan dilakukan setiap hari Senin hingga Rabu pada minggu pertama setiap bulannya (selanjutnya disebut <b>“Periode Penarikan Keuntungan”</b>);
                  </li>
                  <li>
                  Penarikan keuntungan akan dilakukan setelah Periode Penarikan berakhir dengan estimasi waktu 2-4 hari kerja sesuai dengan waktu operasional bank.
                  </li>
                  <li>
                  Jika ternyata terjadi penundaan transaksi karena mutasi transfer bank dalam Rupiah tidak dapat berjalan pada hari libur nasional, maka akan dilakukan pada hari kerja saat transfer dapat dilakukan;
                  </li>
                  <li>
                  Apabila Pengguna tidak melakukan penarikan keuntungan, maka keuntungan akan masuk ke dalam akun Pengguna dan akan dilakukan pengelolaan pada bulan berikutnya.
                  </li>
                </ol>
              </li>

              <li><b>Penarikan Seluruh atau Sebagian Dana Pengguna</b>
                <ol>
                  <li>
                  Penarikan Seluruh atau Sebagian Dana Pengguna CFUND STARS & CFUND GALAXY
                  <ol>
                    <li>
                    Penarikan seluruh dana Pengguna dapat dilakukan melalui aplikasi CFUND. 
                    Penarikan seluruh dana Pengguna dapat dilakukan pada apabila telah melewati masa 
                    penguncian dana dan dalam aplikasi CFUND tertera status (<b>“Capital Unlocked”</b>). 
                    Penarikan seluruh dana hanya dapat dilakukan pada Periode Penarikan Dana dengan 
                    status Capital Unlocked. Apabila Pengguna tidak melakukan penarikan seluruh dana pada masa 
                    Capital Unlocked maka akan diberlakukan kembali Masa Penguncian Dana untuk 3 (tiga) bulan berikutnya.
                    </li>
                    <li>
                    Pengelola akan melakukan transfer atas dana Pengguna sesuai dengan nilai yang tertera dalam laporan 
                    akhir pada tanggal dilakukannya penarikan dana dengan estimasi 2-3 hari kerja tergantung pada operasional bank.
                    </li>
                    <li>
                    Apabila Pengguna melakukan penarikan dana sebelum masa penguncian maka Pengguna akan dikenakan denda senilai 5% 
                    (lima persen) dari nilai dana yang ditarik. 
                    </li>
                  </ol>
                  </li>
                  <li>
                  Penarikan Seluruh atau Sebagian Dana Pengguna CFUND MOON
                  <p>
                  Seluruh Dana Pengguna CFUND MOON dapat ditarik pada saat periode penarikan dana. Apabila pengguna tidak melakukan 
                  penarikan seluruh dana pada saat periode penarikan dana, maka Pengguna sepakat untuk melanjutkan Investasi pada produk CFUND MOON. 
                  Penarikan seluruh dana Pengguna dapat dilakukan pada periode penarikan dana di bulan berikutnya.
                  </p>
                  </li>
                </ol>
              </li>
              <li>
              Tanggung Jawab Pengguna Saat Penarikan Dana
              <ol>
                <li>
                Pengguna bertanggun gjawab penuh atas permintaan penarikan yang dilakukan. Kami sangat bergantung atas kebenaran data terkait wallet address atau nomor rekening yang Pengguna masukkan pada saat melakukan perintah penarikan.
                </li>
                <li>
                Pengguna mengetahui dan menyepakati untuk melepaskan CFUND dari segala tuntutan hukum baik pidana maupun perdata apabila timbul kerugian yang dialami oleh Pengguna akibat kesalahan Pengguna pada saat mencantumkan nomor rekening atau wallet address.
                </li>
                <li>
                Pengguna harus berhati-hati dan menjaga kerahasiaan data akun miliknya. CFUND tidak bertanggung jawab apabila terjadi kerugian Pengguna yang timbul akibat email dan password akun CFUND miliknya diketahui oleh pihak lainnya karena adanya kesalahan dan/atau kelalaian dari Pengguna.
                </li>
              </ol>
              </li>
            </ol>
        </li>

        <li><b>Pemberitahuan</b>
            <ol>
              <li>
              Seluruh komunikasi, uang, aset kripto harus dikirimkan langsung ke alamat Pengguna seperti tertera dalam akun CFUND atau alamat lain yang ditetapkan atau diberitahukan secara tertulis oleh Pengguna.
              </li>
              <li>
              Semua uang, harus disetor atau ditransfer langsung oleh Pengguna ke Rekening Terpisah (Segregated Account) Pengelola:
              <table>
                <tr>
                  <td>Nama / Name</td>
                  <td>:</td>
                  <td>PT Cuma Untuk Anak Negeri</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td>:</td>
                  <td>Ruko Taman Permata Indah II Blok M No.27, Jalan Kampung Gusti Pejagalan, Jakarta Utara 14450</td>
                </tr>
                <tr>
                  <td>Bank</td>
                  <td>:</td>
                  <td>Bank Central Asia (BCA)</td>
                </tr>
                <tr>
                  <td>No. Rekening</td>
                  <td>:</td>
                  <td>7630899910 (PT Cuma Untuk Anak Negeri)</td>
                </tr>
              </table>
              <p>dan dianggap sudah diterima oleh Pengelola apabila sudah ada tanda terima bukti setor atau transfer ke pihak Pengelola.</p>
              </li>
            </ol>
        </li>

        <li>
        Pengguna menerima, mengakui dan mengerti seluruh informasi yang tertuang dalam Dokumen mengenai pemberitahuan adanya risiko.
        </li>

        <li>
        <b>Hak-Hak CFUND atas akun Pengguna</b>
          <ol>
            <li>
            Melakukan monitoring aktivitas akun Pengguna secara berkala, memvalidasi serta memastikan kebenaran data, melakukan penolakan-penolakan atas perintah transaksi, melakukan penghapusan akun (apabila Akun pengguna sudah tidak aktif selama lebih dari 2 (dua) tahun dan tidak memiliki dana yang tersisa serta hal-hal lain yang dianggap perlu oleh CFUND.
            </li>
            <li>
            CFUND berhak untuk melakukan hal-hal berikut dibawah ini:
              <ol>
                <li>
                Menolak permintaan Deposit;
                </li>
                <li>
                Menolak permintaan Penarikan Keuntungan;
                </li>
                <li>
                Menolak permintaan Penarikan Seluruh Dana;
                </li>
                <li>
                Menghentikan akses akun Pengguna;
                </li>
                <li>
                Menonaktifkan (permanen maupun sementara) akun CFUND Pengguna
                </li>
              </ol>
            </li>
            <li>
            Hak-hak sebagaimana dimaksud dalam poin 1) diatas dapat Kami lakukan apabila:
              <ol>
                <li>
                Berdasarkan perintah tertulis dari institusi penegak hukum, perintah melalui penetapan atau putusan pengadilan, perintah institusi negara (baik dalam maupun luar negeri, terbatas bagi negara lainnya yang memiliki dasar hukum untuk melakukan permintaan tersebut); 
                </li>
                <li>
                Kami menemukan dan/atau melihat adanya aktivitas mencurigakan dari Akun Anda;  
                </li>
                <li>
                Akun milik anda menjadi alat bukti dalam proses litigasi, penyidikan atau penyelidikan;
                </li>
                <li>
                Kami menemukan adanya kondisi kritis pada sistem kami sehingga diperlukan upaya untuk melakukan hal-hal sebagaimana dimaksud dalam poin 2) diatas untuk melindungi akun maupun dana Pengguna;  
                </li>
              </ol>
            </li>
            <li>
            Apabila Kami melakukan penangguhan, penolakan atau penutupan akun Pengguna, kami akan melakukan pemberitahuan mengenai keberlanjutan akun Pengguna. Untuk itu Pengguna wajib untuk melakukan penyelesaian atas prosedur serta dokumen pendukung yang kami mintakan untuk dapat melanjutkan penggunaan Akun CFUND Pengguna.
            </li>
          </ol>
        </li>

        <li><b>Jangka Waktu Perjanjian dan Pengakhiran Perjanjian</b>
          <ol>
            <li>
            Perjanjian ini mulai berlaku efektif terhitung sejak tanggal dilakukannya penandatanganan Perjanjian ini serta konfirmasi dari Pengelola dengan diterimanya bukti konfirmasi Penerimaan atas dana yang disetorkan Pengguna.
            </li>
            <li>
            Pengguna dapat mengakhiri Perjanjian ini jika Pengguna tidak lagi memiliki kewajiban atau terhutang kepada Pengelola dengan melakukan pemberitahuan kepada pegawai atau Pihak lain yang ditunjuk oleh Pengelola.
            </li>
            <li>
            Pengelola dapat melakukan pengakhiran Perjanjian ini apabila Pengguna telah melakukan penarikan atas seluruh dana dalam akun CFUND miliknya. 
            </li>
            <li>
            Pengakhiran tidak membebaskan salah satu Pihak dari tanggung jawab atau kewajiban yang belum dilakukannya atas Perjanjian ini.
            </li>
          </ol>
        </li>
        <li>
          <b>Berakhirnya Perjanjian</b>
          <p>Perjanjian ini dapat berakhir dalam hal Pengguna:</p>
          <ol>
            <li>
            Melakukan penarikan atas seluruh dana yang dimiliki oleh Pengguna.
            </li>
            <li>
            Dinyatakan pailit, memiliki hutang yang sangat besar, dalam proses peradilan, menjadi hilang ingatan, mengundurkan diri atau meninggal.
            </li>
            <li>
            Tidak dapat memenuhi atau mematuhi perjanjian ini dan/atau melakukan pelanggaran terhadapnya.
            </li>
            <li>
            Pengakhiran Perjanjian sebagaimana dimaksud dengan angka (1) dan (2) tersebut di atas tidak melepaskan kewajiban dari Para Pihak yang berhubungan dengan penerimaan atau kewajiban pembayaran atau pertanggungjawaban kewajiban lainnya yang timbul dari Perjanjian ini.
            </li>
          </ol>
        </li>

        <li><b>Ahli Waris</b>
          <ol>
            <li>
            Pengguna wajib mencantumkan informasi terkait ahli warisnya atau pihak lain yang ditunjuk oleh Pengguna untuk meneruskan Kesepakatan Pengelolaan Dana yang tertulis di Perjanjian ini.
            </li>
            <li>
            Adapun informasi terkait Ahli Waris yang harus disampaikan oleh Pengguna adalah sebagai berikut:
              <table>
                <tr>
                  <td>-</td>
                  <td>Nama</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>Alamat</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>Nomor Identitas</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>Kontak (dapat berupa e-mail atau nomor telepon)</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>Hubungan dengan Pengguna</td>
                </tr>
              </table>
            </li>
            <li>
            Ahli Waris akan menjadi orang pertama yang akan dihubungi oleh Pengelola Dana terkait keberlanjutan Perjanjian dan penyelesaian tanggung jawab apabila Pengguna meninggal dunia.
            </li>
            
          </ol>
        </li>

        <li><b>Force Majeure</b>
          <p>
          Tidak ada satupun pihak di dalam Perjanjian dapat diminta pertanggungjawabannya untuk suatu keterlambatan atau terhalangnya memenuhi kewajiban berdasarkan Perjanjian yang diakibatkan 
          oleh suatu sebab yang berada di luar kemampuannya atau kekuasaannya (force majeure), sepanjang pemberitahuan tertulis mengenai sebab itu disampaikannya kepada pihak lain dalam Perjanjian dalam waktu 2x24 (dua kali dua puluh empat) jam sejak timbulnya sebab itu. Yang dimaksud dengan Force Majeure dalam Perjanjian adalah peristiwa termasuk namun tidak terbatas pada kebakaran, bencana alam (seperti gempa bumi, banjir, angin topan, petir), pemogokan umum, huru hara, pandemi, peperangan, perubahan terhadap peraturan perundang-undangan yang berlaku di bidang ekonomi, keuangan maupun bidang lainnya yang berkaitan dengan pelaksanaan usaha Pengelola.
          </p>
        </li>

        <li>
        Perubahan atas isi dari syarat dan ketentuan ini dapat dilakukan secara sepihak. Pengelola akan memberitahukan perubahan yang dilakukan dan apabila Pengguna menyetujui melalui perubahan tersebut atau dengan tetap memberikan perintah untuk melakukan pengelolaan dana maka hal tersebut dianggap sebagai menyetujui perubahan tersebut.
        </li>

        <li><b>Penyelesaian Perselisihan</b>
          <ol>
            <li>
            Semua pelaksanaan dan perbedaan pendapat yang timbul dalam pelaksanaan Perjanjian ini wajib diselesaikan terlebih dahulu secara musyawarah untuk mencapai mufakat antara Para Pihak.
            </li>
            <li>
            Apabila perselisihan atau perbedaan pendapat yang timbul tidak dapat diselesaikan secara musyawarah untuk mencapai mufakat, Para Pihak wajib melakukan mediasi dengan menunjuk perwakilan bagi masing-masing untuk melakukan mediasi atas perselisihan yang terjadi.
            </li>
            <li>
            Apabila perselisihan dan perbedaan pendapat yang timbul tidak dapat diselesaikan melalui cara sebagaimana dimaksud pada angka (1) dan angka (2), maka Para Pihak sepakat untuk menyelesaikan perselisihan melalui Pengadilan Negeri Jakarta Selatan.
            </li>
          </ol>
        </li>

        <li>
        Syarat dan Ketentuan ini dibuat dalam Bahasa Indonesia, apabila terjadi perbedaan dalam penafsiran terhadap istilah yang ada dalam Perjanjian maka penafsiran berdasarkan bahasa Indonesia yang akan digunakan.
        </li>
      </ol>

      <h6>
      Saya telah mengerti dan memahami seluruh isi dari Syarat dan Ketentuan ini.
      </h6>

    </div>
    )
};

export default TncDetails;
