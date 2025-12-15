
fetch("http://localhost:5001/api/slots")
  .then(res => res.json())
  .then(result => {
    const slots = result.data;
    const grid = document.getElementById("slotGrid");

    grid.innerHTML = "";

    slots.forEach(slot => {
      const div = document.createElement("div");
      div.classList.add("slot");

      if (slot.isAvailable) {
        div.classList.add("available");
        div.innerText = `Slot ${slot.slotNumber}\nAvailable`;
      } else {
        div.classList.add("unavailable");
        div.innerText = `Slot ${slot.slotNumber}\nOccupied`;
      }

      grid.appendChild(div);
    });
  })
  .catch(err => console.error(err));
