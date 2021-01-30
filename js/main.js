(function () {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "https://api.github.com/users/sos10e", true);
  xhttp.send();
})();

let mainData = {
  home: "Sostene-browser-Mac-pro: Sostene poto$",
  options: [
    {
      name: "help",
      details: "cv - list  all my previous work , social - list all social media ,skills- list all my skills,  github - list all public github repostories,  ".replace(
        /\,/g,
        "<br>"
      ),
    },
    {
      name: "skills",
      details: `<li><b>HMTL:</b> Advanced
      <b>Javascript:</b> Advanced
      <b>CSS:</b> Advanced
      <b>NODEJS:</b> Advanced
      <b> Web design:</b> Intermediate
      <b>API:</b> Advanced
      <b> C++:</b> Intermediate
      <b>JAVA:</b> Intermidiate
      <b>Python</b> Intermediate<ol>`.replace(/(\n)/g, "</li><li>"),
    },
  ],
};
let container = document.querySelector("#command");
container.classList.add("typing-cursor");
container.classList.add("d-inline");
container.innerHTML = mainData.home;
let parent = container.parentElement;
let counter = 0;
parent.appendChild(container);
setTimeout(
  function (data) {
    let span = document.createElement("span");
    span.innerHTML = " " + data;
    container.append(span);
  },
  3000,
  mainData.options[counter].name
);
setTimeout(
  function (data) {
    let span = document.createElement("p");
    span.classList.add("data");
    span.innerHTML = data;
    container.parentElement.append(span);
    let cloneElement = container.cloneNode(true);
    cloneElement.innerHTML = mainData.home;
    container.parentElement.append(cloneElement);
    container.classList.remove("typing-cursor");
    counter++;
  },
  4000,
  mainData.options[counter].details
);
setInterval(function () {
  let container = document.querySelector("#command");
  container.classList.add("typing-cursor");
  container.classList.add("d-inline");
  container.innerHTML = mainData.home;
  let parent = container.parentElement;
  parent.innerHTML = "";
  parent.appendChild(container);
  setTimeout(
    function (data) {
      let span = document.createElement("span");
      span.innerHTML = " " + data;
      container.append(span);
    },
    3000,
    mainData.options[counter].name
  );
  setTimeout(
    function (data) {
      let span = document.createElement("p");
      span.classList.add("data");
      span.innerHTML = data;
      container.parentElement.append(span);
      let cloneElement = container.cloneNode(true);
      container.classList.remove("typing-cursor");
      cloneElement.innerHTML = mainData.home;
      container.parentElement.append(cloneElement);
      counter = counter + 1 >= mainData.options.length ? 1 : counter + 1;
    },
    4000,
    mainData.options[counter].details
  );
}, 7000);
