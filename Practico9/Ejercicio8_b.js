const provincias = document.querySelectorAll(".provincia");

    provincias.forEach(provincia => {
      const ciudades = provincia.querySelector(".ciudades");

      provincia.addEventListener("click", (e) => {
        if (e.target !== provincia) return;

        if (ciudades.style.display === "none") {
          ciudades.style.display = "block";
          provincia.classList.remove("subrayado");
        } else {
          ciudades.style.display = "none";
          provincia.classList.add("subrayado");
        }
      });
    });