var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // Toggles the "active" class on the button itself
    this.classList.toggle("active");
    
    // Finds the associated video container and toggles the "open" class
    var content = this.nextElementSibling;
    content.classList.toggle("open");
  });
}