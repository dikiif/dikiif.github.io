// Function to handle increment and decrement
function updateValue(buttonId, inputId, operation) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);

    button.addEventListener("click", () => {
        let currentValue = parseInt(input.value, 10);
        if (isNaN(currentValue)) currentValue = 0;

        // Increment or decrement based on the operation
        if (operation === "increment") {
            input.value = currentValue + 1;
        } else if (operation === "decrement") {
            if (currentValue > parseInt(input.min, 10)) {
                input.value = currentValue - 1;
            }
        }
    });
}

// Initialize buttons for Rooms
updateValue("increase-rooms", "rooms", "increment");
updateValue("decrease-rooms", "rooms", "decrement");

// Initialize buttons for Adults
updateValue("increase-adults", "adults", "increment");
updateValue("decrease-adults", "adults", "decrement");

// Initialize buttons for Children
updateValue("increase-children", "children", "increment");
updateValue("decrease-children", "children", "decrement");
