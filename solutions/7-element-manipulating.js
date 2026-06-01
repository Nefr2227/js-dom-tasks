import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(document) {
  const toCamelCase = (str) => {
    return str.split('-').map((part, index) => 
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');
  };
  
  const elements = document.body.getElementsByTagName('*');
  
  for (const element of elements) {
    const classes = Array.from(element.classList);
    
    for (const oldClass of classes) {
      const newClass = toCamelCase(oldClass);
      if (oldClass !== newClass) {
        element.classList.replace(oldClass, newClass);
      }
    }
  }
}
// END