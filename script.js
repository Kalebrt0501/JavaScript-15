function roll_dice() {
    const num_of_dice = document.querySelector("#numOfDice").value;
    const dice_result = document.querySelector("#diceResult");
    const dice_images = document.querySelector("#diceImages");
    const values = [];
    const images = [];

    if (num_of_dice > 6 || num_of_dice < 0) {return;}
    for (let i = 0; i < num_of_dice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png">`);
        
    }

    dice_result.textContent = `Dice: ${values.join(",")}`;
    dice_images.innerHTML = images.join("");
}