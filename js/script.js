// Start knap
const btn = document.querySelector(".container_faresignaler .btn");
let previousStage = document.querySelector(".container_faresignaler").cloneNode(true);

// Funktionen der opdatere UI
const buildStage = (h2Text, pText, btnsText, imagePath, fa, currentSection) => {

    // opret section
    const section = document.createElement("section");
    section.classList.add("container_faresignaler");
    section.classList.add("active");
    section.classList.add("game-section");

    // game-section wrapper div oprettet en div for at style game section scss
    const content = document.createElement("div");
    content.classList.add("game-content");

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

    // buttons wrapper for at style game buttons
    const btnWrapper = document.createElement("div");
    btnWrapper.classList.add("game-buttons");

    // knapper
    if (btnsText) {
        btnsText.forEach(text => {
            const button = document.createElement("button");
            button.textContent = text;
            button.classList.add("btn");
            button.addEventListener("click", nextStage);
            // section.append(button);
            btnWrapper.append(button);
        });

        section.append(btnWrapper); // tilføjet div ....for at se om det virker
    }

    // erstatter den nuværende sektion
    currentSection.replaceWith(section);
};


// Der klikkes og vises
const nextStage = (e) => {

    let h2Text, pText, btnsText, imagePath, fa;

    //Find den section som bliver kaldt
    const currentSection = e.target.closest(".container_faresignaler");


    switch (e.target.textContent) {

        case "Start": // teskten på knapperne
            h2Text = "Du modtager mail fra SU kontoret."; // Overskrift hvad sker der 
            imagePath ="img/SUmail.png";                    // img 
            pText = "Hvordan vælger du at handle?";         // instruktioner eller selve scenarioet 
            btnsText = ["Åbner", "Ignorere", "Tjekker sender"]; // knap mulighederne 
           
            break;

        case "Åbner":
            h2Text = "Ups det var et Phishing forsøg!";
            imagePath ="img/scam.png";
            pText = "Du har klikket et malicious link og dine data er stålet.";
            btnsText = ["Start Over", "Meld til IT"];
            break;

        case "Ignorere":
            h2Text = "Godt valg";
            pText = "Du undgik et phishing forsøg.";
            btnsText = ["Næste"];
            break;

        case "Tjekker sender":
            h2Text = "Godt set!";
            pText = "E-mailen var fake. Du undgik et phishing forsøg.";
            btnsText = ["Næste"];
            break;

        case "Start Over": 
            h2Text = "Prøv igen det en læringsprocess";
            imagePath ="img/Motivation.png";     
            pText = "Vær ekstra opmærksom på faresignalerne. Det kan spare dig for en masse fustration fremover.";
            btnsText = ["Fortsæt"];
            break;

        case "Fortsæt": 
            h2Text = "Du har modtager en mail fra Netflix som kræver handling.";
            pText = "Hvordan vælger du at handle? ";
            imagePath ="img/SUmail.png";     
            btnsText = ["Åbner", "Ignorere", "Tjekker sender"];
            break;

            //meld til IT
            case "Meld til IT": 
            h2Text = "Fornuftigt handlet!. Scam skal altid meldes til IT afdelingen.";
            pText = "Fortsæt endelig din læringsprocess.";
            imagePath ="img/SUmail.png";     
            btnsText = ["Næste", "Afslut"];
            break;

            case "Næste": 
            h2Text = "Du modtager et opkald fra din bank som kræver dankort oplysninger Øjeblikkeligt.";
            pText = "Hvad gør du?";
            imagePath ="img/SUmail.png";     
            btnsText = ["Oplyser detaljer", "Lægger på"];
            break;

            
            case "Oplyser detaljer": 
            h2Text = "Ups! Dine oplysnigner er blevet stålet. Du er udsat for Smishing som er en udbredt form for phishing forsøg.";
            pText = "Hvad gør du?";
            imagePath ="img/SUmail.png";     
            btnsText = ["Meld til IT", "Næste scenario"];
            break;

            case "Lægger på": 
            h2Text = "Fint handlet! Du var opmærksom og undgik et phishing forsøg (typen smishing som foregår enten via sms eller opkald).";
            pText = "Fortsæt din læring";
            imagePath ="img/SUmail.png";     
            btnsText = ["Næste scenario"];
            break;

            case "Næste scenario":
            h2Text = "Du modtager en SMS fra PostNord med et mistænkeligt link.";
            pText = "Hvad gør du?";
            imagePath ="img/SUmail.png";     
            btnsText = ["Klikker på linket", "Ignorerer SMS"];
            break;

            case "Klikker på linket":
            h2Text = "Ups! Det var smishing.";
            pText = "SMS'en forsøgte at lokke dig til en falsk hjemmeside.";
            imagePath ="img/scam.png";     
            btnsText = ["Meld til IT", "Afslut"];
            break;

            case "Ignorerer SMS":
            h2Text = "Godt valg!";
            pText = "Du undgik endnu et phishing forsøg.";
            imagePath ="img/SUmail.png";     
            btnsText = ["Afslut"];
            break;

            case "Afslut": 
            h2Text = "Du kan altid prøve igen senere og lære mere om phishing forsøg";
            pText = "Er du i tvivl om du er blevet udsat for phishing - kontakt IT support.";
            imagePath ="img/SUmail.png";     
            btnsText = ["Tilbage"];
            break;

            // Vil gerne have section .container_faresignaler tilbage. kun når der klikkes Tilbage (dvs lukke scenarioet og den gamle section html tilbage)
           // har prøvet alt muligt;)
        
           case "Tilbage":
           if (previousStage) {
         const restored = previousStage.cloneNode(true);

        currentSection.replaceWith(restored);
 
        restored.querySelectorAll(".btn").forEach(btn => {
            btn.addEventListener("click", nextStage);
        });
    }
    return;

        default:
            console.log("Error");
            return;
    }

    // Build next stage
    buildStage(h2Text, pText, btnsText, imagePath, fa, currentSection);
};


// Start button event
btn.addEventListener("click", nextStage); 



// -------------------------------------------------



// HAMBURGER JAVA SCRIPT

'use strict';

// Henter referencer til relevante elementer i DOM'en
const bars = document.querySelector("#bars");// Menu-knappen (hamburger/kryds)
const icon = document.querySelector("#bars > i");// Ikonet inde i knappen
const nav = document.querySelector("#menu");// Navigationens <ul>-element

// Funktion der åbner/lukker navigationen ved klik på bars-knappen
const openNav = () => {
    nav.classList.toggle("show"); // Vis/skjul menu via CSS-klasse

    icon.classList.toggle("fa-bars"); // Skift ikon (hamburger ↔ kryds)
    icon.classList.toggle("fa-xmark");

    // ARIA: opdater om menuen er åben/lukket
    const expanded = bars.getAttribute("aria-expanded") === "true";
    bars.setAttribute("aria-expanded", expanded ? "false" : "true");

    // ARIA: skift label afhængigt af tilstand
    const label = bars.getAttribute("aria-label") === "åben navigation";
    bars.setAttribute("aria-label", label ? "luk navigation" : "åben navigation");
};

// Tilføj klik-event til knappen → åbn/luk menuen
bars.addEventListener("click", openNav);