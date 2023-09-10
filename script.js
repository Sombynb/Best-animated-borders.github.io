const cards = document.querySelectorAll(`.card`);
      // Add the tails to each card
      cards.forEach((card) => {
        [
          `top`,
          `right`,
          `bottom`,
          `left`,
        ].forEach((side) => {
          const tail = document.createElement(`div`);
          tail.classList.add(`tail`, side);
          card.appendChild(tail);
        });
        // if that card has no colours, add some
        if (!card.style.getPropertyValue(`--color1`)) {
          card.style.setProperty(`--color1`, `hsl(${Math.random() * 360}, 100%, 50%)`);
          card.style.setProperty(`--color2`, `hsl(${Math.random() * 360}, 100%, 50%)`);
        }
      });

      setInterval(() => {
        cards.forEach((card) => {
          if (!card.style.getPropertyValue(`--color1`)) {
            card.style.setProperty(`--color1`, `hsl(${Math.random() * 360}, 100%, 50%)`);
            card.style.setProperty(`--color2`, `hsl(${Math.random() * 360}, 100%, 50%)`);
          }
        });
      }, 7000);