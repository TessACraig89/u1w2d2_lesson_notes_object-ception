const adventurer = {
    name: "Kobe",
    belongings: ["sweater", "pillow", "bed", "bow tie"]
}

console.log(adventurer.belongings[3]);

adventurer.belongings.push("Vogue Magazine");

console.log(adventurer.belongings);

for (i = 0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}
