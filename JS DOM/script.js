
let main=document.createElement('div');
main.setAttribute('class',"main");

//Top black Box
let blackBox= document.createElement('div');
blackBox.setAttribute('class',"boxBlack");
main.appendChild(blackBox);
//Image vadivelu
let image=document.createElement('div');
image.setAttribute('class',"imageDiv");
let img=document.createElement('img');
img.setAttribute('src',"https://gumlet.assettype.com/vikatan%2F2019-05%2F419ad7ed-492d-45d7-9063-3babbe9919bb%2F151555_thumb.jpg?auto=format%2Ccompress&w=1200");
image.appendChild(img);
let nameBox=document.createElement('div');
nameBox.setAttribute('class','name');
let h2=document.createElement('h2');
h2.innerHTML='Vaigai Puyal Vadivelu';
nameBox.appendChild(h2);
image.appendChild(nameBox);
blackBox.appendChild(image);
//Top white line
let white= document.createElement('div');
white.setAttribute('class',"white");
main.appendChild(white);
//bottom BolckLine
let black=document.createElement('div');
black.setAttribute('class','black');
main.appendChild(black)

let address=document.createElement('div');
address.setAttribute('class',"address");
let addressP=document.createElement("p");
addressP.innerText="N.Damen Avenue, Chicago 99999|999-999-9999 |helo@kickresume.com |www.kickeresume.com ";
address.appendChild(addressP);
main.appendChild(address)
//profile Contents
let leftSideContent=document.createElement('div');
leftSideContent.setAttribute('class','leftSide');
main.appendChild(leftSideContent);

let profileContainer=document.createElement('div');
profileContainer.setAttribute('class',"profileContainer");
let profileIcon=document.createElement('i');
profileIcon.setAttribute('class',"fas fa-user");
profileContainer.appendChild(profileIcon);

//Profile Heading
let profileHead=document.createElement('h4');
profileHead.setAttribute('class',"h4");
profileHead.innerText="Profile";
profileContainer.appendChild(profileHead);
//Profile Paragraph...
let profileParagraph=document.createElement('p');
profileParagraph.setAttribute('class',"proPara");
profileParagraph.innerText="Innovation optimized solution seeker. Excited to be at the deployment phase of my new career as a webdeveloper. I am ambitious adventurous, assiduous, animated, and an alliteration advocate."
profileContainer.appendChild(profileParagraph);

leftSideContent.appendChild(profileContainer);

//Skill Container..
let skillContainer=document.createElement('div');
skillContainer.setAttribute('class',"skills");
leftSideContent.appendChild(skillContainer);
//Skill Icons
let skillIcon=document.createElement('i');
skillIcon.setAttribute('class',"fas fa-flask");
skillContainer.appendChild(skillIcon);
//Skill Name
let SkillName=document.createElement('h4');
SkillName.setAttribute('class',"h4-2");
SkillName.innerText="Skills";
skillContainer.appendChild(SkillName);
//Skills Technical Skills
let skillsCont=document.createElement('div');
skillsCont.setAttribute('class',"cont");
let skillTechnical=document.createElement('h5');
skillTechnical.setAttribute('class',"h5");
skillTechnical.innerText="Technical Skills";
skillsCont.appendChild(skillTechnical);


//Input range..
let technicialSkillsNames=["HTML","CSS","JavaScript","React","Redux","Mango","Deployment"];
let technicialSkillsName=document.createElement('div');
technicialSkillsName.setAttribute('class',"techName")
for(i=0; i<technicialSkillsNames.length; i++){
    technicialNameList=document.createElement('p');
    technicialNameList.setAttribute('class',"techitem")
    technicialNameList.innerText=technicialSkillsNames[i];
    technicialSkillsName.appendChild(technicialNameList);
}
skillsCont.appendChild(technicialSkillsName);

