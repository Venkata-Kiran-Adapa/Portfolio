'use strict'

let about=document.querySelector('.aboutme');
let resume=document.querySelector('.resume')
let projects=document.querySelector('.projects');
let skillsandcertifications=document.querySelector('.skillsandcertifications')



function aboutClicked(){
  resume.style.display="none";
  projects.style.display="none";
  skillsandcertifications.style.display="none";
  about.style.display="block";
}
function resumeClicked(e){
  about.style.display="none";
  projects.style.display="none";
  skillsandcertifications.style.display="none";
  resume.style.display="block";
}
function projectsClicked(e){
  about.style.display="none";
  resume.style.display="none";
  projects.style.display="block";
  skillsandcertifications.style.display="none";
}
function skillsClicked(e){
  about.style.display="none";
  resume.style.display="none";
  projects.style.display="none";
  skillsandcertifications.style.display="block";
}