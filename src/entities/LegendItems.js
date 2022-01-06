import LegendItem from "./LegendItem";

const legendItems = [
    new LegendItem(
        "> 30,000,000",
        "#1644ba",
        (cases) => cases >= 30_000_000,
        "white"
    ),
    new LegendItem(
        "10,000,000 - 29,999,999",
        "#265fee",
        (cases) => cases >= 10_000_000 && cases < 30_000_000,
        "white"
    ),
    new LegendItem(
        "1,000,000-9,999,999",
        "#5181fd",
        (cases) => cases >= 1_000_000 && cases <= 9_999_999,
    ),
    new LegendItem(
        "500,000 - 999,999",
        "#92b0fd",
        (cases) => cases >= 500_000 && cases <= 999_999,
    ),
    new LegendItem(
        "100,000 - 499, 999",
        "#c4d3fc",
        (cases) => cases >= 100_000 && cases <= 499_999,
    ),
    new LegendItem(
        "< 99,999",
        "#dde6fd",
        (cases) => cases > 0 && cases <= 99_999,
    ), new LegendItem("No Data", "#ffffff", (cases) => true)
];

export default legendItems;

/*#265fee, #5181fd, #92b0fd, #dde6fd*/