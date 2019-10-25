function konversiMenit(menit) {
  // you can only write your code here!
  var minute = 0;
  var detik = menit % 60;
  if (menit < 60) {
    return minute + ":" + menit;
  } else {
    minute = Math.floor(menit / 60);
    if (detik < 10) {
      return minute + ":0" + detik;
    } else {
      return minute + ":" + detik;
    }
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
