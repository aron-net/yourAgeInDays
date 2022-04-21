function yourAgeInDays() {
    let birthYear = prompt("Which year were you born... Good Friend? ")
    let ageYear = (new Date().getFullYear() - birthYear) * 365;
    let textCreate = document.createElement('h2');
    let textAnswer = document.createTextNode('You are ' + ageYear + ' days old.');
    textCreate.setAttribute('id', 'textCreated');
    textCreate.append(textAnswer);
    document.getElementById('textResult').appendChild(textCreate);
    
}

function resetSite() {
    document.getElementById('textCreated').remove();
}
