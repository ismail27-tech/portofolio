/*==================================================
    EXPERIENCE
==================================================*/

const experienceData = {

    combek: {

        company: "PT. Combek Berkah Sejahtera",

        position: "Web Developer Intern",

        period: "Oktober 2024 - Januari 2025",

        description:
            "Mengembangkan website Company Profile One Auto Service, membangun sistem inventory berbasis web, melakukan analisis kebutuhan pengguna, merancang antarmuka menggunakan Figma, serta implementasi database MySQL.",

        tech: [
            "HTML",
            "CSS",
            "Bootstrap",
            "Code Igniter",
            "PHP",
            "MySQL",
            "Figma"
        ],

        link: "#projects"

    },

    samsung: {

        company: "Samsung Authorized Service Center",

        position: "IT Support Intern",

        period: "Januari 2022 - Maret 2022",

        description:
            "Melakukan troubleshooting perangkat, pemeliharaan perangkat, serta membantu operasional pelayanan teknis kepada pelanggan.",

        tech: [
            "Hardware",
            "Troubleshooting"
        ],

        link: "#"

    }

};


/*==================================================
    ELEMENT
==================================================*/

const experienceItems = document.querySelectorAll(".experience-item");

const experienceCard = document.querySelector(".experience-card");

const companyName = document.getElementById("companyName");

const jobTitle = document.getElementById("jobTitle");

const period = document.getElementById("period");

const description = document.getElementById("description");

const techStack = document.getElementById("techStack");

const projectLink = document.getElementById("projectLink");


/*==================================================
    RENDER
==================================================*/

function renderExperience(key){

    const data = experienceData[key];

    if(!data) return;

    experienceCard.classList.add("fade");

    setTimeout(()=>{

        companyName.textContent = data.company;

        jobTitle.textContent = data.position;

        period.textContent = data.period;

        description.textContent = data.description;

        projectLink.href = data.link;

        techStack.innerHTML = "";

        data.tech.forEach((item)=>{

            const badge = document.createElement("span");

            badge.textContent = item;

            techStack.appendChild(badge);

        });

        experienceCard.classList.remove("fade");

    },180);

}


/*==================================================
    EVENT
==================================================*/

experienceItems.forEach((item)=>{

    item.addEventListener("click",()=>{

        experienceItems.forEach((nav)=>{

            nav.classList.remove("active");

        });

        item.classList.add("active");

        renderExperience(item.dataset.company);

    });

});


/*==================================================
    FIRST LOAD
==================================================*/

renderExperience("combek");