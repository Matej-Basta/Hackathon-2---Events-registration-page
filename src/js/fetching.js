import { Feature } from "./feature";
import { EventPrague } from "./events";

//function that gets the data from the API and creates elements
export const gettingData = async () => {
  try {
    //fetching data
    const response = await fetch(
      "https://test-api.codingbootcamp.cz/api/02605eae/events"
    );
    //converitng them into an array
    const responseData = await response.json();

    console.log(responseData);
    //selecting the featured event
    const featured = responseData[0];
    //generating the featured event on the page by creating an object under the Feature class
    const event = new Feature(
      featured.id,
      featured.name,
      featured.date,
      featured.description,
      featured.image_url
    );
    //appending the created object
    document.querySelector(".featured").appendChild(event.element);

    //generating the small events below the featured event
    responseData.forEach((element) => {
      const eventSmall = new EventPrague(
        element.id,
        element.name,
        element.date,
        element.description,
        element.image_url
      );
      //appendign each small event onto a page
      document.querySelector(".other-events").appendChild(eventSmall.element);
    });
  } catch (e) {
    //catching a potential error
    console.log(`En error occured: ${e}`);
  } finally {
  }
};
