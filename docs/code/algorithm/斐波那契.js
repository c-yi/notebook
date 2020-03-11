const createFIB = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            arr.push(1)
        } else {
            arr[i] = arr[i - 1] + arr[i - 2]
        }
    }
    return arr;
};

console.log(createFIB(10));
