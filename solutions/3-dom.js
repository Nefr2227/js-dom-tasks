// BEGIN
const bodyContent = document.body.innerHTML;

const lines = bodyContent.split('\n')
  .map(line => line.trim()) // Убираем пробелы и переводы строк по краям
  .filter(line => line !== ''); // Убираем пустые строки

const wrappedContent = lines.map(line => `<p>${line}</p>`).join('\n');

document.body.innerHTML = wrappedContent;
// END