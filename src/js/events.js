import { Feature } from "./feature";

//creating class for other events
export class EventPrague {
  constructor(id, name, date, description, image) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
    this.image = image;
    this.element = document.createElement("div");
    this.createEvents();
  }

  createEvents() {
    this.element.className = "other-events__box";
    this.element.innerHTML = `<h2 class="other-events__box__heading">${this.name}</h2>
          <p class="other-events__box__date">${this.date}</p>
          <button class="other-events__box__button">More</button>`;

    const buttonMore = this.element.querySelector("button");

    buttonMore.addEventListener("click", () => {
      document.querySelector(".featured").innerHTML = "";
      this.element.classList.toggle("selected");
      const newFeature = new Feature(
        this.id,
        this.name,
        this.date,
        this.description,
        this.image
      );
      newFeature.placingFeatureIntoDom();
    });
  }
}
