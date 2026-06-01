// BEGIN
export default function prettify(document) {
  const divs = document.querySelectorAll('div');
  
  divs.forEach(div => {
    const childNodes = Array.from(div.childNodes);
    
    childNodes.forEach(node => {
      if (node instanceof Text) {
        const text = node.textContent;
        
        if (text.trim() !== '') {
          // Создаём новый параграф с текстом
          const p = document.createElement('p');
          p.textContent = text;
          
          node.replaceWith(p);
        }
      }
    })
  })
}
// END