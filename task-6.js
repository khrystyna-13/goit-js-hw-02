"use strict";
let input;
let total = 0;

while (input !== null) {
    input = prompt("Введіть число, будь-ласка:");

    if (input !== null) {
        let num=(Number(input));
        
        if (Number.isNaN(num)) {
            alert("Було написано не число, спробуйте ще раз");
        } else {
            total += num;
        }
    }
}

alert(`Загальна сума чесел дорівнює ${total}`);