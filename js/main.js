let container = document.querySelector("#command");
container.classList.add("d-inline");
let data = {
  home: "Sostene-browser-Mac-pro: Sostene poto$",
  options: [
    {
      name: "help",
      details: "cv - list  all my previous work , social - list all social media ,skills- list all my skills,  github - list all public github repostories,  ".replace(
        /\,/g,
        "<br>"
      ),
    },
  ],
};
container.innerHTML = data.home;
setTimeout(
  function (data) {
    let span = document.createElement("span");
    // span.classList.add("type");
    span.innerHTML = " " + data;
    container.append(span);
  },
  3000,
  data.options[0].name
);
setTimeout(
  function (data) {
    let span = document.createElement("p");
    span.classList.add("data");
    span.innerHTML = data;
    container.parentElement.append(span);
    container.classList.remove("typing-cursor");
  },
  4000,
  data.options[0].details
);
