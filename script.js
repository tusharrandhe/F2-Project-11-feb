/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(value)
  {
    if(value.marks>50)
    {console.log(value.marks);}
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(value)
  {
    if(value.marks>50)
    {
      console.log(value.marks);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr[3]);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.splice(2,2);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  arr.push({ id: 3, name: "Wick", age: "22", marks: 82 });
  arr.push({ id: 4, name: "Alan", age: "28", marks: 88 });
  arr.push({ id: 5, name: "Sanders", age: "39", marks: 65 });
  console.log(arr);
}
