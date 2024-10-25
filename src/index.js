function updateTime() {
  let lAElement = document.querySelector("#la");
  let lADateElement = lAElement.querySelector(".date");
  let lATimeElement = lAElement.querySelector(".time");
  let lATime = moment().tz("America/Los_Angeles");

  lADateElement.innerHTML = lATime.format("MMMM	Do YYYY");
  lATimeElement.innerHTML = lATime.format("h:mm:ss [<small>]A[</small>]");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydneyy");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
