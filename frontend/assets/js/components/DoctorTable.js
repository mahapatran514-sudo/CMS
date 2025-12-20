import { $ } from "../utils/dom.js";
// import { editPatient, deletePatientAction } from "../controllers/patientController.js";

// Renders the list of doctors into an HTML table
export function renderDoctorTable(doctors) {
  // Get references to the table body where rows will be inserted and the 'no doctors' message
  const body = $("doctorsTableBody");
  const noDoctors = $("noDoctors");

  // Clear any existing rows from the table body before rendering new data
  body.innerHTML = "";

  // Check if the doctor array is empty
  if (doctors.length === 0) {
    // If no doctors are found, display the 'no doctors' message and stop execution
    noDoctors.style.display = "block";
    return;
  }

  // If doctors exist, hide the 'no doctors' message
  noDoctors.style.display = "none";

  // Iterate over each patient object in the provided array
  patients.forEach(patient => {
    // Create a new table row element for the current patient
    const row = document.createElement("tr");
    row.className = "border-b"; // Add styling class (likely Tailwind CSS)

    // Populate the row with dynamic HTML content using a template literal
    row.innerHTML = `
      <td class="px-3 py-2">${doctors.id}</td>
      <td class="px-3 py-2">${doctors.name}</td>
      <td class="px-3 py-2">${doctors.specialization}</td>
      <td class="px-3 py-2">${doctors.schedule}</td>
      <td class="px-3 py-2">${doctors.contact}</td>
      <td class="px-3 py-2 flex space-x-2">
        <!-- Buttons are created with data attributes holding the doctor ID -->
        <button class="bg-yellow-400 hover:bg-yellow-500 text-black py-1 px-3 rounded"
          data-edit="${doctor.id}">Edit</button>
        <button class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          data-delete="${doctor.id}">Delete</button>
      </td>
    `;

    // --- Attach event listeners to the newly created buttons ---

    // Find the 'Edit' button within this specific row and attach a click handler
    // When clicked, call the editDoctor function with the correct doctor ID
    row.querySelector("[data-edit]").onclick = () => editDoctor(doctor.id);

    // Find the 'Delete' button within this specific row and attach a click handler
    // When clicked, call the deleteDoctorAction function with the correct doctor ID
    row.querySelector("[data-delete]").onclick = () => deleteDoctorAction(doctor.id);
    // Append the fully constructed row to the table body
    body.appendChild(row);
  });
}