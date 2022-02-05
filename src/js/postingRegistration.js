//creating a function that posts the data to the API

export const postingRegistration = async (
  id,
  name,
  surname,
  email,
  phoneNumber,
  age,
  comment
) => {
  //link where to send the data
  const url = `https://test-api.codingbootcamp.cz/api/02605eae/events/${id}/registrations`;
  //the data
  const data = {
    id: id,
    name: name,
    surname: surname,
    email: email,
    phoneNumber: phoneNumber,
    age: age,
    comment: comment,
  };

  try {
    //trying to post them
    const post = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    //converting the response into JS  and console.log whether the post was successful
    const response = await post.json();
    console.log(response);
  } catch (e) {
    //catching the potential error
    console.log(`There was an error: ${e}`);
  } finally {
  }
};
