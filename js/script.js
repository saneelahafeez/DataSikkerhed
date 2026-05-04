// Start knap
const btn = document.querySelector(".container_faresignaler .btn");

// Funktionen der opdatere UI
const buildStage = (h2Text, pText, btnsText, imagePath, fa, currentSection) => {

    // opret section
    const section = document.createElement("section");
    section.classList.add("container_faresignaler");
    section.classList.add("active");

    // overskrift
    const h2 = document.createElement("h2");
    h2.textContent = h2Text;
    section.append(h2);

    // vis billede hvis brugt
    if (imagePath) {
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
    const currentSection = e.target.closest(".container_faresignaler");

    switch (e.target.textContent) {

        case "Start":
            h2Text = "You received an email from your bank.";
            pText = "What do you do?";
            btnsText = ["Click the link", "Ignore it", "Check sender"];
            break;

        case "Click the link":
            h2Text = "⚠️ Phishing Attack!";
            pText = "You clicked a malicious link and your data was stolen.";
            btnsText = ["Start Over"];
            break;

        case "Ignore it":
            h2Text = "👍 Safe choice";
            pText = "You avoided a potential phishing attack.";
            btnsText = ["Start Over"];
            break;

        case "Check sender":
            h2Text = "✅ Best choice!";
            pText = "The email address was fake. You avoided the scam.";
            btnsText = ["Start Over"];
            break;

        case "Start Over":
            h2Text = "Try again";
            pText = "Can you spot the phishing attempt?";
            btnsText = ["Start"];
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