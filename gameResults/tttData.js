//var myVar = setInterval(setData, 1000);

function setData(){
    let tttString = localStorage.getItem('tttData');
    let tttObj = JSON.parse(tttString);
    let classInt = 1;

    for(let i = 0; i < tttObj.length; i++){
        sessionNumber = document.createElement('h1');
        sessionNumber.textContent = i + 1;
        main.append(sessionNumber);

        resultDiv = document.createElement('div');
        resultDiv.setAttribute('class', 'container');
        resultDiv.setAttribute('id', i + 1);
        main.append(resultDiv);


        for(let q = 1; q < 10; q++){
            console.log(q)
            classString = 'nr' + classInt;
            cell = document.createElement('div');
            cell.textContent = tttObj[i][q];
            cell.setAttribute('class', classString);

            resultDiv.append(cell);
            
            classInt++;
        }
  
        line = document.createElement('hr');
        main.append(line);
        classInt = 1;
    }
}