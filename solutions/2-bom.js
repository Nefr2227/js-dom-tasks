// BEGIN
export default function solution(url) {
  window.location.href = url;
  
  return `${navigator.userAgent} ${url}`;
}
// END