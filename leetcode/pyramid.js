let pyramid = (x) => {
    if(x  <= 0) {
        console.log('Invalid Input');
        return
    }
    let count =1;
    let inner = (x) =>{
        let array = new Array(count)
        for(let i = 0; i <array.length; i ++) {
            array[i] = "x";
        }
        console.log(array.join(''));
        count ++;
        x--;
        if(x === 0) return;
        inner(x);
    }
    inner(x)
}

pyramid(9)
