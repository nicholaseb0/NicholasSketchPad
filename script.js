// MySketch - Drawing App by Nicholas Eb

const gridBox = document.querySelector('.gridBox');
const colorBtn = document.querySelector('.color');
const rainbowBtn = document.querySelector('.rainbow');
const mosaicBtn = document.querySelector('.mosaic');
const eraserBtn = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear');
const sizeBtn = document.querySelector('.size');
const toggleGridBtn = document.querySelector('.toggleGrid');

let currentMode = 'color';
let currentColor = '#000000';
let showGrid = true;
let gridSize = 16;

// Set up initial grid
window.onload = () => {
    buildGrid(gridSize);
};

// Build the grid
function buildGrid(size) {
    gridBox.innerHTML = '';
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (!showGrid) cell.style.border = 'none';
        cell.addEventListener('mouseover', changeColor);
        gridBox.appendChild(cell);
    }
}

// Handle drawing color
function changeColor(e) {
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'rainbow') {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (currentMode === 'mosaic') {
        const randGray = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randGray}, ${randGray}, ${randGray})`;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '';
    }
}

// Button Actions
colorBtn.onclick = () => {
    currentMode = 'color';
    currentColor = prompt('Enter a color (name or HEX):', '#000000') || '#000000';
};

rainbowBtn.onclick = () => {
    currentMode = 'rainbow';
};

mosaicBtn.onclick = () => {
    currentMode = 'mosaic';
};

eraserBtn.onclick = () => {
    currentMode = 'eraser';
};

clearBtn.onclick = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => (cell.style.backgroundColor = ''));
};

sizeBtn.onclick = () => {
    let newSize = parseInt(prompt('Enter grid size (max 64):', gridSize));
    if (newSize && newSize > 0 && newSize <= 64) {
        gridSize = newSize;
        buildGrid(gridSize);
    } else {
        alert('Please enter a number between 1 and 64.');
    }
};

toggleGridBtn.onclick = () => {
    showGrid = !showGrid;
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.border = showGrid ? '1px solid #ddd' : 'none';
    });
};
// MySketch - Drawing App by Nicholas Eb

const gridBox = document.querySelector('.gridBox');
const colorBtn = document.querySelector('.color');
const rainbowBtn = document.querySelector('.rainbow');
const mosaicBtn = document.querySelector('.mosaic');
const eraserBtn = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear');
const sizeBtn = document.querySelector('.size');
const toggleGridBtn = document.querySelector('.toggleGrid');

let currentMode = 'color';
let currentColor = '#000000';
let showGrid = true;
let gridSize = 16;

// Set up initial grid
window.onload = () => {
    buildGrid(gridSize);
};

// Build the grid
function buildGrid(size) {
    gridBox.innerHTML = '';
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (!showGrid) cell.style.border = 'none';
        cell.addEventListener('mouseover', changeColor);
        gridBox.appendChild(cell);
    }
}

// Handle drawing color
function changeColor(e) {
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'rainbow') {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (currentMode === 'mosaic') {
        const randGray = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randGray}, ${randGray}, ${randGray})`;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '';
    }
}

// Button Actions
colorBtn.onclick = () => {
    currentMode = 'color';
    currentColor = prompt('Enter a color (name or HEX):', '#000000') || '#000000';
};

rainbowBtn.onclick = () => {
    currentMode = 'rainbow';
};

mosaicBtn.onclick = () => {
    currentMode = 'mosaic';
};

eraserBtn.onclick = () => {
    currentMode = 'eraser';
};

clearBtn.onclick = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => (cell.style.backgroundColor = ''));
};

sizeBtn.onclick = () => {
    let newSize = parseInt(prompt('Enter grid size (max 64):', gridSize));
    if (newSize && newSize > 0 && newSize <= 64) {
        gridSize = newSize;
        buildGrid(gridSize);
    } else {
        alert('Please enter a number between 1 and 64.');
    }
};

toggleGridBtn.onclick = () => {
    showGrid = !showGrid;
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.border = showGrid ? '1px solid #ddd' : 'none';
    });
};
