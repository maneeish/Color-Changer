document.addEventListener('DOMContentLoaded', () => {
    const hexInput = document.getElementById('hexInput');
    const createButton = document.getElementById('createButton');
    const colorContainer = document.querySelector('.color-container'); 

   
    function isValidHex(hex) {
        return /^#([0-9A-Fa-f]{3}){1,2}$/.test(hex);
    }

    createButton.addEventListener('click', () => {
        let hexValue = hexInput.value.trim();

        if (isValidHex(hexValue)) {
            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            colorBox.style.backgroundColor = hexValue;
            colorBox.textContent = hexValue; 

            
            colorBox.addEventListener('click', () => {
                document.body.style.backgroundColor = hexValue;
            });

          
            colorContainer.appendChild(colorBox);

        } else {
            alert('Invalid Hex Code');
        }
    });

    
    hexInput.addEventListener('input', () => {
        let hexValue = hexInput.value;
        if (hexValue.charAt(0) !== "#" && hexValue.length > 0) {
            hexValue = "#" + hexValue;
            hexInput.value = hexValue;
        }
    });
});
