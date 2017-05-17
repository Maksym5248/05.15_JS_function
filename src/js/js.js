/*
 Написати функцію, яка буде виводити переданий їй масив через 1 елемент.
 Написати функцію, яка буде виводити переданий масив з вказаним кроком.
 Величина кроку також передається, як аргумент. (Приклад виклику:
 printArray([1,2,3,4,5,6, 7], 3). Перший аргумент масив, який буде виведено, а другий - крок. Тобто виводом буде 1,4,7)
 Написати функцію, яка буде шукати найменший елемент в масиві.
 Написати функцію, яка буде шукати найбільший елемент в масиві.
 */

var arr = [10,5,8,9,6,2,4,5,10,11];

function arrf(a) {         // функція, що виводить переданий їй масив через 1 елемент
    var arr2 = [];
    for (var i = 0; i < a.length; i+=2){
        arr2.push(a[i]);
    }
    return arr2;
}

console.log(arrf(arr));







function arry(a,b) {         // функція, що виводить переданий їй масив з вказаним кроком
    var arr2 = [];
    for (var i = 0; i < a.length; i+=b){
        arr2.push(a[i]);
    }
    arr2.push(b);
    return arr2;
}

console.log(arry(arr,4));






function arr_min(arguments) {         // функція, що шукає найменший елемент в масиві
    var min = arguments[0];
    var exp = 0;
    for (var i = 0; i < arguments.length; i++){
        exp = arguments[i];
        if ( min >=exp){
            min = exp;
        }

    }
    return min;
}

console.log(arr_min([6,2,3,5,5,6,7,8,9,10]));







function arr_max(arguments) {         // функція, що шукає найбільший елемент в масиві
    var max = 0;
    var exp = 0;
    for (var i = 0; i < arguments.length; i++){
        exp = arguments[i];
        if ( exp > max){
            max = exp;
        }
    }
    return max;
}

console.log(arr_max([1,2,3,4,5,155,7,156,9,10]));