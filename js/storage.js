
const setupForm = document.getElementById("companySetupForm");

if (setupForm) {
  setupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const companyName = document.getElementById("companyName").value.trim();
    const adminName = document.getElementById("adminName").value.trim();
    const adminEmail = document.getElementById("adminEmail").value.trim().toLowerCase();
    const adminPassword = document.getElementById("adminPassword").value;

    if (!companyName || !adminName || !adminEmail || !adminPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Prevent creating the company setup twice
    if (localStorage.getItem("hcm_company")) {
      alert("Company setup already exists. Please log in.");
      return;
    }

    const company = {
      name: companyName,
      settings: {
        officeStartTime: "09:00",
        graceMinutes: 15,
        yearlyLeaveQuota: 20,
        workingDays: [1, 2, 3, 4, 5]
      }
    };

    const admin = {
      id: Date.now(),
      name: adminName,
      email: adminEmail,
      password: adminPassword,
      role: "admin",
      department: "Administration",
      salary: 0
    };

    localStorage.setItem("hcm_company", JSON.stringify(company));
    localStorage.setItem("hcm_users", JSON.stringify([admin]));
    localStorage.setItem("hcm_session", JSON.stringify({
      userId: admin.id,
      role: "admin"
    }));

    alert("Company created successfully!");

    window.location.href = "pages/Admin.html";
  });
}
