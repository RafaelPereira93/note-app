const arrayColors = [
  "#ffba93",
  "#d0e8f2",
  "#f9e0ae",
  "#bbbbbb",
  "#fdcfdf",
  "#bedbbb",
  "#ec524b",
  "#51adcf",
  "#c3aed6",
  "#d57149",
  "#ff7171",
  "#b2ebf2",
  "#e3dfc8",
  "#d3dbff",
  "#fa7d09",
  "#cff6cf",
  "#32e0c4",
  "#bce6eb",
  "#f4f4f4",
  "#eb8f8f",
  "#fddb3a",
  "#fe91ca",
  "#a3f7bf",
  "#c4fb6d",
  "#fa7d09",
];

const getRandomBackground = () => {
  const randomNumber = Math.round(Math.random() * arrayColors.length - 1);
  return randomNumber < 0
    ? `${arrayColors[0]}`
    : `${arrayColors[randomNumber]}`;
};

export default getRandomBackground;
