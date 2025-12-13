const listaServicii = [
    {
        titlu: "Standard National",
        detalii: [
            "Livrare in capitala in 24h",
            "Acoperire Nationala 100%",
            "Greutate Maxima: 30kg",
            "Urmarire online inclusa",
            "Afla mai multe"
        ]
    },
    {
        titlu: "Express Rapid",
        detalii: [
            "Prioritate maxima",
            "Garantie de livrare in 24h",
            "Greutate Maxima: 15kg",
            "Confirmare telefonica",
            "Afla mai multe"
        ]
    },
    {
        titlu: "B2B",
        detalii: [
            "Retururi simplificate",
            "Rambursare rapida",
            "Consultanta logistica",
            "Suport personalizat",
            "Afla mai multe"
        ]
    }
];

const serviciiContainer = document.getElementById("serviciiContainer");

for (let i = 0; i < listaServicii.length; i++) {
    const serviciu = listaServicii[i];

    const card = document.createElement("div");
    card.className = "card-serviciu";

    if (i === 1) {
        card.classList.add("featured");
        card.style.backgroundColor = "#002e5b";
        card.style.color = "white";
    }

    let listaHTML = "<ul>";

    for (let j = 0; j < serviciu.detalii.length; j++) {
        const detaliu = serviciu.detalii[j];

        if (detaliu.includes("Afla")) {
            listaHTML += `<li><a href="#">${detaliu}</a></li>`;
        } else if (detaliu.includes(":")) {
            const parti = detaliu.split(":");
            listaHTML += `<li>${parti[0]}: <span>${parti[1].trim()}</span></li>`;
        } else {
            listaHTML += `<li>${detaliu}</li>`;
        }
    }

    listaHTML += "</ul>";

    card.innerHTML = `
        <h3>${serviciu.titlu}</h3>
        ${listaHTML}
    `;

    serviciiContainer.appendChild(card);
}

function calculeazaPret() {
    const greutateInput = document.getElementById("greutate");
    const cantitateInput = document.getElementById("cantitate");

    const greutate = Number(greutateInput.value);
    const cantitate = Number(cantitateInput.value);

    const pretBaza = 15;
    const costPerKg = 2.5;
    const reducereProcent = 0.1;

    const pretUnitar = pretBaza + greutate * costPerKg;
    const pretTotalBrut = pretUnitar * cantitate;

    let reducere = 0;

    if (cantitate >= 3) {
        reducere = pretTotalBrut * reducereProcent;
    }

    const pretFinal = pretTotalBrut - reducere;

    document.getElementById("pretGreutate").innerText = pretTotalBrut.toFixed(2);
    document.getElementById("reducereAfisata").innerText = reducere.toFixed(2);
    document.getElementById("pretFinal").innerText = pretFinal.toFixed(2);
}
