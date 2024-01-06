const usageMenu = document.getElementById('useageMenu');
const usageContent = document.querySelector('.useage');
const responsiveNavbar = document.querySelector('.responsiveNavbar');
const closeIcon = document.getElementById('closeIcon');
const mobilemeanu = document.getElementById("mobile-menu");
const questions = document.querySelectorAll('.question');

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

