document.addEventListener("DOMContentLoaded", () => {
  const generateHtmlBtn = document.getElementById("generateHtmlBtn");

  generateHtmlBtn.addEventListener("click", () => {
    // Collect the form data (you can adjust these IDs to match yours)
    const name = document.getElementById("name").value.trim();
    const mascot = document.getElementById("mascot").value.trim();
    const imageSrc = document.getElementById("image").value.trim();
    const imageAlt = document.getElementById("imageAlt").value.trim();
    const caption = document.getElementById("caption").value.trim();
    const personalBackground = document.getElementById("personalBackground").value.trim();
    const professionalBackground = document.getElementById("professionalBackground").value.trim();
    const academicBackground = document.getElementById("academicBackground").value.trim();
    const webDevBackground = document.getElementById("webDevBackground").value.trim();
    const computerPlatform = document.getElementById("computerPlatform").value.trim();
    const courses = document.querySelectorAll(".course");

    // Build the inner list items for courses
    let courseList = "";
    courses.forEach(course => {
      const inputs = course.querySelectorAll("input");
      if (inputs.length >= 4) {
        courseList += `
        <li>
          <strong>${inputs[0].value} ${inputs[1].value}:</strong> ${inputs[2].value} — ${inputs[3].value}
        </li>`;
      }
    });

    // Create the HTML structure for the introduction
    const htmlOutput = `
<h2>Introduction HTML</h2>
<h3>${name} ★ ${mascot}</h3>
<figure>
  <img src="${imageSrc}" alt="${imageAlt}">
  <figcaption>${caption}</figcaption>
</figure>
<ul>
  <li><strong>Personal Background:</strong> ${personalBackground}</li>
  <li><strong>Professional Background:</strong> ${professionalBackground}</li>
  <li><strong>Academic Background:</strong> ${academicBackground}</li>
  <li><strong>Web Development Background:</strong> ${webDevBackground}</li>
  <li><strong>Computer Platform:</strong> ${computerPlatform}</li>
  <li><strong>Courses:</strong>
    <ul>
      ${courseList}
    </ul>
  </li>
</ul>
`;

    // Replace the form content
    const formSection = document.getElementById("intro-form-section");
    formSection.innerHTML = `
      <h2>Introduction HTML</h2>
      <section class="html-output">
        <pre><code class="language-html">${escapeHtml(htmlOutput)}</code></pre>
      </section>
    `;

    // Re-run syntax highlighting
    hljs.highlightAll();
  });

  // Function to escape HTML characters so they render as code
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
});