'use strict';

function formatJSON() {
  var input = document.getElementById('input').value;

  try {
    var formattedJSON = JSON.stringify(JSON.parse(input), null, 2);
    document.getElementById('output').value = formattedJSON;
  } catch (error) {
    console.error(error);
    document.getElementById('output').value = 'Invalid JSON format';
  }
}

function clearInput() {
  document.getElementById('input').value = '';
  document.getElementById('output').value = '';
}
