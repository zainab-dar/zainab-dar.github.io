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

  generateJsonBtn.addEventListener("click", () => {
    const jsonData = {};

    jsonData.firstName = document.getElementById("firstName").value;
    jsonData.middleName = document.getElementById("middleName").value;
    jsonData.nickname = document.getElementById("nickname").value;
    jsonData.lastName = document.getElementById("lastName").value;
    jsonData.mascotAdj = document.getElementById("mascotAdj").value;
    jsonData.mascotAnimal = document.getElementById("mascotAnimal").value;
    jsonData.divider = document.getElementById("divider").value;

    jsonData.caption = document.getElementById("caption").value;
    jsonData.personalStatement = document.getElementById("personalStatement").value;
    jsonData.quote = document.getElementById("quote").value;
    jsonData.quoteAuthor = document.getElementById("quoteAuthor").value;

    const pictureInput = document.getElementById("picture");
    jsonData.picture = pictureInput.files[0]
      ? pictureInput.files[0].name
      : "default.jpg";

    jsonData.courses = [];
    document.querySelectorAll(".course").forEach((courseDiv) => {
      const fields = courseDiv.querySelectorAll("input");
      jsonData.courses.push({
        department: fields[0].value,
        number: fields[1].value,
        name: fields[2].value,
        reason: fields[3].value,
      });
    });
    output.innerHTML = `<pre>${JSON.stringify(jsonData, null, 2)}</pre>`;
  });

});
