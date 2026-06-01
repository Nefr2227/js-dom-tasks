// BEGIN
export default function extractData(rootElement) {
  const paragraphs = [];
  
  function traverse(element) {
    if (element.tagName === 'P') {
      paragraphs.push(element.textContent.trim());
    }
    
    for (const child of element.children) {
      traverse(child);
    }
  }
  
  traverse(rootElement);
  
  return paragraphs;
}
// END