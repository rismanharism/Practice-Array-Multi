// 1. Buatlah sebuah variabel dengan nama "groups"

// 2. Isi variable tersebut dengan array yang memiliki 3 array :
// - ['jennie', 'lisa', 'jisoo', 'rose']
// - ['winter', 'karina', 'giselle', 'ningning']
// - ['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong']

// 3. Cetak element array pertama (['jennie', 'lisa', 'jisoo', 'rose'])

// 4. Cetak element array ketiga (['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong'])

// 5. Ganti element ketiga dari array menjadi:
// - ['irene', 'joy', 'wendy', 'yeri', 'seulgi']

// 6. Cetak ("wendy")

// 7. Gunakan property length untuk mencetak jumlah element di array index kedua

// 8. Gunakan loop for untuk mencetak nilai groups di console secara berurutan
// output:
/*

['jennie', 'lisa', 'jisoo', 'rose']
['winter', 'karina', 'giselle', 'ningning']
['irene', 'joy', 'wendy', 'yeri', 'seulgi']

*/

// 8. Gunakan loop for untuk mencetak nama member di console secara berurutan
/*

'jennie'
'lisa'
'jisoo'
'rose'
'winter'
'karina'
'giselle'
'ningning'
'irene'
'joy'
'wendy'
'yeri'
'seulgi'

*/

let groups = [['jennie', 'lisa', 'jisoo', 'rose'], ['winter', 'karina', 'giselle', 'ningning'], ['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong']]; // jawaban 12

console.log(groups[0]) //jawaban 3 ['jennie', 'lisa', 'jisoo', 'rose']
console.log(`===============`)
console.log(groups[2]) // jawaban 4 ['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong']
console.log(`=============`)
// 5. Ganti element ketiga dari array menjadi:
// - ['irene', 'joy', 'wendy', 'yeri', 'seulgi']
groups[2] = ['irene', 'joy', 'wendy', 'yeri', 'seulgi'] // jawaban 5 // - ['irene', 'joy', 'wendy', 'yeri', 'seulgi']
console.log(groups[2])
console.log(`===========`)
console.log(groups[2][2]) // jawaban 6 = wendy
console.log(`==========`)
console.log(groups[1].length) //jawaban 7 = 4
console.log(`==========`)

for (let x = 0; x < groups.length; x++) {

    console.log(groups[x])                           //jawaban 8     

}

for (let x = 0; x < groups.length; x++) {

    
    for (let y = 0; y < groups[x].length; y++) {
        console.log(groups[x][y])                   // jawaban 8
    }
}
