document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("intro-form");
  const output = document.getElementById("result-container");
  const addCourseBtn = document.getElementById("addCourse"); // matches your HTML
  const clearBtn = document.getElementById("clear");
  const coursesContainer = document.getElementById("courses");

  // Prevent page refresh on submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    generateIntroPage();
  });

  // Add new course row
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

    // Delete button
    courseDiv.querySelector(".deleteCourse").addEventListener("click", () => {
      courseDiv.remove();
    });
  });

  // Clear button functionality
  clearBtn.addEventListener("click", () => {
    form.reset();
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => (input.value = ""));
  });

  // Generate introduction page dynamically
  function generateIntroPage() {
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const nickname = document.getElementById("nickname").value;
    const lastName = document.getElementById("lastName").value;
    const mascotAdj = document.getElementById("mascotAdj").value;
    const mascotAnimal = document.getElementById("mascotAnimal").value;
    const divider = document.getElementById("divider").value;
    const caption = document.getElementById("caption").value;
    const personalStatement = document.getElementById("personalStatement").value;
    const quote = document.getElementById("quote").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;

    // Handle uploaded picture
    const pictureInput = document.getElementById("picture");
    let imageSrc = "images/default.jpg";
    if (pictureInput.files && pictureInput.files[0]) {
      imageSrc = URL.createObjectURL(pictureInput.files[0]);
    }

    // Gather all courses
    const courses = [];
    document.querySelectorAll(".course").forEach((courseDiv) => {
      const fields = courseDiv.querySelectorAll("input");
      courses.push({
        department: fields[0].value,
        number: fields[1].value,
        name: fields[2].value,
        reason: fields[3].value,
      });
    });

    // Generate HTML for courses
    const coursesHTML = courses
      .map(
        (c) =>
          `<li>${c.department} ${c.number}: ${c.name} — <em>${c.reason}</em></li>`
      )
      .join("");

    // Create introduction result
    output.innerHTML = `
      <section class="intro-result">
        <h2>${firstName} ${middleName ? middleName + " " : ""}${lastName}'s Introduction</h2>
        <h3>${mascotAdj} ${mascotAnimal}</h3>
        <hr>
        <p>${personalStatement}</p>
        <figure>
          <img src="${imageSrc}" alt="Profile Picture">
          <figcaption>${caption}</figcaption>
        </figure>
        <h4>Courses I'm Taking:</h4>
        <ul>${coursesHTML}</ul>
        <blockquote>"${quote}" — ${quoteAuthor}</blockquote>
        <button id="reset-form-btn">Start Over</button>
      </section>
    `;

    // Hide the form
    form.style.display = "none";

    // Allow restarting
    document
      .getElementById("reset-form-btn")
      .addEventListener("click", function () {
        form.reset();
        form.style.display = "block";
        output.innerHTML = "";
      });
  }
});