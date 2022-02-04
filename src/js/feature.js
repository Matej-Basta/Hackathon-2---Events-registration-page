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
    });
  }

  placingFeatureIntoDom() {
    document.querySelector(".featured").appendChild(this.element);
  }
}
