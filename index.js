const imgINput = document.getElementById('imgINput');
const imgElm = document.getElementById('imageDisplay');
const downloadBtn = document.getElementById('download');

imgElm.style.height = '500px';
imgElm.style.width = 'auto';

// All buttons
const blur = document.getElementById('blur'),
    bright = document.getElementById('bright'),
    contrast = document.getElementById('contrast'),
    dropSh = document.getElementById('dropSh'),
    grayscale = document.getElementById('grayscale'),
    hueRo = document.getElementById('hueRo'),
    invert = document.getElementById('invert'),
    opacity = document.getElementById('opacity'),
    saturate = document.getElementById('saturate'),
    sapia = document.getElementById('sapia');

// Load the image
imgINput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            imgElm.src = e.target.result;
            imgElm.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// Apply filters
function applyFilter(filterClass) {
    imgElm.className = filterClass;
}

blur.addEventListener('click', () => applyFilter('filter_blur'));
bright.addEventListener('click', () => applyFilter('filter_bright'));
contrast.addEventListener('click', () => applyFilter('filter_contrast'));
dropSh.addEventListener('click', () => applyFilter('filter_dropSh'));
grayscale.addEventListener('click', () => applyFilter('filter_grayscale'));
hueRo.addEventListener('click', () => applyFilter('filter_hueRo'));
invert.addEventListener('click', () => applyFilter('filter_invert'));
opacity.addEventListener('click', () => applyFilter('filter_opacity'));
saturate.addEventListener('click', () => applyFilter('filter_saturate'));
sapia.addEventListener('click', () => applyFilter('filter_sapia'));

// Download the image with applied filter
downloadBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');  

    canvas.width = imgElm.width;
    canvas.height = imgElm.height;

    ctx.filter = getComputedStyle(imgElm).filter;

    ctx.drawImage(imgElm, 0, 0, canvas.width, canvas.height);
    
    const link = document.createElement('a');
    link.download = 'edited-by_tahsinZidane.png';
    link.href = canvas.toDataURL();
    link.click();
});
