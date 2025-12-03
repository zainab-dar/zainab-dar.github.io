document.addEventListener("DOMContentLoaded", () => {
  const generateHtmlBtn = document.getElementById("generateHtmlBtn");
  const formSection = document.getElementById("result-container"); // output container

  if (!generateHtmlBtn) {
    console.error("Generate HTML button not found!");
    return;
  }

  // Function to escape HTML characters to safely display in <pre><code>
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  generateHtmlBtn.addEventListener("click", () => {
    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const nickname = document.getElementById("nickname").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    const mascotAdj = document.getElementById("mascotAdj").value.trim();
    const mascotAnimal = document.getElementById("mascotAnimal").value.trim();
    const divider = document.getElementById("divider").value.trim();

    const picture = document.getElementById("picture").value.split("\\").pop() || "";
    const caption = document.getElementById("caption").value.trim();

    const personalStatement = document.getElementById("personalStatement").value.trim();
    const quote = document.getElementById("quote").value.trim();
    const quoteAuthor = document.getElementById("quoteAuthor").value.trim();

    // Courses
    const coursesContainer = document.getElementById("coursesContainer");
    const courseDivs = coursesContainer.querySelectorAll(".course");
    let courseListHtml = "";
    courseDivs.forEach((div) => {
      const inputs = div.querySelectorAll("input");
      if (inputs.length >= 4) {
        courseListHtml += `<li>${inputs[0].value} ${inputs[1].value}: ${inputs[2].value} — ${inputs[3].value}</li>\n`;
      }
    });

    // Build the HTML output
    const htmlOutput = `
<h2>Introduction</h2>
<p>Name: ${firstName} ${middleName} ${nickname} ${lastName}</p>
<p>Mascot: ${mascotAdj} ${divider} ${mascotAnimal}</p>
<figure>
  <img src="${picture}" alt="Profile Picture">
  <figcaption>${caption}</figcaption>
</figure>
<p>Personal Statement: ${personalStatement}</p>
<h3>Courses</h3>
<ul>
${courseListHtml}
</ul>
<p>Quote: "${quote}" — ${quoteAuthor}</p>
`;

    // Display in result container
    formSection.innerHTML = `
<section class="html-output">
  <pre><code class="language-html">${escapeHtml(htmlOutput)}</code></pre>
</section>
`;

    // Highlight code using highlight.js
    hljs.highlightAll();
  });
});