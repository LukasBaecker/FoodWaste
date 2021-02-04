import LegendItem from "./LegendItem"

const legendItemsM = [
    new LegendItem(
        "481.15 +",
        "#bd0026",
        (quantity) => quantity >= 4190,
        "white",
    ),
    new LegendItem(
        "467.5 - 481.15",
        "#f03b20",
        (quantity) => quantity >= 3410 && quantity< 4190,
        "white",
    ),
    new LegendItem(
        "458.3 - 467.5",
        "#fd8d3c",
        (quantity) => quantity >= 2671 && quantity< 3410,
    ),
    new LegendItem(
        "448 - 459.3",
        "#fecc5c",
        (quantity) => quantity >= 1671 && quantity< 2671,
    ),
    new LegendItem(
        "0 - 448",
        "#ffffb2",
        (quantity) => quantity >0 && quantity< 1671,
    ),
    new LegendItem ("No Data", "#ffffff", (quantity) => true),
];

export default legendItemsM;


/*
#741f1f //really red
#9c2929 // more red
#c57f7f // red
#d8aaaa // more pink
#ebd4de // pink
#ffffff //white
*/