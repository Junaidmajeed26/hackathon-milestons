// Get References to the form and display area
const form = document.getElementById('Resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//handle form submission
form.addEventListener('submit', (event: Event) => {
event.preventDefault();  //prevent page reload


//Collect input values
const Name = (document.getElementById('Name') as HTMLInputElement).value
const Email = (document.getElementById('Email') as HTMLInputElement).value
const Phone = (document.getElementById('Phone') as HTMLInputElement).value
const Education = (document.getElementById('Education') as HTMLInputElement).value
const Experience = (document.getElementById('Experience') as HTMLInputElement).value
const Skills = (document.getElementById('Skills') as HTMLInputElement).value

//generate the resume content dynamically
const resumeHTML =`
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenditable="true">${Name}</span></p>
<p><b>Email:</b><span contenditable="true"${Email}</p>
<p><b>Phone:</b>${Phone}</p>

<h3>Education</h3>
<p>${Education}</p>

<h3>Experience</h3>
<p>${Experience}</p>

<h3>Skills</h3>
<p>${Skills}</p>
`;

//Display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else {
    console.error('the resume display element is missing.');
}
});