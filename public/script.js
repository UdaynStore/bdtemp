// Create canvas and convert to base64 image
function createPlaceholderImage(number, color) {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(number, canvas.width/2, canvas.height/2);
    
    return canvas.toDataURL('image/jpeg', 0.8);
}

// Colors for placeholders
const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96E6A1', '#FFD93D',
    '#6C5CE7', '#A8E6CF', '#FF8B94', '#A685E2', '#FF9A9E', '#98DDCA'
];

// Create and save placeholder images
for (let i = 1; i <= 11; i++) {
    const imgData = createPlaceholderImage(i, colors[i-1]);
    const link = document.createElement('a');
    link.href = imgData;
    link.download = `image${i}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}