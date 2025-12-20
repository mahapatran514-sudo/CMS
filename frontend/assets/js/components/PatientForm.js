import { $, createElement } from "../utils/dom.js";

// Resets the input form to its default state for creating a new patient
export function resetForm() {
  // Use the native .reset() method on the HTML form element
  $("patientForm").reset();

  // Change the submit button text back to "Add Patient"
  $("submitBtn").textContent = "Add patient";

  // Hide the "Cancel" button, as we are no longer in 'edit' mode
  $("cancelBtn").style.display = "none";
}

// Populates the input form fields with data from a selected patient object (for editing)
export function fillForm(patient) {
  // Fill each input field with the corresponding property from the patient data
  $("name").value = patient.name;
  $("email").value = patient.email;
  $("course").value = patient.course;
  $("year").value = patient.year;

  // Change the submit button text to "Update Patient"
  $("submitBtn").textContent = "Update Patient";

  // Show the "Cancel" button, allowing the user to exit 'edit' mode
  $("cancelBtn").style.display = "inline-block";
}