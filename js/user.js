fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.querySelector("#table-body");

    data.forEach((item) => {
      const row = document.createElement("tr");
      const name = document.createElement("td");
      const email = document.createElement("td");
      const phone = document.createElement("td");
      const number = document.createElement("td")

      number.textContent = item.id;
      name.textContent = item.name;
      email.textContent = item.email;
      phone.textContent = item.phone;

      row.appendChild(number)
      row.appendChild(name);
      row.appendChild(email);
      row.appendChild(phone);

      tableBody.appendChild(row);
    });
  });
