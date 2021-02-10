const projectData = [{
    id: 0,
    title: "Makeup Finder",
    programsUsed: "REACT | API | FIREBASE | SASS | HTML",
    projectInfo:"Users can browse through and buy different products using a drop-down menu of makeup categories where they can choose between lip, eyeshadow and blush",
    img: "./assets/makeUpIconDarkerBlue.jpg",
    desc: `image of lipstick and powder in blue and white`,
    live: "https://abidu1.github.io/projectFiveMakeup/",
    git:"https://github.com/Abidu1/projectFiveMakeup.git"

  },
  {
    id: 1,
    title: "Out of Context Movie Spoiler",
    programsUsed: "REACT | API | FIREBASE | SASS | HTML",
    projectInfo:"This site is designed to help users finds gifs of their favourite movie using the search bar and saving it to a highlight reel",
    img: "./assets/movieIconDarkerBlue.jpg",
    desc: `picture of a white movie slate with a blue background`,
    live: "https://p-l-u-d.github.io/Out-of-Context-Movie-Spoiler/",
    git:"https://github.com/P-L-U-D/Out-of-Context-Movie-Spoiler.git"
  },
  {
    id: 2,
    title: "PokeDex",
    programsUsed: "JAVASCRIPT | JQUERY | SASS | HTML",
    projectInfo:"You can find out the type of a pokemon by using the search engine to look up the name",
    img: "./assets/pokedexIconDarkerBlue.jpg",
    desc: `picture of a white pokeball with a blue background`,
    live: "https://aricharikarusraabidprojectfour.github.io/pokedex/",
    git:"https://github.com/ariCharikarUsraAbidProjectFour/pokedex.git"
  },
  {
    id: 3,
    title: "Drinking Water Tracker",
    programsUsed: "JAVASCRIPT | JQUERY | SASS | HTML",
    projectInfo:"Calculates how much water you need to drink in a day depending on your weight and how many minutes you have exercised",
    img: "./assets/waterBottleIconDarkerBlue.jpg",
    desc: `picture of a white water bottle with a blue background`,
    live: "https://abidu1.github.io/project3/",
    git:"https://github.com/Abidu1/project3.git"
  }]
      const contactbutton = document.querySelector("contactLink");
      const sections = document.querySelectorAll('section');
      const btns = document.querySelectorAll('button');
      const contactSection = document.querySelector('.contactSection');
      const aboutSection = document.querySelector('.aboutMeSection');
      const projectSection = document.querySelector('.projectSection');
      const prevBtn = document.querySelector('.prevBtn');
      const nextBtn = document.querySelector('.nextBtn');
      const projectImg = document.querySelector('.projectImg');
      const projectTitle = document.querySelector('.projectTitle');
      const projectPrograms = document.querySelector('.projectPrograms');
      const projectInformation = document.querySelector('.projectInformation');
      const liveLink = document.querySelector('.liveLink');
      const gitLink = document.querySelector('.gitLink');
      const homeBox = document.querySelector('.titleContainer');
      const navBurger = document.querySelector('.hamburger');
      const navFullScreen = document.querySelector('nav');
      const exitBtn = document.querySelector('.exit-responsive')
      const skills = document.querySelector('.skillsContainer')
      const skillsBtn = document.querySelector('.skillsBtn')
      const aboutDesc = document.querySelector('.aboutDescription')
      const aboutBtn = document.querySelector('.aboutBtn')

      navBurger.addEventListener("click", function showNavBar(){
          navBurger.classList.add('hideDiv');
          navFullScreen.classList.add('show');
          exitBtn.classList.add('show');
      })

      exitBtn.addEventListener("click", function hideNavBar(){
          navBurger.classList.remove('hideDiv');
          navFullScreen.classList.remove('show');
          exitBtn.classList.remove('show');
      })

      skillsBtn.addEventListener("click", function showSkills(){
          aboutDesc.classList.add('hideDiv')
          skills.classList.add('showSkills');
      })

      aboutBtn.addEventListener("click", function showAboutDesc(){
          aboutDesc.classList.remove('hideDiv');
          skills.classList.remove('showSkills')

      })
     

      let currentItem = 0;

      function displayData (project){
          const item = projectData[project];
          projectImg.src = item.img;
          projectImg.alt = item.desc;
          projectTitle.textContent = item.title;
          projectPrograms.textContent = item.programsUsed;
          projectInformation.textContent = item.projectInfo;
          liveLink.href = item.live;
          gitLink.href = item.git;
          
      }

      nextBtn.addEventListener("click", function (){
          currentItem++;
          if(currentItem > projectData.length){
          currentItem = 3;
          }
          displayData(currentItem);
      });

      prevBtn.addEventListener("click", function (){
          currentItem--;
          if(currentItem < 0){
            //   currentItem = projectData.length - 1;
                currentItem = 0;
              // this equals to the last item
          }
          displayData(currentItem);
      });

    //   function disableBtns (){
    //       if (currentItem === 0){
    //         document.querySelector('.prevBtn').style.color = "red"
    //       }
    //   }





      btns.forEach(btn =>{
          btn.addEventListener('click', function(e){
              const target = e.currentTarget.classList;
              if(target.contains("contactLink")){
                  hideHome();
                  removeClasses();
                  contactSection.classList.add('active');    
              }
              else if(target.contains("aboutLink")){
                  hideHome();
                  removeClasses();
                  skills.classList.remove('showSkills');
                  aboutDesc.classList.remove('hideDiv');
                  aboutSection.classList.add('active');
              }
              else if(target.contains("projectLink")) {
                  hideHome();
                  removeClasses();
                  projectSection.classList.add('active');
                  currentItem = 0;
                  displayData(currentItem);
              }
              else if(target.contains("homeLink")){
                  homeBox.classList.remove('hideDiv')
                  removeClasses();
              }
          })
      })


      function removeClasses(){
          sections.forEach(section =>{
              section.classList.remove('active');
          })
      }

      function hideHome(){
          homeBox.classList.add('hideDiv')
      }