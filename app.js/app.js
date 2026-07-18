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

const employSalary=[75000,25000,450000,55000];
let newSalaryArray=employSalary.map(salary=>salary*2);
console.log(newSalaryArray);