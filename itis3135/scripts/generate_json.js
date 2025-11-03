document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("intro-form");
  const heading = document.querySelector("h2");
  const generateBtn = document.getElementById("generateJsonBtn");
  const addCourseBtn = document.getElementById("addCourseBtn");
  const coursesContainer = document.getElementById("coursesContainer");

  if (window.courseScriptLoaded) return;
  window.courseScriptLoaded = true;

  addCourseBtn.addEventListener("click", () => {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");
    courseDiv.innerHTML = `
      <input type="text" placeholder="Department (e.g., ITIS)" required>
      <input type="text" placeholder="Course Number (e.g., 3135)" required>
      <input type="text" placeholder="Course Name" required>
      <input type="text" placeholder="Reason for Taking" required>
      <button type="button" class="deleteCourse">Delete</button>
    `;
    coursesContainer.insertBefore(courseDiv, addCourseBtn);
  });

  coursesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteCourse")) {
      e.target.parentElement.remove();
    }
  });

  generateBtn.addEventListener("click", () => {
    const data = {
      firstName: document.getElementById("firstName").value,
      preferredName: document.getElementById("nickname").value,
      middleInitial: document.getElementById("middleName").value,
      lastName: document.getElementById("lastName").value,
      divider: document.getElementById("divider").value,
      mascotAdjective: document.getElementById("mascotAdj").value,
      mascotAnimal: document.getElementById("mascotAnimal").value,
      image: document.getElementById("picture").value || "images/placeholder.jpg",
      imageCaption: document.getElementById("caption").value,
      personalStatement: document.getElementById("personalStatement").value,
      personalBackground: document.getElementById("personalBackground").value,
      professionalBackground: document.getElementById("professionalBackground").value,
      academicBackground: document.getElementById("academicBackground").value,
      subjectBackground: document.getElementById("subjectBackground").value,
      primaryComputer: document.getElementById("primaryComputer").value,
      courses: [],
      quote: document.getElementById("quote").value,
      quoteAuthor: document.getElementById("quoteAuthor").value
    };

    document.querySelectorAll(".course").forEach((course) => {
      const inputs = course.querySelectorAll("input");
      if (inputs.length >= 4) {
        data.courses.push({
          department: inputs[0].value,
          number: inputs[1].value,
          name: inputs[2].value,
          reason: inputs[3].value
        });
      }
    });

    const jsonText = JSON.stringify(data, null, 2);

    heading.textContent = "Introduction JSON";
    form.innerHTML = `
      <section>
        <pre><code class="language-json">${jsonText}</code></pre>
      </section>
    `;

    hljs.highlightAll();
  });
});