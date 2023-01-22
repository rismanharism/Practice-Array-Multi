

function ganjil(num) {
  return num % 2 === 1
}

let nums = [
  [3, 6, 9],
  [12, 17, 81, 95],
  [4, 18, 102],
  [77]
]

let result = []

for(let i = 0; i < nums.length; i++) {
  for(let j = 0; j < nums[i].length; j++) {
    const num = nums[i][j]
    console.log(num)
    if(ganjil(num)) {
      result.push(num - 10)
    } else {
      result.push(num + 5)
    }
  }
}

console.log(result)



// Jawaban :
// [-7,11,-1,17,7,71,85,9,23,107,67]
