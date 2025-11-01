// Your code here.
// Simple interactivity: highlight top-ranked team when page loads
window.addEventListener('DOMContentLoaded', () => {
  const topRow = document.querySelector('#statsTable tbody tr:first-child');
  topRow.style.backgroundColor = '#d1ffd6';
  topRow.style.fontWeight = 'bold';
});
