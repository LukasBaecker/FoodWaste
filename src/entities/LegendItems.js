import LegendItem from "./LegendItem"

const legendItems = [
    new LegendItem(
        "6.746.343 +",
        "#bd0026",
        (quantity) => quantity >= 6746343,
        "white",
    ),
    new LegendItem(
        "2.591.187 - 6.746.343",
        "#f03b20",
        (quantity) => quantity >= 2591187 && quantity< 6746343,
        "white",
    ),
    new LegendItem(
        "1.478.966- 2.591.187",
        "#fd8d3c",
        (quantity) => quantity >= 1478966 && quantity< 2591187,
    ),
    new LegendItem(
        "408.103 - 1.478.966",
        "#fecc5c",
        (quantity) => quantity >= 408103 && quantity< 1478966,
    ),
    new LegendItem(
        "0 - 408.103",
        "#ffffb2",
        (quantity) => quantity >0 && quantity< 408103,
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