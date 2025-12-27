console.log("✅ initBillingController module loaded");

import { 
    apiGetAll, 
    apiGetOne, 
    apiCreate, 
    apiUpdate, 
    apiDelete 
} from "../services/billingService.js";

// import { showAlert } from "../components/Alert.js";
import { renderBillingTable } from "../components/BillingTable.js";
import { resetForm, fillForm } from "../components/BillingForm.js";

import { setState, getState } from "../state/store.js";
import { $, createElement } from "../utils/dom.js";

// Setup event listeners and load initial data
// Initialize the main logic and set up all necessary event listeners
export function initBillingController() {
  // Start by fetching and displaying all billing data immediately upon load
  loadBills();

  // --- Handle Form Submissions ---

  // Attach a listener to the 'submit' event of the billing input form
  $("billingForm").addEventListener("submit", async (e) => {
    // Prevent the browser's default form submission behavior (page refresh)
    e.preventDefault();

    // Collect data from the input fields using the custom '$' selector
    const data = {
      patient_id: $("patient_id").value.trim(),   // Get patient name
      doctor_attended: $("doctor_attended").value.trim(),     // Get doctor name
      amount: $("amount").value.trim(),             // Get billing amount
      bill_date: $("bill_date").value.trim()// Get payment status
    };

    // Check the application state to see if we are currently editing an existing record
    const { editingId } = getState();

    // Use a ternary operator to decide which action to take:
    editingId
      ? await updateBill(editingId, data) // If editingId exists, update the bill
      : await createNewBill(data);        // Otherwise, create a new bill
  });

  // --- Handle Cancel Button Click ---

  // Attach a listener to the 'click' event of the cancel button
  $("cancelBtn").addEventListener("click", () => {
    // Clear the editing state (set the ID to null)
    setState({ editingId: null });
    // Clear all input fields in the form
    resetForm();
  });
}


// Fetch all billing data from the API and update the user interface
export async function loadBills() {
  // Get references to the loading spinner and the main data table elements
  const spinner = $("loadingSpinner");
  const table = $("billingTableContainer");

  // Show the spinner and hide the table to indicate a loading state
  spinner.style.display = "block";
  table.style.display = "none";

  // Asynchronously fetch all billing records from the backend API
  const bills = await apiGetAll();

  // Store the retrieved billing array in the application's global state
  setState({ bills });
  // Render the fetched billing data into the HTML table structure
  renderBillingTable(bills);

  // Hide the spinner and show the table now that the data is loaded and displayed
  spinner.style.display = "none";
  table.style.display = "block";
}


// Create a new bill
export async function createNewBill(data) {
  const res = await apiCreate(data);
  if (res.ok) {
    showAlert("Bill added!");
    resetForm();
    loadBills();
  }
}

// Load a bill into the form for editing
export async function editBill(id) {
  const bill = await apiGetOne(id);

  setState({ editingId: id });
  fillForm(bill);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Update an existing bill
export async function updateBill(id, data) {
  const res = await apiUpdate(id, data);
  if (res.ok) {
    showAlert("Updated!");
    resetForm();
    setState({ editingId: null });
    loadBills();
  }
}

// Delete a bill
export async function deleteBillAction(id) {
  if (!confirm("Delete this bill?")) return;

  const res = await apiDelete(id);
 	if (res.ok) {
    showAlert("Deleted!");
    loadBills();
  }
}
