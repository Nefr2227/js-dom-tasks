export default (document) => {
  // BEGIN
  const content = document.querySelector('.content');
  
  const title = content.querySelector('h1').textContent.trim();
  
  const description = content.querySelector('.description').textContent.trim();
  
  const articleBlocks = content.querySelectorAll('.links > div');
  
  const items = Array.from(articleBlocks).map(block => {
    const titleElement = block.querySelector('h2 a');
    const descriptionElement = block.querySelector('p');
    
    return {
      title: titleElement.textContent.trim(),
      description: descriptionElement.textContent.trim()
    };
  })
  
  return {
    title,
    description,
    items
  }
  // END
};
