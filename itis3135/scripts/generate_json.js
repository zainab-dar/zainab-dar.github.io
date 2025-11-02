document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateJsonBtn");
  const resultContainer = document.getElementById("result-container");
  const form = document.getElementById("intro-form");

  generateBtn.addEventListener("click", () => {
    // Collect data from form
    const data = {
      firstName: document.getElementById("firstName").value,
      middleName: document.getElementById("middleName").value || "",
      preferredName: document.getElementById("nickname").value || "",
      lastName: document.getElementById("lastName").value,
      mascotAdjective: document.getElementById("mascotAdj").value,
      mascotAnimal: document.getElementById("mascotAnimal").value,
      divider: document.getElementById("divider").value,
      image: getImageFile(),
      imageCaption: document.getElementById("caption").value,
      personalStatement: document.getElementById("personalStatement").value,
      courses: getCourses(),
      quote: document.getElementById("quote").value,
      quoteAuthor: document.getElementById("quoteAuthor").value,
      generatedDate: new Date().toLocaleString()
    };

    // Convert to JSON string with indentation
    const jsonText = JSON.stringify(data, null, 2);

    // Display formatted JSON
    resultContainer.innerHTML = `
      <section class="json-output">
        <h2>Generated Introduction JSON</h2>
        <pre><code class="language-json">${jsonText}</code></pre>
      </section>
    `;

    // Highlight JSON syntax
    hljs.highlightAll();
  });

  // Helper: handle image input
  function getImageFile() {
    const pictureInput = document.getElementById("picture");
    if (pictureInput.files && pictureInput.files[0]) {
      return pictureInput.files[0].name;
    }
    return "images/default.jpg";
  }

  // Helper: gather courses into array
  function getCourses() {
    const courses = [];
    document.querySelectorAll(".course").forEach((courseDiv) => {
      const fields = courseDiv.querySelectorAll("input");
      if (fields.length >= 4) {
        courses.push({
          department: fields[0].value,
          number: fields[1].value,
          name: fields[2].value,
          reason: fields[3].value
        });
      }
    });
    return courses;
  }
});