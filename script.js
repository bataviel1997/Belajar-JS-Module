import { cetakNama, dataSiswa } from './cetakNama.js';
import cetakDataSiswa, { cetakAlamat } from './cetakDataSiswa.js';

// tangkap element btn_cetakSiswa
let btn_cetakSiswa = document.getElementById('btn_cetakSiswa');

// tambahkan event listener click ke btn_cetakSiswa
btn_cetakSiswa.addEventListener('click', () => {
  cetakDataSiswa('fadliselaz', 6, true);
});

