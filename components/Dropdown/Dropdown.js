class Dropdown {
  constructor(element) {
    console.log(element); 
    // Assign this.element to the dropdown element
    this.element = element; 
    // this.element = this.element.querySelector(".dropdown"); 
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button')
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => { this.toggleContent() })


  }

  toggleContent() {
    console.log("BOOOOOOM")
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
 }

// let dropdowns = documents.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown)


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdown = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));