let rangeValues=document.createElement('div');
rangeValues.setAttribute('class',"inputDiv");
let technicialSkillValues=[90,80,60,50,45,45,60];
for(i=0; i<technicialSkillValues.length; i++){
    let techincalSkillRangeValues=document.createElement('input');
    techincalSkillRangeValues.setAttribute('class',"techValues");
    techincalSkillRangeValues.setAttribute('type',"range");
    techincalSkillRangeValues.disabled=true;
    techincalSkillRangeValues.setAttribute('value',technicialSkillValues[i]);
    rangeValues.appendChild(techincalSkillRangeValues);   
}
skillsCont.appendChild(rangeValues);
//Additional Skills...
let additionalSkills=document.createElement('h4');
additionalSkills.setAttribute('class',"h4-3");
additionalSkills.innerText="Additional Skills";
skillsCont.appendChild(additionalSkills);

let addSkills=["Project Management","Recruitment","Business Development","Editing","Fundrasing"];
let addSkill=document.createElement('div');
addSkill.setAttribute('class',"addSkills")
for(i=0; i<addSkills.length; i++){
    addSkillList=document.createElement('p');
    addSkillList.innerText=addSkills[i];
    addSkill.appendChild(addSkillList);
}
skillsCont.appendChild(addSkill);

let addSkillSet=document.createElement('div')
addSkillSet.setAttribute('class',"addskill");
let addSkillValues=[70,60,65,55,50];
for(i=0; i<addSkillValues.length; i++){
    let addSkillCont=document.createElement('input');
    addSkillCont.setAttribute('class',"addskillValues");
    addSkillCont.setAttribute('type',"range");
    addSkillCont.disabled=true;
    addSkillCont.setAttribute('value',addSkillValues[i]);
    addSkillSet.appendChild(addSkillCont);   
}

skillsCont.appendChild(addSkillSet);
skillContainer.appendChild(skillsCont);

//Work Experience....
// let workMainContainer=document.createElement('div');
// workMainContainer.setAttribute('class',"workMain");
// leftSideContent.appendChild(workMainContainer);

let workContainer=document.createElement('div');
workContainer.setAttribute('class',"work_Container");
//workIcons..
let workIcon=document.createElement('i');
workIcon.setAttribute('class',"fas fa-briefcase");
workContainer.appendChild(workIcon);
//workIcon Name..
let workIconName=document.createElement('h2');
workIconName.setAttribute('class',"h2-work1st");
workIconName.innerText="Work Experience";
workContainer.appendChild(workIconName);
//Event manager...
let eventManager=document.createElement('p');
eventManager.setAttribute('class',"event")
eventManager.innerText="Event Manager";
workContainer.appendChild(eventManager);
//work Date..
let date=document.createElement('p');
date.setAttribute('class',"date");
date.innerText="03/2015 - 02/2017";
workContainer.appendChild(date);
//Working Place...
let place=document.createElement('p');
place.setAttribute('class',"place");
place.innerText="Chennai A.V.M Studio";
workContainer.appendChild(place);
//Work Experience li Tag..
let workExperience_UL=document.createElement('ul');
workExperience_UL.setAttribute('class',"workUL");
let workExperience_LI=document.createElement('li');
workExperience_LI.innerText="Lead and execute all phase of event planning and production spanning committee recruitment, training,vendorrelationships and on-site facilitation.";
workExperience_UL.appendChild(workExperience_LI)
////li..2...
let workExperience_LI2=document.createElement('li');
workExperience_LI2.innerText="Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Woman";
workExperience_UL.appendChild(workExperience_LI2);

///li..3..
let workExperience_LI3=document.createElement('li');
workExperience_LI3.innerText="Execise fiscal control over budget creation, tracking and reporting. Collaboration with employess at all rganizational levels to advance cohesive operations."
workExperience_UL.appendChild(workExperience_LI3);
//...
workContainer.appendChild(workExperience_UL);
leftSideContent.appendChild(workContainer);


///Second Work Experience...
let rightSideContent=document.createElement('div');
rightSideContent.setAttribute('class','rightSide');
main.appendChild(rightSideContent);
//Work Experience2....
let workContainer2=document.createElement('div');
workContainer2.setAttribute('class',"work_Container2");
rightSideContent.appendChild(workContainer2)
//workIcons2..
let workIcon2=document.createElement('i');
workIcon2.setAttribute('class',"fas fa-briefcase");
workContainer2.appendChild(workIcon2);

//workIcon Name2..
let workIconName2=document.createElement('h2');
workIconName2.setAttribute('class',"h2-work2nd");
workIconName2.innerText="Work Experience";
workContainer2.appendChild(workIconName2);

