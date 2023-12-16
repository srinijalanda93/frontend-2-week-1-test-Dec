const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "Jungkook", age: 21, profession: "admin" },
  { name: "Namjoon", age: 29, profession: "CEO" },
  { name: "Kim srinija", age: 21, profession: "developer" },
];
//console.log(data);
// 1. Print Developers
function printDeveloper() {
  for (const obj of data) {
    //using for of () it take each obj
    if (obj.profession === "developer") {
      //so obj.keyName==="developer"
      console.log(
        `Name:${obj.name} Age:${obj.age} Profession:${obj.profession}`
      ); //using string literal
    }
  }
}

// 2. Add Data
function addData() {
  const Name = window.prompt("Enter the Name:");
  const Age = window.prompt("Enter the Age:");
  const position = window.prompt("Enter the profession:");
  //check the data is give or not!
  if (Name && Age && position) {
    const dataobj = { name: Name, age: parseInt(Age), profession: position }; //age is string convert to parsen
    data.push(dataobj); //push in the data array
    console.log("data added:", dataobj);
  } else {
    alert("Invalid input.check clearly!!.");
  }
}
// const addButton = document.querySelector("button");
// addButton.addEventListener("click", addData);

// 3. Remove Admins
function removeAdmin() {
  for (let i = 0; i < data.length; i++) {
    let ObjRemove = data[i]; //taking the object from the array
    if (ObjRemove.profession === "admin") {
      //checking the obj.profession==="admin"
      let removeAdmin = data.splice(i, 1); //splice(index,count,adding element) as we are removing 1 element count=1
      console.log("the Remove admin details :", removeAdmin);
    } else {
      //console.log("the Remove admin details :",removeAdmin);
      alert(
        "oops! sorry bro May be there is details regading the profession:admin"
      );
    }
  }
}
// const removeButton = document.getElementById("removeAdminButton");
// removeButton.removeEventListener("click", removeAdmin);

// 4. Concatenate Array
//   function concatenateArray() {
//     const dummyArray=[
//         { name: "dummy1", age: 24, profession: "developer" },
//         { name: "dummy2", age: 27, profession: "admin" },
//     ]
//     const concateArray=data.concat(dummyArray);
//     console.log("Concatenated Array:",concateArray);
//   }

function concatenateArray() {
  let dummyArray = [];
  for (let i = 1; i <= 2; i++) {
    //take two times USING prompt function taking all the details
    const Name1 = window.prompt("Enter the Name:");
    const Age1 = window.prompt("Enter the Age:");
    const position1 = window.prompt("Enter the profession:");
    const objectDummy = {
      name: Name1,
      age: parseInt(Age1),
      profession: position1,
    };
    dummyArray.push(objectDummy);
  }
  const concateArray = data.concat(dummyArray);
  console.log("Concatenated Array:", concateArray);
}
// const ConcateButton = document.getElementById("concateButton");
// ConcateButton.addEventListener("click", concatenateArray);

// 5. Average Age
function averageAge() {
  //frist extract the age in the array
  let AgeArray = [];
  for (const obj of data) {
    AgeArray.push(obj.age); //pushing the ages in one array
  } //finally we get the array=>AgeArray
  let cb = (prev, curr, index) => {
    return prev + curr; //do the sum of the array
  };
  let sum = AgeArray.reduce(cb, 0); //here we will extract the array
  let avg = sum / AgeArray.length;
  console.log("the average age of all people in the array:", avg);
}

// 6. Age Check
function checkAgeAbove25() {
  //frist extract the age in the array
  let AgeArray = [];
  for (const obj of data) {
    AgeArray.push(obj.age); //pushing the ages in one array
  } //finally we get the array=>AgeArray
  let yAge = false; //consider the boolean value that no one there atleast 25.
  for (let x of AgeArray) {
    if (x > 25) {
      yAge = true; //turn ture if atleast one preson age>25
    }
  }
  if (yAge) {
    console.log(" yes ! At least one person in the array is older than 25.");
  } else {
    console.log("No person in the array is older than 25.");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProfessionsArray = [];

  for (const obj of data) {
    let isUnique = true;

    for (const pro of uniqueProfessionsArray) {
      //iterate the array
      if (obj.profession === pro) {
        //if it is present come out of the array
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      uniqueProfessionsArray.push(obj.profession);
    }
  }

  // Log the unique professions
  console.log("Distinct Professions:", uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => {
    if (a.age > b.age) {
      return 1; // a should come after b (a.age - b.age=positive)
    } else if (a.age < b.age) {
      return -1; // a should come before b  (a.age - b.age = neagtive)
    } else {
      return 0; // ages are equal, order doesn't matter (a.age - b.age===0)
    }
  });

  console.log("Sorted Array by Age (Ascending):", data);
}

// 9. Update Profession => { name: "john", age: 24, profession: "developer" },
function updateJohnsProfession() {
  // Adjust 'john's profession to 'manager'
  for (const obj of data) {
    if (obj.name === "john") {
      obj.profession = "manager";
    }
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  //Calculate and print the total number of developers and admins in the array.
 // let count=0;
  let cb=(prev,ele,index) =>{ 
    if(data[index].profession==='developer' || data[index].profession==='admin' ){
      return prev+1;
    }else {
      return prev;
    }
  }
  let count = data.reduce(cb, 0);
  console.log("The total number of developers and admins in the array:", count);
}
