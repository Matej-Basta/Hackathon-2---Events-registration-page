import { postingRegistration } from "./postingRegistration";

//creating a class for featured event
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
      console.log("works");
      const modal = document.createElement("div");
      modal.className = "form-container";
      modal.innerHTML = `<div class="center"><div>
        <label for="name">Name</label>
        <input id="name" class="name" type="text"/>
      </div>
      <div>
        <label for="surname">Surname</label>
        <input id="surname" class="surname" type="text" />
      </div>
      <div>
        <label for="email">Email</label
        ><input id="id" class="email" type="email" />
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

      const closeButton = modal.querySelector(".button-close");
      closeButton.addEventListener("click", () => {
        document.body.removeChild(modal);
      });

      const checkbox = modal.querySelector(".trial");
      checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("age");
      });

      const submitButton = modal.querySelector(".button-form");
      submitButton.addEventListener("click", () => {
        postingRegistration(
          this.id,
          modal.querySelector(".name").value,
          modal.querySelector(".surname").value,
          modal.querySelector(".email").value,
          modal.querySelector(".number").value,
          modal.querySelector(".age").value,
          modal.querySelector(".comment").value
        );

        submitButton.parentNode.removeChild(submitButton);
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "Registration successful.";
        document.querySelector(".center").appendChild(paragraph);
      });

      document.body.appendChild(modal);
    });
  }

  placingFeatureIntoDom() {
    document.querySelector(".featured").appendChild(this.element);
  }
}
