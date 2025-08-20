const input = document.getElementById('textInput');
const colorPicker = document.getElementById('colorPicker');
const neon = document.querySelector('.neon-text');

// Updating text as user types
input.addEventListener('input', () => {
  neon.textContent = input.value || "NEON VIBES";
});

// Updating neon color
colorPicker.addEventListener('input', () => {
  const color = colorPicker.value;
  neon.style.textShadow = `
    0 0 5px ${color},
    0 0 10px ${color},
    0 0 20px ${color},
    0 0 40px ${color},
    0 0 80px ${color}`;
});