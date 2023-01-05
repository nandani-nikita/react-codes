export const checkTime = () => {
  var name = document.getElementById("name").value;
  var div = document.getElementById("personType");
  div.innerText = "";

  const time = document.getElementById("bTime").value;
  const hrs = time.slice(0, 2);

  const newDiv = document.createElement("div");
  newDiv.className = "timeDiv";
  newDiv.innerText = "";

  if (hrs >= 4 && hrs < 10) {
    newDiv.append(`Hi ${name}! You are an Early Bird.`);
    newDiv.setAttribute("id", "blueTxt");
  } else if (hrs >= 10 && hrs < 17) {
    newDiv.append(`Hi ${name}! You are a Day Person.`);
    newDiv.setAttribute("id", "redTxt");
  } else {
    newDiv.append(`Hi ${name}! You are a Night Owl.`);
    newDiv.setAttribute("id", "greenTxt");
  }

  div.appendChild(newDiv);
};
