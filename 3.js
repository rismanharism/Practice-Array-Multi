/**
 * =================
 * Box of alphabet
 * =================
 *
 * Terdapat sebuah fungsi yang akan membuat sebuah array multi dimensi dengan jumlah baris dan kolom yang diminta oleh user.
 *
 * Pada setiap elementnya kita akan memasukkan huruf alphabet berurutan dari A hingga Z.
 * Pengisian huruf dimulai dari baris pertama dari kiri ke kanan, ketika baris pertama sudah terisi dengan huruf huruf alfabet,
 * maka pengisian dimulai dari baris kedua paling kiri dan bergerak ke kanan dan seterusnya.
 *
 * Ketika huruf sudah mencapai huruf Z maka element selanjutnya akan diisi oleh huruf A lagi dan seterusnya.
 *
 * Rules:
 * - Hanya boleh menggunakan built in function push()
 *
 */

 function boxOfAlphabet(row, col) {
let abjad = 'abcdefghijklmnopqrstuvwxyz'
let hasil = []
let count = 0

for (let i = 0; i < row; i++) {
    let temp = []
    for (let j = 0; j < col; j++) {
        if(count>=abjad.length){
            count = 0
        }
        temp.push(abjad[count])
        count++  
    }
    hasil.push(temp)
}
    return hasil
 }

 console.log(boxOfAlphabet(2, 2))
 /**
  * [
  *  ['a', 'b'],
  *  ['c', 'd']
  * ]
  */
 
 console.log(boxOfAlphabet(3, 4))
 
 /**
  *  [
  *   ['a', 'b', 'c', 'd'],
  *   ['e', 'f', 'g', 'h'],
  *   ['i', 'j', 'k', 'l'],
  * ]
  */
 
 console.log(boxOfAlphabet(6, 5))
 
 /**
  * [
  *   ['a', 'b', 'c', 'd', 'e'],
  *   ['f', 'g', 'h', 'i', 'j'],
  *   ['k', 'l', 'm', 'n', 'o'],
  *   ['p', 'q', 'r', 's', 't'],
  *   ['u', 'v', 'w', 'x', 'y'],
  *   ['z', 'a', 'b', 'c', 'd']
  * ]
  */