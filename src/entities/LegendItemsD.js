import LegendItem from "./LegendItem"

const legendItemsD = [
    new LegendItem(
        "481.15 +",
        "#bd0026",
        (quantity) => quantity >= 481.15,
        "white",
    ),
    new LegendItem(
        "467.5 - 481.15",
        "#f03b20",
        (quantity) => quantity >= 467.5 && quantity< 481.15,
        "white",
    ),
    new LegendItem(
        "458.3 - 467.5",
        "#fd8d3c",
        (quantity) => quantity >= 458.3 && quantity< 467.5,
    ),
    new LegendItem(
        "448 - 459.3",
        "#fecc5c",
        (quantity) => quantity >= 448 && quantity< 458.3,
    ),
    new LegendItem(
        "0 - 448",
        "#ffffb2",
        (quantity) => quantity >0 && quantity< 448,
    ),
    new LegendItem ("No Data", "#ffffff", (quantity) => true),
];

export default legendItemsD;


/*
#741f1f //really red
#9c2929 // more red
#c57f7f // red
#d8aaaa // more pink
#ebd4de // pink
#ffffff //white
*/