const render = (target, endpoint) => {
   fetch(endpoint)
      .then(response => response.text())
      .then(data => {
         console.log(data);
         $(target).html(data);
      });
}

$(document).ready(() => {
   render(".main__content", "/home");

   $(".menu__button").click(() => {
      render(".main__content", "/menus");
   });

   $(".home__button").click(() => {
      render(".main__content", "/home");
   });
});