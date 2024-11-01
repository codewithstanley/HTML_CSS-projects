const url = 'https://api.adviceslip.com/advice';

const advice = document.querySelector('.advice');
const iconBtn = document.querySelector('.icon');


async function getAdvice() {
    const response = await fetch(url);
	const data = await response.json();
	
    advice.innerHTML = `<h2>Advice #${data.slip.id}</h2>
    <p class="advice"><q>${data.slip.advice}</q></p>`;
}

iconBtn.addEventListener('click', getAdvice);