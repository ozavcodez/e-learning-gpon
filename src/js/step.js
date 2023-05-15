const previousButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const submitButton = document.querySelector('#submit')
const tabTargets = document.querySelectorAll('.tab')
const tabPanels = document.querySelectorAll('.tabpanel')
let currentStep = 0



  function updateStatusDisplay() {
    // If on the last step, hide the next button and show submit 
    if (currentStep === tabTargets.length - 1) {
      
      nextButton.classList.add('hidden')
      previousButton.classList.remove('hidden')
      submitButton.classList.remove('hidden')
    //   validateEntry()
      // If it's the first step, hide the previous button 
    } else 
    if (currentStep == 0) {
      progressBar.style.width = '25%'
        nextButton.innerHTML = "continue"

      nextButton.classList.remove('hidden')
      previousButton.classList.add('hidden')
      submitButton.classList.add('hidden')
      // In all other instances, display both buttons 
    } else {
        nextButton.innerHTML = "next"
      nextButton.classList.remove('hidden')
      previousButton.classList.remove('hidden')
      submitButton.classList.add('hidden')
    }
  }


 var progressBar = document.getElementById("pb")

 var MAX_QUESTIONS = 3
// Next: Change UI relative to the current step and account for button permissions 
nextButton.addEventListener('click', (event) => {
    event.preventDefault()
    // Hide current tab 
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')
    progressBar.style.width = 0
    // Show next tab 
    tabPanels[currentStep + 1].classList.remove('hidden')
    tabTargets[currentStep + 1].classList.add('active')
    currentStep += 1
    progressBar.style.width = `${(currentStep / MAX_QUESTIONS) * 100}%`
    // validateEntry()
    updateStatusDisplay()
    

  })

  previousButton.addEventListener('click', (event) => {
    event.preventDefault()
    // Hide current tab 
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')
    // Show the previous tab 
    tabPanels[currentStep - 1].classList.remove('hidden')
    tabTargets[currentStep - 1].classList.add('active')
    currentStep -= 1
    progressBar.style.width = `${(currentStep / MAX_QUESTIONS) * 100}%`
    nextButton.removeAttribute('disabled')
    updateStatusDisplay()
  })