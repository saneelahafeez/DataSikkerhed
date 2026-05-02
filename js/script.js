const btn = document.querySelector(".container_faresignaler .btn"); // Variabel med elementet der fra start af har class="btn"
const main = document.querySelector("main"); // Variabel med main-elementet

// Funktion der opdaterer UI
const buildStage = (h2Text, pText, btnsText, imagePath, fa) => {
    // Nulstil så der ikke er nogen synlige sections
    let prevStage = document.querySelectorAll(".container_faresignaler"); // overskrevet stage
    for (let stage of prevStage) {
        stage.classList.remove("active");
    }
    // Lav en ny section og tilføj classes
    const section = document.createElement("section");
    section.classList.add("container_faresignaler");//prøver lige at integrere der stod stage tidligere
    section.classList.add("active");

    // Lav en ny overskrift og sæt teksten fra switch-casen ind i den
    const h2 = document.createElement("h2");
    h2.textContent = h2Text;
    section.append(h2);

    // Sæt billeder ind, hvis der er nogen stier defineret
    if(imagePath != undefined) {
        const img = document.createElement("img");
        img.src = imagePath;
        img.classList.add("stage-img");
        section.append(img);
    }

    // Sæt ikoner ind, hvis der er nogen fa-classes defineret
    if(fa != undefined) {
        const icon = document.createElement("i");
        fa.forEach(faClass => {
            icon.classList.add(faClass);
        }) 
        section.append(icon);
    }

    // Lav en paragraph og sæt teksten fra switch-casen ind i den
    const p = document.createElement("p");
    p.textContent = pText;
    section.append(p);

    // Sæt knapper ind, hvis der er nogen tekster til dem i switch-casen
    if(btnsText != undefined) {
        btnsText.forEach(text => {
            const button = document.createElement("button");
            button.textContent = text;
            button.classList.add("btn");
            button.addEventListener("click", nextStage);
            section.append(button);
        })
    }
    // Sæt section fast i main
    main.append(section);
}

// Function der afgør hvad der skal ske
const nextStage = (e) => {
    // Variabel til de forskellige typer indhold
    let h2Text, pText, btnsText, imagePath, fa;

    // Switch der tager udgangspunkt i, hvad der står på knappen, der blev klikket
    switch(e.target.textContent) {
        case "Start": 
            h2Text = "Stage 1";
            pText = "Lorem Ipsum";
            btnsText = ["Option 1", "Option 2", "Option 3"];
        break;
        case "Option 1":
            h2Text = "Option 1";
            pText = "Lorem Ipsum";
            btnsText = ["Well Done"];
            imagePath = "img/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg";
        break;
        case "Option 2":
            h2Text = "Option 2";
            pText = "Lorem Ipsum";
            btnsText = ["Naah"];
            fa = ["fa-solid", "fa-cat"];
        break;
        case "Option 3":
            h2Text = "Option 3";
            pText = "Lorem Ipsum";
            btnsText = ["Naah"];
        break;
        case "Well Done": 
            h2Text = "Well Done";
            pText = "Lorem Ipsum Well Done";
            btnsText = ["Start Over"];
        break;
        case "Naah":
            h2Text = "Naah";
            pText = "Lorem Ipsum";
            btnsText = ["Start Over"];
        break;
        case "Start Over":
            h2Text = "Branching Scenario";
            pText = "Lorem Ipsum";
            btnsText = ["Start"];
        default: console.log("Error");
          break;
    }
    // Funktionskald, der sender oplysningerne med videre
    buildStage(h2Text, pText, btnsText, imagePath, fa);
}

// Tilføj event listener til element med class="btn"
btn.addEventListener("click", nextStage);
