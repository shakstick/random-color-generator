const generator = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const rand = Math.floor(Math.random() * alphabet_digits.length);
    color += alphabet_digits[rand];
  }
  return color;
};

const alphabet = ["A", "B", "C", "D", "E", "F"];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alphabet_digits = [...alphabet, ...digits];

const text = document.querySelectorAll("p");
const cols = document.querySelectorAll(".col");

cols.forEach((col, index) => {
  const hex = generator();
  col.style.backgroundColor = hex;
  text[index].textContent = hex;
});
