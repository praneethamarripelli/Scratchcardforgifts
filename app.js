var num = Math.floor(Math.random() * 5) + 1;


$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `Images/img ${num}.png`, // Background (image path or hex color).
  fg: `Images/front.png`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});
