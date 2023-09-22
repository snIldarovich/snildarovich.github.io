const slider = document.getElementById("slider");

slider.addEventListener("input", function() {
  const value = slider.value;
  // Обновляем значение процента на странице
  document.getElementById("percent").textContent = value + "%";
});

slider.addEventListener("mousedown", function() {
  // Добавляем обработчик события mousemove при нажатии на ползунок
  document.addEventListener("mousemove", updateValue);
});

document.addEventListener("mouseup", function() {
  // Удаляем обработчик события mousemove при отпускании мыши
  document.removeEventListener("mousemove", updateValue);
});

function updateValue() {
  const value = slider.value;
  // Обновляем значение процента на странице
  document.getElementById("percent").textContent = value + "%";
}