const jobsData = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 – $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "Not Applied",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 – $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have a strong portfolio and experience with modern web design trends.",
    status: "Not Applied",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "New York, NY",
    type: "Full-time",
    salary: "$95,000 – $140,000",
    description: "Transform complex datasets into compelling visual stories. Proficiency in D3.js and Tableau is required.",
    status: "Not Applied",
  },
  {
    id: 4,
    company: "CloudNine Tech",
    position: "Backend Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 – $160,000",
    description: "Design and maintain scalable backend systems using Node.js and AWS. Experience with microservices architecture is preferred.",
    status: "Not Applied",
  },
  {
    id: 5,
    company: "GreenByte AI",
    position: "Machine Learning Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$145,000 – $200,000",
    description: "Develop and deploy ML models for climate tech solutions. Strong Python and PyTorch background required.",
    status: "Not Applied",
  },
  {
    id: 6,
    company: "Pixel & Pen Studio",
    position: "UI/UX Designer",
    location: "San Francisco, CA",
    type: "Contract",
    salary: "$70,000 – $100,000",
    description: "Shape user experiences for early-stage startups. Figma expertise and a strong design portfolio are essential.",
    status: "Not Applied",
  },
  {
    id: 7,
    company: "FinTrack Systems",
    position: "Full Stack Developer",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$100,000 – $150,000",
    description: "Build and maintain financial dashboards using React and Django. FinTech industry experience is a big plus.",
    status: "Not Applied",
  },
  {
    id: 8,
    company: "EduLeap Platform",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$85,000 – $120,000",
    description: "Create engaging, accessible learning interfaces for students worldwide. Experience with Next.js and WCAG accessibility standards required.",
    status: "Not Applied",
  },
];
let jobs = jobsData.map((j) => ({ ...j }));
let activeTab = "All";

function getFilteredJobs() {
  if (activeTab === "All") return jobs;
  return jobs.filter((j) => j.status === activeTab);
}

function getBadgeClass(status) {
  if (status === "Interview") return "badge-interview";
  if (status === "Rejected") return "badge-rejected";
  return "badge-not";
}

function getBadgeText(status) {
  return status === "Not Applied" ? "NOT APPLIED" : status.toUpperCase();
}
function updateStats() {
  document.getElementById("count-total").textContent = jobs.length;
  document.getElementById("count-interview").textContent = jobs.filter((j) => j.status === "Interview").length;
  document.getElementById("count-rejected").textContent = jobs.filter((j) => j.status === "Rejected").length;

  const filtered = getFilteredJobs();
  const total = jobs.length;
  const shown = filtered.length;
  const label = shown === total ? `${total} jobs` : `${shown} of ${total} jobs`;
  document.getElementById("jobs-count-label").textContent = label;
}
function renderCards() {
  const container = document.getElementById("cards-container");
  const filtered = getFilteredJobs();
  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <img src="./jobs.png" alt="">
        <h3>No jobs available</h3>
        <p>Check back soon for new job opportunities</p>
      </div>
    `;
    updateStats();
    return;
  }
  filtered.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.style.animationDelay = index * 0.05 + "s";
    card.dataset.id = job.id;

    card.innerHTML = `
      <div class="card-top">
        <div>
          <div class="company-name">${job.company}</div>
          <div class="position">${job.position}</div>
        </div>
        <button class="btn-delete" title="Remove job">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
          </svg>
        </button>
      </div>
      <div class="meta">
        ${job.location} <span>•</span> ${job.type} <span>•</span> ${job.salary}
      </div>
      <div class="status-badge ${getBadgeClass(job.status)}">
        ${getBadgeText(job.status)}
      </div>
      <div class="description">${job.description}</div>
      <div class="card-actions">
        <button class="btn-interview ${job.status === "Interview" ? "active" : ""}">INTERVIEW</button>
        <button class="btn-rejected ${job.status === "Rejected" ? "active" : ""}">REJECTED</button>
      </div>
    `;
    card.querySelector(".btn-interview").addEventListener("click", () => setStatus(job.id, "Interview"));
    card.querySelector(".btn-rejected").addEventListener("click", () => setStatus(job.id, "Rejected"));
    card.querySelector(".btn-delete").addEventListener("click", () => deleteJob(job.id));

    container.appendChild(card);
  });

  updateStats();
}
function setStatus(id, newStatus) {
  const job = jobs.find((j) => j.id === id);
  if (!job) return;

  if (job.status === newStatus && activeTab !== "All") return;
  job.status = job.status === newStatus ? "Not Applied" : newStatus;

  renderCards();
}
function deleteJob(id) {
  jobs = jobs.filter((j) => j.id !== id);
  renderCards();
}
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeTab = btn.dataset.tab;
    renderCards();
  });
});

renderCards();

