const usageMenu = document.getElementById('useageMenu');
const usageContent = document.querySelector('.useage');
const responsiveNavbar = document.querySelector('.responsiveNavbar');
const closeIcon = document.getElementById('closeIcon');
const mobilemeanu = document.getElementById("mobile-menu");
const questions = document.querySelectorAll('.question');
const dropdown = document.querySelector('.dropdown');

questions.forEach(function(question) {
  question.addEventListener('click', function() {
    const answerId = this.getAttribute('data-answer-id');
    const answer = document.getElementById(answerId);

    if (answer) {
      answer.classList.toggle('answerdisplaynone');
    }
  });
});

mobilemeanu.addEventListener('click', function() {
  if (responsiveNavbar.style.display === "none" || responsiveNavbar.style.display === "") {
    responsiveNavbar.style.display = "block";
    mobilemeanu.style.display ="none";
  } else {
    responsiveNavbar.style.display = "none";
    mobilemeanu.style.display ="block";
  }
});
closeIcon.addEventListener('click', function() {
  if (responsiveNavbar.style.display === "block") {
    responsiveNavbar.style.display = "none";
    mobilemeanu.style.display = "block";
    
  } else {
    responsiveNavbar.style.display = "block";
    mobilemeanu.style.display = "none";
  }
});
usageMenu.addEventListener('mouseover', function(){
  usageContent.style.display = "block";
});
usageMenu.addEventListener('mouseout', function(){
  usageContent.style.display = "none";
});

usageContent.addEventListener('mouseover', function(){
  usageContent.style.display = "block";
});
usageContent.addEventListener('mouseout', function(){
  usageContent.style.display = "none";
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('in-viewport');
    }
  });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

function changeLanguage(language) {

  const currentLanguage = dropdown.querySelector('a');
  currentLanguage.innerHTML = language;

  // Remove existing selected class
  const selectedLanguage = dropdown.querySelector('.selected');
  if (selectedLanguage) {
    selectedLanguage.classList.remove('selected');
  }

  // Add selected class to the clicked language
  const clickedLanguage = dropdown.querySelector(`[onclick="changeLanguage('${language}')]`);
  clickedLanguage.classList.add('selected');

  // Add logic here to handle language change as needed
}