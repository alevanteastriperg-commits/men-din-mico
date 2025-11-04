fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const nav = document.querySelector('nav');
    nav.innerHTML = ''; 

    data.menu.forEach(item => {
      const link = document.createElement('a');
      link.textContent = item.nombre;
      link.href = item.enlace;
      link.classList.add('menu-item');

      if (item.submenu) {
        const submenuContainer = document.createElement('div');
        submenuContainer.classList.add('submenu');

        item.submenu.forEach(sub => {
          const subLink = document.createElement('a');
          subLink.textContent = sub.nombre;
          subLink.href = sub.enlace;
          submenuContainer.appendChild(subLink);
        });

        const wrapper = document.createElement('div');
        wrapper.classList.add('menu-con-submenu');
        wrapper.appendChild(link);
        wrapper.appendChild(submenuContainer);

        nav.appendChild(wrapper);
      } else {
        nav.appendChild(link);
      }
    });
  })
  .catch(error => console.error('Error al cargar el menú:', error));
