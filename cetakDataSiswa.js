

/**
 * function cetak data siswa
 * by jvalley
 * @param {string} nama
 * @param {number} kelas
 * @param {boolean} lulus
 */
 function cetakDataSiswa(nama, kelas, lulus){
  console.info({
    nama : nama,
    kelas : kelas,
    lulus : lulus
  });
}

/**
 * mencetak alamat ke console
 * @param {string} alamat
 */
export function cetakAlamat(alamat){
  console.info(alamat);
}

export default cetakDataSiswa;
