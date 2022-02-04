const postingRegistration = async (
  id,
  name,
  surname,
  email,
  phoneNumber,
  age,
  comment
) => {
  const url =
    "https://test-api.codingbootcamp.cz/api/02605eae/events/EVENT_ID/registrations";
  const data = {
    id: id,
    name: name,
    surname: surname,
    email: email,
    phoneNumber: phoneNumber,
    age: age,
    comment: comment,
  };
  const post = await fetch(url, {
    method: "POST",
    body: JSON.strigify(data),
    headers: { "Content-Type": "application/json" },
  });

  const response = await post.json();
  console.log(response);
};
