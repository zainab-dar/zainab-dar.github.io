document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("intro-form");
    const generateHtmlBtn = document.getElementById("generateHtmlBtn");
    const coursesContainer = document.getElementById("coursesContainer");
    const resultContainer = document.getElementById("result-container");

    generateHtmlBtn.addEventListener("click", () => {
        let htmlOutput = `
<h2>Introduction</h2>
<p>Name: ${form.firstName.value} ${form.middleName.value} ${form.nickname.value} ${form.lastName.value}</p>
<p>Mascot: ${form.mascotAdj.value} ${form.divider.value} ${form.mascotAnimal.value}</p>
<p>Personal Statement: ${form.personalStatement.value}</p>
<p>Picture: ${form.picture.value.split("\\").pop()} - ${form.caption.value}</p>
<h3>Courses</h3>
<ul>
`;

        // Add courses
        const courseDivs = coursesContainer.querySelectorAll(".course");
        courseDivs.forEach(div => {
            const inputs = div.querySelectorAll("input");
            htmlOutput += `<li>${inputs[0].value} ${inputs[1].value}: ${inputs[2].value} - ${inputs[3].value}</li>`;
        });

        htmlOutput += `</ul>
<p>Quote: "${form.quote.value}" - ${form.quoteAuthor.value}</p>`;

        resultContainer.innerHTML = htmlOutput;
    });
});