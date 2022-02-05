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
  //adding all the necessary properties and functionalities of each object
  createEvents() {
    this.element.className = "other-events__box";
    this.element.innerHTML = `<h2 class="other-events__box__heading">${this.name}</h2>
          <p class="other-events__box__date">${this.date}</p>
          <button class="other-events__box__button">More</button>`;
    //giving a functionality to the more-button
    const buttonMore = this.element.querySelector("button");

    buttonMore.addEventListener("click", () => {
      //deleting the current featured event
      document.querySelector(".featured").innerHTML = "";
      //deleting the "selected" class from all the elements, that indicates the event is currently displayed
      //as a featured event
      const all = document.querySelectorAll(".other-events__box");
      all.forEach((element) => {
        element.classList.remove("selected");
      });
      //giving the class "selected" to this particular event who is the parrent of the more-button
      this.element.classList.add("selected");

      //creating a new object under the Feature class
      const newFeature = new Feature(
        this.id,
        this.name,
        this.date,
        this.description,
        this.image
      );
      //putting the event on the page as a featured one
      newFeature.placingFeatureIntoDom();
    });
  }
}
