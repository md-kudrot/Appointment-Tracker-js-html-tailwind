const addForm = document.querySelector("#add-form")
const form = document.querySelector("#form")
const CartContainer = document.querySelector("#Cart-Container")
const newCart = document.querySelector("#newCart")
const formClose = document.querySelector("#form-close")

// input 
const appointmentForm = document.querySelector("#appointmentForm")
const input = document.querySelectorAll("input,textarea,select")
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");
const purpose = document.getElementById("purpose");
const details = document.getElementById("details");




function toggleform(show) {
  form.style.display = show ? "block" : "none"
  CartContainer.classList.toggle("opacity-0", show) //show true hole opacity add hbe nahole hbe na  
}

addForm.addEventListener("click", () => {
  toggleform(true)
})

formClose.addEventListener("click", () => {
  toggleform(false)
})



// এখন form-এর submit ইভেন্ট ধরো
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // check all inputs
  for (let inputs of input) {
    if (inputs.value.trim() === "") {
      alert(`Please fill this field`);
      inputs.focus();
      return; // stop here, don't submit
    }
  }


  alert(`Form submitted successfully ✅`);
  randerUi();
  appointmentForm.reset();
  toggleform(false);
});


function randerUi() {


  const div2 = document.createElement("div");
  div2.className = "z-5  mt-[-4rem] absolute  p-6 bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl shadow text-white";

  const h2 = document.createElement("h2")
  h2.className = "text-3xl font-bold mb-6 text-center"
  h2.textContent = fullName.value;

  const div3 = document.createElement("div")
  div3.className = "space-y-4";

  const div4 = document.createElement("div");
  div4.className = "flex flex-col gap-32 sm:flex-row sm:items-center justify-between bg-white/20 p-4 rounded-xl  shadow-md";

  const div5 = document.createElement("div")
  div5.className = "text-sm space-y-1";

  const p1 = document.createElement("p");
  p1.textContent = email.value;

  const p2 = document.createElement("p");
  p2.textContent = phone.value;

  const p3 = document.createElement("p");
  p3.textContent = `Date: ${date.value} | Time: ${time.value}`

  const p4 = document.createElement("p");
  p4.textContent = `Purpose: ${purpose.value}`

  const p5 = document.createElement("p");
  p5.className = "text-gray-200 italic";
  p5.textContent =`More details: ${details.value}`

  const button = document.createElement("button")
  button.className = "mt-4 sm:mt-0 text-sm bg-white text-pink-600 font-semibold px-4 py-2 rounded-lg hover:bg-pink-100 transition duration-300 cursor-pointer"
  button.textContent = "Remove"

  div5.append(p1,p2,p3,p4,p5)
  div4.append(div5,button)
  div3.append(div4)
  div2.append(h2,div3)
  // div1.append(div2) 

  newCart.appendChild(div2)

}





