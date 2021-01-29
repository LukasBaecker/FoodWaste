import LegendItem from "./LegendItem"

const legendItems = [
    new LegendItem(
        "479 +",
        "#bd0026",
        (quantity) => quantity >= 479,
        "white",
    ),
    new LegendItem(
        "457 - 478.,999",
        "#f03b20",
        (quantity) => quantity >= 457 && quantity< 479,
        "white",
    ),
    new LegendItem(
        "444 - 456,999",
        "#fd8d3c",
        (quantity) => quantity >= 444 && quantity< 457,
    ),
    new LegendItem(
        "429 - 443,999",
        "#fecc5c",
        (quantity) => quantity >= 429 && quantity< 444,
    ),
    new LegendItem(
        "0 - 428,999",
        "#ffffb2",
        (quantity) => quantity >0 && quantity< 429,
    ),
    new LegendItem ("No Data", "#ffffff", (quantity) => true),
];

export default legendItems;


/*
#741f1f //really red
#9c2929 // more red
#c57f7f // red
#d8aaaa // more pink
#ebd4de // pink
#ffffff //white
*/