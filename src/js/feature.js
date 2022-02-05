import { postingRegistration } from "./postingRegistration";

//creating a class for the featured event
export class Feature {
  constructor(id, name, date, description, image) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
    this.image = image;
    this.element = document.createElement("div");
    this.editFeature();
  }

  editFeature() {
    //giving the "div" element all the appropriate attributes, such as class name and innerHTML
    this.element.className = "featured-event";
    this.element.innerHTML = `<img
          class="featured-event__image"
          src="${this.image}"
          alt="${this.name}"
        />
        <div class="featured-event__info">
          <h2 class="featured-event__info__heading">
            ${this.name}
          </h2>
          <p class="featured-event__info__date">${this.date}</p>
          <p class="featured-event__info__description">
            ${this.description}
          </p>
        </div>
        <button class="featured-event__button">Register</button>`;

    //adding a functionality to the button
    const button = this.element.querySelector(".featured-event__button");
    button.addEventListener("click", () => {
      //testing, whether the button was selected correctly
      console.log("works");
      //creating a modal window - first, creates "div" and then adds all the appropriate attributes
      const modal = document.createElement("div");
      modal.className = "form-container";
      modal.innerHTML = `<div class="center"><div class="nameDiv">
        <label for="name">Name</label>
        <input id="name" class="name" type="text">
        <p class="nameText"></p>
      </div>
      <div class="surnameDiv">
        <label for="surname">Surname</label>
        <input id="surname" class="surname" type="text" />
        <p class="surnameText"></p>
      </div>
      <div class="emailDiv">
        <label for="email">Email</label
        ><input id="id" class="email" type="email" />
        <p class="emailText"></p>
      </div>
      <div>
        <label for="phone">Phone</label
        ><input id="phone" class="number" type="number" />
      </div>
      <div>
        <label for="age">"I'm old enough to participate" </label>
 
        <input type="checkbox" class="trial" value="older" id="age" name="age"/>
        <input type='hidden' class="age" value='younger' name='age'>
      </div>
      <div>
        <label for="comments">Comments</label>
        <input class="comment" id="comments" type="textarea" />
      </div>
      <button class="button-form">Submit</button>
      <button class="button-close">Close</button></div>`;

      //adding functionality to the close button
      const closeButton = modal.querySelector(".button-close");
      closeButton.addEventListener("click", () => {
        document.body.removeChild(modal);
      });

      //ensuring that the checkbox sends either older or younger, if the user
      //checks it, it gets a new class name and thus it will be selected by the JS to provide value
      const checkbox = modal.querySelector(".trial");
      checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("age");
      });

      //accessing the input fields to create a validation check
      const name = modal.querySelector(".nameText");
      const surname = modal.querySelector(".surnameText");
      const email = modal.querySelector(".emailText");

      //adding a functionality to the submit button -> firstly checks the data and then sends them
      const submitButton = modal.querySelector(".button-form");
      submitButton.addEventListener("click", () => {
        //checks, whether the name field is not empty
        if (modal.querySelector(".name").value == "") {
          name.innerHTML = "Name is required";
          //checks, whether the surname field is not empty
        } else if (modal.querySelector(".surname").value == "") {
          name.innerHTML = "";
          surname.innerHTML = "Surname is required";
          //checks, whether the email field is not empty and it contains both @ and .
        } else if (
          modal.querySelector(".email").value == "" ||
          !modal.querySelector(".email").value.includes("@") ||
          !modal.querySelector(".email").value.includes(".")
        ) {
          //deleting the warning text
          surname.innerHTML = "";
          email.innerHTML =
            "Email is required in a proper format - xxxx@xxx.xxx";
        } else {
          email.innerHTML = "";
          //function that posts data to the API
          postingRegistration(
            this.id,
            modal.querySelector(".name").value,
            modal.querySelector(".surname").value,
            modal.querySelector(".email").value,
            modal.querySelector(".number").value,
            modal.querySelector(".age").value,
            modal.querySelector(".comment").value
          );
          //it also removes the subtmit button and lets the user know that the registration was successful
          submitButton.parentNode.removeChild(submitButton);
          const paragraph = document.createElement("p");

          paragraph.innerHTML = "Registration successful.";
          document.querySelector(".center").appendChild(paragraph);
        }
      });
      //appending the modal window to the body
      document.body.appendChild(modal);
    });
  }
  //function that appends the featured element on the page, however I did not use it, because I forgot :D
  placingFeatureIntoDom() {
    document.querySelector(".featured").appendChild(this.element);
  }
}
