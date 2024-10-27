function updateTime() {
  let lAElement = document.querySelector("#la");
  if (lAElement) {
    let lADateElement = lAElement.querySelector(".date");
    let lATimeElement = lAElement.querySelector(".time");
    let lATime = moment().tz("America/Los_Angeles");

    lADateElement.innerHTML = lATime.format("MMMM Do YYYY");
    lATimeElement.innerHTML = lATime.format("h:mm:ss [<small>]A[</small>]");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  //split takes a string and makes an array out of it
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city"
        <div>
          <h2>${cityTimeZone}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small> AM </small></div>
      </div>
  `;
  //long string in order to replace the HTML Code
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
