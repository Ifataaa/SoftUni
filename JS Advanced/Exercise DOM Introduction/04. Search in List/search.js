/*
function search() {
   let input = document.getElementById('searchText').textContent;
   let result = document.getElementById('result');
   let towns = Array.from(document.querySelectorAll('ul#towns>li'));

   let matches = 0;

   towns.forEach(el => {
      let town = el.textContent;

      if (input && town.indexOf(input) >= 0) {
         el.innerHTML = `<bold><u>${townName}</u></bold>`;
         matches++
      }
   });

   result.textContent = `${matches} matches found`;
}
*/

function search() {
   let input = document.getElementById('searchText').textContent;
   let result = document.getElementById('result');
   let towns = Array.from(document.querySelectorAll('ul#towns>li'));

   let matches = 0;

   towns.forEach(el => {
      let town = el.textContent;

      if (input && town.indexOf(input) >= 0) {
         el.innerHTML = `<bold><u>${townName}</u></bold>`;
         matches++
      }
   });

   result.textContent = `${matches} matches found`;
}

