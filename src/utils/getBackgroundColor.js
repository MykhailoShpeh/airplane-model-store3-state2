import clsx from "clsx";

// export function getBgColor(year) {
//     let bgColor = '#ffdb92';
//     if (year > 1945) bgColor = '#d2fdbd';
//     if (year > 1999) bgColor = '#d6f1ff';
//     return bgColor;
// }

// export function getBgColor(year) {
//     const array = ['item'];
//     if (year > 1945) array.push('last')
//     if (year > 2000) array.push('current')

//     return array;
// }

//todo: var.1.1 - використання бібліотеки clsx
//     export function getBgColor(year) {
//     const classNames = clsx(
//         "item",
//         year > 1945 && "last",
//         year > 1999 && "current",
//     );
//     console.log("classNames:", classNames); //!
//     return classNames;
// };

//todo: var.2.1 - використання бібліотеки clsx
// export function getBgColor(year) {
//     let classNames = "";
//     if (year < 1946) return classNames = "item";
//     classNames = clsx(
//         "item",
//         year > 1945 && year < 2000 ? "last" : "current"
//     );
//     console.log("classNames:", classNames); //!
//     return classNames;
// };


//todo: CSS-модулі 
export function getBgColorCSSModule(year) {
    // return "planesItem"

    let className = "item";
    if (year > 1945) className = "itemLast";
    if (year > 1999) className = "itemCurrent";
    console.log("className:", className); //!
    return className;
};
