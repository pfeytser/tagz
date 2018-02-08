function countTags() {
    var inputText = document.getElementById('tags').value;

    // var cleanedText = inputText.replace(/['"]+/g, '');
    // console.log(cleanedText);

    var array = inputText.replace(/"/g, ',').split(',');

    var trimmedArray =  function (array) {
      for (i = 0; i < array.length; i++) {
        trimmedArray[i] = array[i].trim();
      }
    }

    console.log(array);

    var tagsCount = array.length;

    document.getElementById("total-tags").innerHTML = tagsCount;

    array.sort();

    var deduped = array.reduce( function (result, item) {
      var lastItem = result[result.length - 1] || {};

      if (lastItem.text && lastItem.text === item) {
        lastItem.count++;
      } else {
        result.push({
          text: item,
          count: 1
        });
      }
      return result;
    }, [])

    for (var i = 0; i <= deduped.length; i++) {

      var itemCount = deduped[i].count;

      if (itemCount > 10) {
        var table = document.getElementById("tableBody");

        var row = table.insertRow(-1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = deduped[i].text;
        cell2.innerHTML = itemCount;
      }
    }
}
