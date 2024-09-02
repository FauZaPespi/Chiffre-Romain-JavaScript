function nbToRomain(num) {
    let romain = "";
    const romainKeys = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        while (num >= key) {
            romain += romainKeys[i];
            num -= key;
        }
    }
    return romain;
}

function convertToRoman() {
    let userInput = Number(document.getElementById('numberInput').value);
    let resultDiv = document.getElementById('result');
    
    if (userInput > 0 && userInput <= 3999) {
        let NombreRomain = nbToRomain(userInput);
        resultDiv.innerText = `Nombre Romain: ${NombreRomain}`;
    } else {
        resultDiv.innerText = "Entrez un nombre entre 1 et 3999.";
    }
    resultDiv.classList.add('show');
}

document.getElementById('numberInput').addEventListener('input', convertToRoman);

const themeSwitcher = document.getElementById('themeSwitcher');
const body = document.body;

themeSwitcher.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeSwitcher.innerText = 'Switch to Dark Theme';
    } else {
        body.classList.add('dark-theme');
        themeSwitcher.innerText = 'Switch to Light Theme';
    }
});
