var students = [
    {
        lname : 'Hinojosa',
        name : 'Obed',
        age : 22,
        birthday : {
            year : 1999,
            month : 'September',
            day : 9
        },
        Career : 'IDYGS'
    }
];
var table  = document.getElementsByTagName('table')[0];
for (var i = 0; i < students.length; i++){
    var temp1 = document.getElementById('tbodytemp1').content.cloneNode(true);
    var tdnumber = temp1.querySelector("span[name='tbodynumber']");
    var tdname = temp1.querySelector("span[name='tbodyname']");
    var tdage = temp1.querySelector("span[name='tbodyage']");
    var tdcareer = temp1.querySelector("span[name='tbodycareer']");

    tdnumber.innerText = i + 1;
    tdname.innerText = students[i].lname + " " + students[i].name;
    tdage.innerText = students[i].age;
    tdcareer.innerText = students[i].Career;

    table.append(temp1);
}