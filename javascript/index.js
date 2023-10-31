// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    c
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
// ...

getInstruction("mashedPotatoes", 0, (ditto) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${ditto}</li>`;
  getInstruction("mashedPotatoes", 1, (ditto) =>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${ditto}</li>`;
    getInstruction("mashedPotatoes", 2, (ditto) =>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${ditto}</li>`;
      getInstruction("mashedPotatoes", 3, (ditto) =>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${ditto}</li>`;
        getInstruction("mashedPotatoes", 4, (ditto) =>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${ditto}</li>`;
            
        }, (error) => console.error(error))
      }, (error) => console.error(error))
    }, (error) => console.error(error))
  },(error) => console.error(error))
},(error) => console.error(error))


// Iteration 2 - using promises
// ...
//obtainInstruction(food, step)
obtainInstruction("steak",0)
.then((ditto)=>{
  document.querySelector("#steak").innerHTML += `<li>${ditto}</li>`;
  return obtainInstruction("steak",1)
})
.then((ditto)=>{
  document.querySelector("#steak").innerHTML += `<li>${ditto}</li>`;
  return obtainInstruction("steak",2)
})
.then((ditto)=>{
  document.querySelector("#steak").innerHTML += `<li>${ditto}</li>`;
  return obtainInstruction("steak",3)
})
.then((ditto)=>{
  document.querySelector("#steak").innerHTML += `<li>${ditto}</li>`;
  return obtainInstruction("steak",4)
})
.then((ditto)=>{
  document.querySelector("#steak").innerHTML += `<li>${ditto}</li>`;
  return obtainInstruction("steak",5)
})
.then((ditto)=>{
  document.querySelector("#steak").innerHTML += `<li>${ditto}</li>`;
  return obtainInstruction("steak",6)
})
.then((ditto)=>{
  document.querySelector("#steak").innerHTML += `<li>${ditto}</li>`;
  return obtainInstruction("steak",7)
})
.then((ditto)=>{
  document.querySelector("#steak").innerHTML += `<li>${ditto}</li>`;
})

.catch((error) => console.log("hey", error))
.finally (()=> console.log("the process has finished"))


// Iteration 3 using async/await
// ...
// obtainInstruction(food, step)
async function obtainBroccoli(){
  try{
    const step1 = await obtainInstruction("broccoli",0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("broccoli",1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("broccoli",2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("broccoli",3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("broccoli",4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("broccoli",5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    const step7 = await obtainInstruction("broccoli",6);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    let broccoliImgElement = document.querySelector("#broccoliImg");
    let imagenDelBroccolli = broccoliImgElement.innerHTML;
    imagenDelBroccolli = imagenDelBroccolli.replace(/.hidden/g, '')



    //no puedo hacer que aparezca la imagen.

/*     let broccoliImageElement = document.querySelector("#broccoliImg");
    broccoliImageElement.innerHTML.replace = `<img src="images/broccoli.jpg" id="broccoliImg"/>`
    console.log(broccoliImageElement); */

  }catch(error){
    console.log(error)
  }
}
obtainBroccoli()

// Bonus 2 - Promise all
// ...
/* let promise1 = obtainInstruction("brusselsSprouts",0)
let promise2 = obtainInstruction("brusselsSprouts",1)
let promise3 = obtainInstruction("brusselsSprouts",2)
let promise4 = obtainInstruction("brusselsSprouts",3)
let promise5 = obtainInstruction("brusselsSprouts",4)
let promise6 = obtainInstruction("brusselsSprouts",5)
let promise7 = obtainInstruction("brusselsSprouts",6)
let promise8 = obtainInstruction("brusselsSprouts",7) */

const stepsArray = [];

for (let i = 0; i <= 7; i++) {
  stepsArray.push(obtainInstruction("brusselsSprouts",i))
  
}



Promise.all(stepsArray)
.then((values) => {
  console.log(values)
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[0]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[1]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[2]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[3]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[4]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[5]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[6]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${values[7]}</li>`;

})

