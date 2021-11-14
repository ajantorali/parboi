function img(){
    var img = document.querySelector('#img');
}

// Select Field
var namet = document.querySelector('.name');
var skill = document.querySelector('.skill');
var school = document.querySelector('.school');
var grade = document.querySelector('.grade');
var btn = document.querySelector('.btn-add');
var dt = document.querySelector('.dt');


//Function
btn.addEventListener('click', function(){
    var newRow = document.createElement('tr');

    const newName = document.createElement('td');
    newName.innerHTML = namet.value;
    newRow.appendChild(newName);
    
    const newSkill = document.createElement('td');
    newSkill.innerHTML = skill.value;
    newRow.appendChild(newSkill);

    const newschool = document.createElement('td');
    newschool.innerHTML = school.value;
    newRow.appendChild(newschool);

    const newGrade = document.createElement('td');
    newGrade.innerHTML = grade.value;
    newRow.appendChild(newGrade);

    dt.appendChild(newRow);
    
})