document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("intro-form");
  const clearButton = document.getElementById("clear-btn");
  const addCourseBtn = document.getElementById("add-course-btn");
  const coursesContainer = document.getElementById("courses-container");
  const resultContainer = document.getElementById("result-container");
  const resetLink = document.getElementById("reset-link");

  // Prevent form from reloading the page
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    handleSubmit();
  });

  // Clear all input fields
  clearButton.addEventListener("click", function () {
    Array.from(form.querySelectorAll("input, textarea, select")).forEach(
      (input) => {
        input.value = "";
      }
    );
  });

  // Reset to default prefilled values
  form.addEventListener("reset", function () {
    // Could reset custom fields or dynamic elements here if needed
    coursesContainer.innerHTML = ""; // removes any added courses
  });

  // Add new course fields
  addCourseBtn.addEventListener("click", function () {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");

    courseDiv.innerHTML = `
      <input type="text" placeholder="Department (e.g., ITIS)" required />
      <input type="text" placeholder="Number (e.g., 3135)" required />
      <input type="text" placeholder="Course Name" required />
      <input type="text" placeholder="Reason for Taking" />
      <button type="button" class="delete-course-btn">❌</button>
    `;

    coursesContainer.appendChild(courseDiv);

    // Add delete button functionality
    courseDiv
      .querySelector(".delete-course-btn")
      .addEventListener("click", function () {
        courseDiv.remove();
      });
  });

  // Handle form submission and display result
  function handleSubmit() {
    // Validate required fields
    const requiredInputs = form.querySelectorAll("[required]");
    for (let input of requiredInputs) {
      if (!input.value.trim()) {
        alert("Please fill out all required fields before submitting.");
        return;
      }
    }

    // Gather data
    const formData = new FormData(form);
    let outputHTML = `
      <h2>${formData.get("firstName")} ${formData.get("lastName")}</h2>
      <p><strong>Nickname:</strong> ${formData.get("nickname") || "N/A"}</p>
      <p><strong>Personal Statement:</strong> ${formData.get("statement")}</p>
      <h3>Courses</h3>
      <ul>
    `;

    // Gather all course fields
    const courseDivs = document.querySelectorAll(".course");
    courseDivs.forEach((div) => {
      const inputs = div.querySelectorAll("input");
      if (inputs[0].value && inputs[1].value && inputs[2].value) {
        outputHTML += `<li>${inputs[0].value} ${inputs[1].value}: ${inputs[2].value} - ${inputs[3].value || ""}</li>`;
      }
    });

    outputHTML += `</ul>`;
    outputHTML += `<p><em>“${formData.get("quote") || ""}” — ${formData.get("quoteAuthor") || ""}</em></p>`;
    outputHTML += `<p><strong>Funny Thing:</strong> ${formData.get("funnyThing") || "N/A"}</p>`;
    outputHTML += `<button id="reset-link">Reset Form</button>`;

    // Replace form with generated content
    resultContainer.innerHTML = outputHTML;
    form.style.display = "none";

    // Add functionality to reset the form view
    document.getElementById("reset-link").addEventListener("click", function () {
      resultContainer.innerHTML = "";
      form.style.display = "block";
      form.reset();
    });
  }
});
