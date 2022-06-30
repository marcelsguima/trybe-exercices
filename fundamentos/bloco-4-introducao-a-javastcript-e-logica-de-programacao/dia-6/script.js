const title = document.getElementById('header-container');
title.style.backgroundColor = "#03985E";

//Urgent
const taskUrgent = document.getElementsByClassName('emergency-tasks')[0];
taskUrgent.style.backgroundColor = "#DB8A75";

const urgencyH3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < urgencyH3.length; index += 1) {
  urgencyH3[index].style.backgroundColor = '#8F03D3';
}



//No Urgent
const taskNoUrgent = document.getElementsByClassName('no-emergency-tasks')[0];
taskNoUrgent.style.backgroundColor = "#D6BC55";

const noUrgencyH3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noUrgencyH3.length; index += 1) {
  noUrgencyH3[index].style.backgroundColor = '#212224';
}

//Footer
const footer = document.querySelectorAll('#footer-container')[0];
footer.style.backgroundColor = "#033030";