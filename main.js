const input = document.querySelector(".inputText");
const shift = document.querySelector(".number");
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus');
const btn = document.querySelector(".btn");
const message = document.querySelector('.result')
const result = document.querySelector(".cipher");
const checkboxEncrypt = document.querySelector("#encrypt");
const checkboxDecrypt = document.querySelector("#decrypt");
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let cipher = [];
let decryptText = [];
let shiftNumber = 0;

let isEncrypt = false;

const encrypt = () => {
	if(checkboxEncrypt.checked){
		if(input.value.trim() && shift.textContent.trim()){
			let index;
			for(let i=0; i<alphabet.length; i++){
				if(alphabet.includes(input.value.toLowerCase()[i])){
					index = alphabet.indexOf(input.value.toLowerCase()[i]);
					if(index >= alphabet.length - 1){
						index = -1;
						console.log(index);
					}else if(index == alphabet.length - 2){
						index = -2;
					}else if(index == alphabet.length - 3){
						index = -3;
					}
					cipher.push(alphabet[index+shiftNumber]);
				}
			}
			const stringCipher = cipher.toString().replaceAll(',','');
			message.textContent = 'Zaszyfrowany tekst to:';
			result.textContent = stringCipher;
			input.value = '';
		}else{
			result.textContent = 'Wprowadź wartości do pól';
		}
	}
};

const decrypt = () => {
	if(checkboxDecrypt.checked){
		if(input.value.trim() && shift.textContent.trim()){
			let index;
			for(let i=0; i<alphabet.length; i++){
				if(alphabet.includes(input.value.toLowerCase()[i])){
					index = alphabet.indexOf(input.value.toLowerCase()[i]);
					if(index == 0){
						index = alphabet.length;
					}else if(index == 1){
						
					}
					decryptText.push(alphabet[index - shiftNumber]);
				}
			}
		
			const stringDecryptText = decryptText.toString().replaceAll(',','');
			message.textContent = 'Zaszyfrowany tekst to:';
			result.textContent = stringDecryptText;
			input.value = '';
		}else{
			result.textContent = 'Wprowadź wartości do pól';
		}
	}
	
}

const increment = () => {
	if(shiftNumber < 25){
		shiftNumber++;
		shift.textContent = shiftNumber;	
	}
}

const decrement = () => {
	if(shiftNumber > 0){
		shiftNumber--;
		shift.textContent = shiftNumber;
	}
}


btn.addEventListener('click',encrypt);
btn.addEventListener('click',decrypt);
plus.addEventListener('click',increment);
minus.addEventListener('click',decrement);