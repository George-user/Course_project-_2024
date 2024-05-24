// Функция для деления ширины окна на максимальное значение
function setSVGSize() {
    var svg = document.querySelector('svg'); // Получаем ссылку на SVG-элемент
    var windowWidth = window.innerWidth; // Получаем ширину окна браузера
  
    // Устанавливаем новую ширину SVG-изображения
    svg.setAttribute('width', windowWidth);
  
    // Устанавливаем новую высоту SVG-изображения, пропорционально изначальным размерам
    var viewBoxWidth = svg.getAttribute('viewBox').split(' ')[2];
    var viewBoxHeight = svg.getAttribute('viewBox').split(' ')[3];
    var newHeight = (windowWidth / viewBoxWidth) * viewBoxHeight;
    svg.setAttribute('height', newHeight);
  }
  

  window.onload = setSVGSize;
  window.onresize = setSVGSize;
  