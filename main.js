const chk = document.getElementById('chk');
const circle = document.querySelector('.circle')

chk.addEventListener('change', () => {
	circle.classList.toggle('ative')
	document.body.classList.toggle('dark');
});
