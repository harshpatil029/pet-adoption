
var pets = [
  {
    name: "Buddy",
    age: 3,
    breed: "Labrador Retriever",
    image: "https://www.thesprucepets.com/thmb/9kt-VX_FY7bxJh6w4fqukRaiplU=/5121x3414/filters:fill(auto,1)/australian-cattle-dog-portrait-523096669-5873e59e5f9b584db35cdf58.jpg",
    description: "Buddy is a friendly and energetic dog who loves to play fetch."
  },
  {
    name: "Fluffy",
    age: 2,
    breed: "Persian",
    image: "https://i.pinimg.com/originals/78/b6/9f/78b69faffa5ba14fe96b0676322e145f.jpg",
    description: "Fluffy is a beautiful and cuddly cat who loves to be petted."
  },
  {
    name: "Max",
    age: 1,
    breed: "Golden Retriever",
    image: "https://tse3.mm.bing.net/th?id=OIP.J6-_Yj-K6RymGrQ70Yy_jgHaE8&pid=Api&P=0&h=180",
    description: "Max is a playful and affectionate dog who enjoys going for walks."
  }
];

function displayPets() {
  var tableBody = document.getElementById("pet-table-body");
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    var row = `<tr>
      <td>${pet.name}</td>
      <td>${pet.age}</td>
      <td>${pet.breed}</td>
      <td><img src="${pet.image}" alt="${pet.name}" style="max-width: 100px;"></td>
      <td>${pet.description}</td>
    </tr>`;
    tableBody.innerHTML += row;
  }
}

function addNewPet() {
  var nameInput = document.getElementById("new-pet-name");
  var ageInput = document.getElementById("new-pet-age");
  var breedInput = document.getElementById("new-pet-breed");
  var imageInput = document.getElementById("new-pet-image");
  var descriptionInput = document.getElementById("new-pet-description");

  var newPet = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    breed: breedInput.value,
    image: URL.createObjectURL(imageInput.files[0]), 
    description: descriptionInput.value
  };
  

  pets.push(newPet);
  nameInput.value = "";
  ageInput.value = "";
  breedInput.value = "";
  imageInput.value = "";
  descriptionInput.value = "";
  
 
  var tableBody = document.getElementById("pet-table-body");
  var newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${newPet.name}</td>
                      <td>${newPet.age}</td>
                      <td>${newPet.breed}</td>
                      <td><img src="${newPet.image}" alt="${newPet.name}" style="max-width: 100px;"></td>
                      <td>${newPet.description}</td>`;
  tableBody.appendChild(newRow);
}

function filterPetsByBreed() {
  
}


window.onload = displayPets;


var breedFilterInput = document.getElementById("breed-filter");
breedFilterInput.addEventListener("keyup", filterPetsByBreed);

var addPetForm = document.getElementById("add-pet-form");
addPetForm.addEventListener("submit", function(event) {
  event.preventDefault();
  addNewPet();
});