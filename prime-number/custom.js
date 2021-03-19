/**
 * 找 1 到 10 之間所有質數
 */

for (let dividend = 2; dividend <= 10; dividend++) {

    //設定一個布林值，當作判斷當前的 dividend 是否為質數 (true 代表是質數)
    let isPrime = true;
    for (let divisor = 2; divisor < dividend; divisor++) {
        if (dividend % divisor == 0) {
            isPrime = false;
        }
    }

    if (isPrime == false) {
        console.log(`${dividend} 不是 質數`);
    }
    else {
        console.log(`${dividend} 是 質數`);
    }


}