// Start
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
    // content.classList.add("game-content"); ser lige om det stopper flimren

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

        case "Spot phishing": // teskten på knapperne
            h2Text = "Du modtager mail fra SU kontoret."; // Overskrift hvad sker der 
            pText = "Hvordan vælger du at handle?";  
            imagePath ="img/SUmail.png";             
            btnsText = ["Åbner", "Ignorere", "Tjekker afsender"]; // knap mulighederne 
           
            break;

        case "Åbner":
            h2Text = "Ups! Du blev udsat for phishing!";
            pText = "Linket førte til en falsk hjemmeside, hvor dine loginoplysninger blev stjålet.";
            imagePath ="img/scam.png";
            btnsText = ["Start Over", "Meld til IT"];
            break;

        case "Ignorere":
            h2Text = "God beslutning!";
            
            pText = "Du undgik at interagere med et mistænkeligt link og beskyttede dine oplysninger.";
            imagePath ="img/ThumbsUp.png";
            btnsText = ["Næste"];
            break;

        case "Tjekker afsender":
            h2Text = "Godt observeret!";
            pText = "Afsenderens adresse virkede mistænkelig. Ved at undersøge mailen nærmere undgik du phishing."; 
            imagePath ="img/verify.png";
            btnsText = ["Næste"];
            break;

        case "Start Over": 
            h2Text = "Prøv igen";
            pText = "Phishing-forsøg kan være svære at opdage. Vær opmærksom på faresignaler som mistænkelige links og presserende beskeder.";
            imagePath ="img/Motivation.png";     
            btnsText = ["Fortsæt"];
            break;

        case "Fortsæt": 
            h2Text = "Du har modtaget en mail fra Netflix som kræver handling.";
            pText = "Hvordan vælger du at handle? ";
            imagePath ="img/Netflix.png";     
            btnsText = ["Åbner", "Ignorere", "Tjekker afsender"];
            break;

            case "Meld til IT": 
            h2Text = "God sikkerhedsadfærd!";
            pText = "Ved at melde hændelsen til IT-afdelingen hjælper du med at beskytte både dig selv og andre studerende.";
            imagePath ="img/ItSupport.png"; 
            btnsText = ["Næste", "Afslut"];
            break;

            case "Næste": 
            h2Text = "Du modtager et opkald fra banken";
            pText = "Du bliver bedt om at oplyse kortoplysninger da kortet er blevet hacket.Hvad gør du?";
            imagePath ="img/call.png";     
            btnsText = ["Oplyser detaljer", "Lægger på"];
            break;

            
            case "Oplyser detaljer": 
            h2Text = "Dine oplysninger blev misbrugt";
            pText = "Svindleren brugte dine kortoplysninger til at få adgang til din konto. Banken vil aldrig bede om følsomme oplysninger over telefonen. Hvad gør du?";
            imagePath ="img/DataGone.png";     
            btnsText = ["Meld til IT", "Næste scenario"];
            break;

            case "Lægger på": 
            h2Text = "Godt reageret";
            pText = "Du genkendte faresignalerne og undgik et smishing-forsøg via telefon.";
            imagePath ="img/yes.png";     
            btnsText = ["Næste scenario"];
            break;

            case "Næste scenario":
            h2Text = "Du modtager en mail fra PostNord";
            pText = "Hvad gør du?";    
            imagePath ="img/Postnord.png"; 
            btnsText = ["Klikker på linket", "Ignorerer mail"];
            break;

            case "Klikker på linket":
            h2Text = "Ups! Det var smishing.";
            pText = "SMS'en forsøgte at lokke dig til en falsk hjemmeside.";
            imagePath ="img/scam.png";     
            btnsText = ["Meld til IT", "Afslut"];
            break;

            case "Ignorerer mail":
            h2Text = "Godt valg!";
            pText = "Du undgik endnu et phishing forsøg.";
            imagePath ="img/flot.png";     
            btnsText = ["Afslut"];
            break;

            case "Afslut": 
            h2Text = "Du er nu bedre klædt på til sikker adfærd online.";
            pText = "Ved at være opmærksom på faresignalerne kan du beskytte dine data og handle mere sikkert online.";
            imagePath ="img/staysafe.png";   
            btnsText = ["Tilbage"];
            break;
        
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





// HAMBURGER Menu JAVA SCRIPT

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