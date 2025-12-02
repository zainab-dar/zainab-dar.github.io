document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("intro-form");
  const output = document.getElementById("result-container");
  const clearBtn = document.getElementById("clear");
  const addCourseBtn = document.getElementById("addCourseBtn");
  const coursesContainer = document.getElementById("coursesContainer");
  const generateJsonBtn = document.getElementById("generateJsonBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (confirm("Are you sure you want to submit this form?")) {
      alert("Your form has been submitted!");
     form.submit();
    }
  });

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

    courseDiv.querySelector(".deleteCourse").addEventListener("click", () => {
      courseDiv.remove();
    });
  });
  clearBtn.addEventListener("click", () => {
    form.reset();
    output.innerHTML = "";
  });

});
