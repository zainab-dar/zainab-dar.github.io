document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generateJsonBtn");
  const form = document.querySelector("form");
  const heading = document.querySelector("h2");

  button.addEventListener("click", () => {
    // Collect data from form fields
    const data = {
      firstName: document.getElementById("firstName").value,
      preferredName: document.getElementById("preferredName").value,
      middleInitial: document.getElementById("middleInitial").value,
      lastName: document.getElementById("lastName").value,
      divider: document.getElementById("divider").value,
      mascotAdjective: document.getElementById("mascotAdjective").value,
      mascotAnimal: document.getElementById("mascotAnimal").value,
      image: document.getElementById("image").value,
      imageCaption: document.getElementById("imageCaption").value,
      personalStatement: document.getElementById("personalStatement").value,
      personalBackground: document.getElementById("personalBackground").value,
      professionalBackground: document.getElementById("professionalBackground").value,
      academicBackground: document.getElementById("academicBackground").value,
      subjectBackground: document.getElementById("subjectBackground").value,
      primaryComputer: document.getElementById("primaryComputer").value,
      courses: [],
      links: []
    };

    // Collect courses
    const courseRows = document.querySelectorAll(".course-row");
    courseRows.forEach(row => {
      const dept = row.querySelector(".course-dept").value;
      const num = row.querySelector(".course-num").value;
      const name = row.querySelector(".course-name").value;
      const reason = row.querySelector(".course-reason").value;

      data.courses.push({
        department: dept,
        number: num,
        name: name,
        reason: reason
      });
    });

    // Collect links
    const linkRows = document.querySelectorAll(".link-row");
    linkRows.forEach(row => {
      const name = row.querySelector(".link-name").value;
      const href = row.querySelector(".link-href").value;

      data.links.push({
        name: name,
        href: href
      });
    });

    // Convert to pretty JSON text
    const jsonText = JSON.stringify(data, null, 2);

    // Replace form content with formatted JSON
    heading.textContent = "Introduction JSON";
    form.innerHTML = `
      <section>
        <pre><code class="language-json">${jsonText}</code></pre>
      </section>
    `;

    // Highlight syntax
    hljs.highlightAll();
  });
});
