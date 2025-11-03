document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateJsonBtn");
  const addCourseBtn = document.getElementById("add-course-btn");
  const coursesContainer = document.getElementById("courses-container");
  const form = document.getElementById("intro-form");
  const heading = document.querySelector("h2");

  addCourseBtn.addEventListener("click", () => {
    const newCourse = document.createElement("div");
    newCourse.classList.add("course");
    newCourse.innerHTML = `
      <input type="text" placeholder="Department (e.g., ITIS)" required>
      <input type="text" placeholder="Course Number (e.g., 3135)" required>
      <input type="text" placeholder="Course Name" required>
      <input type="text" placeholder="Reason for Taking" required>
      <button type="button" class="deleteCourse">Delete</button>
    `;
    coursesContainer.insertBefore(newCourse, addCourseBtn);
  });
  if (addCourseBtn && coursesContainer) {
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

      // Insert before button, if container contains it
      coursesContainer.insertBefore(courseDiv, addCourseBtn);
    });
  }


  coursesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteCourse")) {
      e.target.parentElement.remove();
    }
  });

  generateBtn.addEventListener("click", () => {
    const data = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      mascotAdjective: document.getElementById("mascotAdj").value,
      mascotAnimal: document.getElementById("mascotAnimal").value,
      personalStatement: document.getElementById("personalStatement").value,
      courses: []
    };

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