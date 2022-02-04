class Feature {
  constructor(id, name, date, description, image) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
    this.image = image;
    this.element = document.createElement("div");
  }

  createFeature() {
    this.className = "featured-event";
    this.element.innerHTML = `<img
          class="featured-event__image"
          src="http://www.progetto.cz/wp-content/uploads/2015/10/33-Masopust.jpg"
          alt="event"
        />
        <div class="featured-event__info">
          <h2 class="featured-event__info__heading">
            PRAGUE CARNIVAL (MASOPUST) - FESTIVAL & PARADE
          </h2>
          <p class="featured-event__info__date">2022-02-26</p>
          <p class="featured-event__info__description">
            Prague Carnival (Masopust) traces its roots back to medieval times,
            and is a celebration of human joy and gregariousness. Set hours for
            the various events are not generally adhered to, everything is far
            too free spirited for that! Just spend time in the Lesser Town and
            if you see colourfully dressed people and hear loud music, you know
            the carnival has arrived. The Masks Parade is the most celebrated
            element of Prague Carnival. It starts at U Černého vola pub at
            Loretanske namesti near Prague Castle, winds down through the Lesser
            Town, and should arrive at Kampa Island around 3-4pm, where a party
            is held with live music and festival food and drinks on sale.
          </p>
        </div>
        <button class="featured-event__button">Register</button>`;
  }
}
