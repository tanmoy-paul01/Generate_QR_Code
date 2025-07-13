document.getElementById('qrForm').addEventListener('submit', 
    async function(e) {
        e.preventDefault();
        const url = document.getElementById('urlInput').value;

        const res = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });
        const data = await res.json();
        if (data.qrUrl) {
            const qrImage = document.getElementById('qrImage');
            const downloadBtn = document.getElementById('downloadBtn');
            // Set src of QR image
            qrImage.src = data.qrUrl;

            //Set download link href and filename
            downloadBtn.href = data.qrUrl;
            downloadBtn.download = 'qr_code.png';

            // Show QR image
            qrImage.style.display = 'inline-block';
            // Show download button
            downloadBtn.style.display = 'inline-block';
        }

    }
);

const toggleSwitch = document.getElementById('darkToggle');
const modeIcon = document.getElementById('modeIcon');

// Function to set theme + icon
function setTheme(mode) {
  if (mode === 'light') {
    document.body.classList.add('light');
    toggleSwitch.checked = true;
    localStorage.setItem('theme', 'light');
    modeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('light');
    toggleSwitch.checked = false;
    localStorage.setItem('theme', 'dark');
    modeIcon.textContent = '🌙';
  }
}

// Load saved theme on startup
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// Toggle event
toggleSwitch.addEventListener('change', () => {
  const newTheme = toggleSwitch.checked ? 'light' : 'dark';
  setTheme(newTheme);
});


const navLinks = document.querySelectorAll('.active-page');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// handling message email

  const form = document.getElementById("cont-msg-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting the default way

    const formData = new FormData(form);
    const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: jsonData
    })
    .then(async (response) => {
      const result = await response.json();
      if (response.status === 200) {
        alert("✅ Message sent successfully!");
        form.reset(); // Clear the form
      } else {
        alert("❌ Failed to send message: " + result.message);
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("❌ Something went wrong. Please try again later.");
    });
  });