//Event manager...
let communityRelation=document.createElement('p');
communityRelation.setAttribute('class',"event2")
communityRelation.innerText="Community Relations Manager";
workContainer2.appendChild(communityRelation);

//work Date..
let date2=document.createElement('p');
date2.setAttribute('class',"date2");
date2.innerText="06/2011 - 01/2014";
workContainer2.appendChild(date2);

//Working Place...
let place2=document.createElement('p');
place2.setAttribute('class',"place2");
place2.innerText="Chennai A.V.M Studio";
workContainer2.appendChild(place2);

//Work Experience li Tag..
let workExperience_UL2=document.createElement('ul');
workExperience_UL2.setAttribute('class',"workUL2");
let workExperience_li=document.createElement('li');
workExperience_li.innerText= "Arranging presentation and pitch deck.";
workExperience_UL2.appendChild(workExperience_li);
workContainer2.appendChild(workExperience_UL2);
//li 2..
let workExperience_li2=document.createElement('li');
workExperience_li2.innerText= "Designing a PR plan and establishing important focus points.";
workExperience_UL2.appendChild(workExperience_li2);
//li 3....
let workExperience_li3=document.createElement('li');
workExperience_li3.innerText= "Designing, creating and managing content across multiple communication platforms.";
workExperience_UL2.appendChild(workExperience_li3);
//li 4...
let workExperience_li4=document.createElement('li');
workExperience_li4.innerText= "Building relationships with key media players.";
workExperience_UL2.appendChild(workExperience_li4);

//Education List...
let education=document.createElement('div');
education.setAttribute('class',"education");
rightSideContent.appendChild(education);
//Education Icons..
educationIcon=document.createElement('i');
educationIcon.setAttribute('class',"fas fa-graduation-cap");
education.appendChild(educationIcon);
//Education Heading...
let educationHeading=document.createElement('h3');
educationHeading.setAttribute('class',"h3_edu");
educationHeading.innerText="Education";
education.appendChild(educationHeading);
//Education education Immersion..
let educationImmersion=document.createElement('h4');
educationImmersion.setAttribute('class',"h4-edu");
educationImmersion.innerText="Engineering Immersion Program";
education.appendChild(educationImmersion);
//education Location..
let locations=document.createElement('p');
locations.setAttribute('class',"locationP");
locations.innerText='Thinkful, Chicago, IL';
education.appendChild(locations);
//Education knowledge..
let project=document.createElement('p');
project.setAttribute('class',"project");
project.innerText="Project-focused intensive program with emphasis on Mongo, Express, React,and JavaScript (MERN) technical stack";
education.appendChild(project);
//education UL li lines...
let education_ul= document.createElement('ul');
education_ul.setAttribute('class',"edu_ul");
//li..
let education_li1=document.createElement('li');
education_li1.innerText="Developed a full-stack web application, RenewU, using React that allows user to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB";
education_ul.appendChild(education_li1);
//li 2...
let education_li2=document.createElement('li');
education_li2.innerText="Developed a language learning app, 'Foodie Phonetics' using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo Were used to create a backend that stroes user data.";
education_ul.appendChild(education_li2);
//li 3...
let education_li3=document.createElement('li');
education_li3.innerText="Developed a cocierge app, Play, for individuals looking for curated suggestions when visitiduals a new place.React was used to develop tha front end which includes real-time chat, drag and drop and variety of advanced features. The backend,built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.";
education_ul.appendChild(education_li3);
//liul append
education.appendChild(education_ul);
//B A Heading...
let baEnglish=document.createElement('h3');
baEnglish.innerText="BA, English";
baEnglish.setAttribute('class',"baEnglish");
education.appendChild(baEnglish);
//BA English..Date..
let baDate=document.createElement('p');
baDate.setAttribute('class',"baDate");
baDate.innerText="09/2001 - 09/2005";
education.appendChild(baDate);
//University...Address...
let university=document.createElement('p');
university.setAttribute('class',"univ");
university.innerText="University of California, Los Angeles";
education.appendChild(university);
//education append...

//Work Horizontal Line...
let hori=document.createElement('div');
hori.setAttribute('class',"hori");
main.appendChild(hori);
//main append....
document.body.appendChild(main);
