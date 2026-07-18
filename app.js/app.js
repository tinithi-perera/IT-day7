// const customerList=[];
// customerList.push(1);
// customerList.push(2);
// customerList.push(3);
// customerList.push(4);

// let revAr=customerList.reverse();

// console.log(revAr);

// const products = [
//     { name: "bun", inStock: true },
//     { name: "car", inStock: false },
//     { name: "bat", inStock: true },
//     { name: "van", inStock: false }

// ];

// let inStockItems = products.filter(
//     function (product){
//         return productFilter(product)

//     }
// )


// function productFilter(product) {
//     return product.inStock == true;
// }
// console.log(inStockItems);


//step 1
// function getSum(num1,num2){
//     return num1+num2
// }

// // step 2
// let getSum= function(num1,num2){
//     return num1+num2;
// }

//  console.log(getSum(10,20));

//step 3
// let getSum=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(getSum(10,20));


// Step 04 

// let sample = txtValue =>{
//     return txtValue;
// }

//  console.log(sample("Hi saman"));

// Step 05 

// let getSum = (num1, num2) => num1+num2;
//  console.log(getSum(10,20));

// Step 06 

// let sample = txtValue => txtValue;
// console.log(sample("Hi Tinna"));

// const productsList = [
//     { name: "bun", inStock: true },
//     { name: "car", inStock: false },
//     { name: "bat", inStock: true },
//     { name: "van", inStock: false },
// ];



// // for(product of productsList){
// //     console.log(product);
// // }


// productsList.forEach(product => console.log(product));

// const letterList=["B","A","D","c"];
// let sortAr=letterList.toSorted();
// console.log(sortAr);

// const employSalary=[75000,25000,450000,55000];
// let newSalaryArray=employSalary.map(salary=>salary*2);
// console.log(newSalaryArray);

// const studentList=[
//     {id:"001",name:"samn"},
//     {id:"002",name:"lavam"},
//     {id:"003",name:"savin"},
//     {id:"004",name:"kevin"},
// ];
 
// let student =studentList.find(student=>student.id==="003");
// console.log(student);

//json java script object  motation
fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => {
    console.log(data);

    let tblTodoList = document.getElementById("tblTodoList");

    let body = ""

    data.forEach(element => {
        body += `
                <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.userId}</td>
            <td>${element.completed}</td>
        </tr>
        `
    });

    tblTodoList.innerHTML = body;

})