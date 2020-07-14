"use strict";
const formatString = string => string.length > 40 ? `${string.slice(0, 41)}...` : string;

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// повернеться оригінальний рядок

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// повернеться форматований рядок

console.log(formatString("Curabitur ligula sapien."));
// повернеться оригінальний рядок

console.log(
    formatString(
        "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
);
// повернеться форматований рядок