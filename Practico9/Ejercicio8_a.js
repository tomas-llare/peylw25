const colorMap = {
      'blanco': 'white',
      'negro': 'black',
      'azul': 'blue',
      'rojo': 'red',
      'amarillo': 'yellow'
    };

    function contrasteTexto(bgColor) {
      const lightBg = ['white', 'yellow', '#fff', '#ffffff', 'lightyellow', 'ivory'];
      return lightBg.includes(bgColor.toString().toLowerCase()) ? 'black' : 'white';
    }

    const items = document.querySelectorAll('#listaColores li');

    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        const clave = item.textContent.trim().toLowerCase();
        const cssColor = colorMap[clave] || clave;
        item.style.backgroundColor = cssColor;
        item.style.color = contrasteTexto(cssColor);
      });

      item.addEventListener('mouseout', () => {

        item.style.backgroundColor = '';
        item.style.color = '';
      });
    });