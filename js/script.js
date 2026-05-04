// // Start knap
// const btn = document.querySelector(".container_faresignaler .btn");

// // Funktionen der opdatere UI
// const buildStage = (h2Text, pText, btnsText, imagePath, fa, currentSection) => {

//     // opret section
//     const section = document.createElement("section");
//     section.classList.add("container_faresignaler");
//     section.classList.add("active");

//     // overskrift
//     const h2 = document.createElement("h2");
//     h2.textContent = h2Text;
//     section.append(h2);

//     // vis billede hvis brugt
//     if (imagePath)
//   {
//         const img = document.createElement("img");
//         img.src = imagePath;
//         img.classList.add("stage-img");
//         section.append(img);
//     }


//     // vis ikon hvis brugt
//     if (fa) {
//         const icon = document.createElement("i");
//         fa.forEach(cls => icon.classList.add(cls));
//         section.append(icon);
//     }

//     // Paragraph
//     const p = document.createElement("p");
//     p.textContent = pText;
//     section.append(p);

//     // knapper
//     if (btnsText) {
//         btnsText.forEach(text => {
//             const button = document.createElement("button");
//             button.textContent = text;
//             button.classList.add("btn");
//             button.addEventListener("click", nextStage);
//             section.append(button);
//         });
//     }

//     // erstatter den nuværende sektion
//     currentSection.replaceWith(section);
// };


// // Der klikkes og vises
// const nextStage = (e) => {

//     let h2Text, pText, btnsText, imagePath, fa;

//     //Find den section som bliver kaldt
//     const currentSection = e.target.closest(".container_faresignaler");

//     switch (e.target.textContent) {

//         case "Start":
//             h2Text = "Du modtager mail fra SU kontoret.";
//             imagePath ="img/IBAlogo.png";
//             pText = "Hvordan vælger du at handle?";
//             btnsText = ["Åbner e-mail", "Ignorere", "Tjekker sender"];
           
//             break;

//         case "Åbner e-mail":
//             h2Text = "⚠️ Ups det var et Phishing forsøg!";
//             pText = "Du har klikket et malicious link og dine data er stålet.";
//             btnsText = ["Start Over"];
//             break;

//         case "Ignorere":
//             h2Text = "Godt valg";
//             pText = "Du undgik et phishing forsøg.";
//             btnsText = ["Start Over"];
//             break;

//         case "Tjekker sender":
//             h2Text = "Godt set!";
//             pText = "E-mailen var fake. Du undgik et phishing forsøg.";
//             btnsText = ["Start Over"];
//             break;

//         case "Start Over": 
//             h2Text = "Prøv igen";
//             pText = "Kan du spotte et phishing forsøg?";
//             btnsText = ["Fortsæt"];
//             break;

//         default:
//             console.log("Error");
//             return;
//     }

//     // Build next stage
//     buildStage(h2Text, pText, btnsText, imagePath, fa, currentSection);
// };


// // Start button event
// btn.addEventListener("click", nextStage);














// Start knap
const btn = document.querySelector(".style-spil .btn");

// Funktionen der opdatere UI
const buildStage = (h2Text, pText, btnsText, imagePath, fa, currentSection) => {

    // opret section
    const section = document.createElement("section");
    section.classList.add("style-spil");
    section.classList.add("activee");

    // overskrift
    const h2 = document.createElement("h2");
    h2.textContent = h2Text;
    section.append(h2);

    // vis billede hvis brugt
    if (imagePath)
  {
        const img = document.createElement("img");
        img.src = imagePath;
        img.classList.add("stage-img");
        section.append(img);
    }


    // vis ikon hvis brugt
    if (fa) {
        const icon = document.createElement("i");
        fa.forEach(cls => icon.classList.add(cls));
        section.append(icon);
    }

    // Paragraph
    const p = document.createElement("p");
    p.textContent = pText;
    section.append(p);

    // knapper
    if (btnsText) {
        btnsText.forEach(text => {
            const button = document.createElement("button");
            button.textContent = text;
            button.classList.add("btn");
            button.addEventListener("click", nextStage);
            section.append(button);
        });
    }

    // erstatter den nuværende sektion
    currentSection.replaceWith(section);
};


// Der klikkes og vises
const nextStage = (e) => {

    let h2Text, pText, btnsText, imagePath, fa;

    //Find den section som bliver kaldt
    const currentSection = e.target.closest(".style-spil");

    switch (e.target.textContent) {

        case "Start":
            h2Text = "Du modtager mail fra SU kontoret.";
            imagePath ="img/IBAlogo.png";
            pText = "Hvordan vælger du at handle?";
            btnsText = ["Åbner e-mail", "Ignorere", "Tjekker sender"];
           
            break;

        case "Åbner e-mail":
            h2Text = "⚠️ Ups det var et Phishing forsøg!";
            pText = "Du har klikket et malicious link og dine data er stålet.";
            btnsText = ["Start Over"];
            break;

        case "Ignorere":
            h2Text = "Godt valg";
            pText = "Du undgik et phishing forsøg.";
            btnsText = ["Start Over"];
            break;

        case "Tjekker sender":
            h2Text = "Godt set!";
            pText = "E-mailen var fake. Du undgik et phishing forsøg.";
            btnsText = ["Start Over"];
            break;

        case "Start Over": 
            h2Text = "Prøv igen";
            pText = "Kan du spotte et phishing forsøg?";
            btnsText = ["Fortsæt"];
            break;

        default:
            console.log("Error");
            return;
    }

    // Build next stage
    buildStage(h2Text, pText, btnsText, imagePath, fa, currentSection);
};


// Start button event
btn.addEventListener("click", nextStage);