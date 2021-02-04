import LegendItem from "./LegendItem"

const legendItems = [
    new LegendItem(
        "6.746.343 +",
        "#00441b",
        (quantity) => quantity >= 6746343,
        "white",
    ),
    new LegendItem(
        "2.591.187 - 6.746.343",
        "#267b3a",
        (quantity) => quantity >= 2591187 && quantity< 6746343,
        "white",
    ),
    new LegendItem(
        "1.478.966- 2.591.187",
        "#06aa6e",
        (quantity) => quantity >= 1478966 && quantity< 2591187,
    ),
    new LegendItem(
        "408.103 - 1.478.966",
        "#caeac3",
        (quantity) => quantity >= 408103 && quantity< 1478966,
    ),
    new LegendItem(
        "0 - 408.103",
        "#f7fcf5",
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