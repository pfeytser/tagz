function countTags() {
    var inputText = document.getElementById('tags').value;

    // var cleanedText = inputText.replace(/['"]+/g, '');
    // console.log(cleanedText);

    var array = inputText.replace(/['"]|\s/g, '').split(',');

    var tagsCount = array.length;

    document.getElementById("total-tags").innerHTML = tagsCount;

    array.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] != current) {
            if (cnt > 0) {

              var table = document.getElementById("tableBody");

              var row = table.insertRow(-1);

              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);

              cell1.innerHTML = current;
              cell2.innerHTML = cnt;

            }
            current = array[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
}
