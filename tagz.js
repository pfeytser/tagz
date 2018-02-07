function inputLogic() {
    var inputText = document.getElementById('inputText').value;

    var array = inputText.split(',');

    console.log(array);

    array.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i <= array.length; i++) {
        if (array[i] != current) {
            if (cnt > 0) {

                var table = document.getElementById("myTBODY");

                var row = table.insertRow(-1);

                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                cell1.innerHTML = current;
                cell2.innerHTML = parseInt(cnt);

            }
            current = array[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
}
