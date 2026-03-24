function showAlert() {
    alert("Form submitted successfully!");
}
function toggleExercises(card) {
    let list = card.querySelector(".exercise-list");

    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}
// Handle form submission
function handleForm(event) {
    event.preventDefault();

    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let workout = document.querySelector("select[name='workout']").value;
    let feedback = document.querySelector("textarea[name='feedback']").value;

    // Store data in localStorage
    let data = {
        name,
        email,
        workout,
        feedback
    };

    localStorage.setItem("fitnessData", JSON.stringify(data));

    // Redirect
    window.location.href = "result.html";
}