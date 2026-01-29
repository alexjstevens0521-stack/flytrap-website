async function loadGigs() {
    try {
        const response = await fetch('/static/data/gigs.json');
        const gigs = await response.json();
        const container = document.getElementById('gig-listing');
        const today = new Date();

        // Filter out old gigs
        const upcomingGigs = gigs.filter(gig => {
            const gigDate = new Date(formatDate(gig.date));
            return gigDate >= today;
        });

        // Render upcomming gigs
        container.innerHTML = upcomingGigs.map(gig => `
    <div class="gig-item">
      <span class="date">${gig.date}</span>
      <span class="venue"><strong>${gig.venue}</strong></span>
      <span class="location">${gig.location}</span>
      <a href="${gig.link}" class="ticket-btn">Tickets</a>
    </div>
  `).join('');

        if (upcomingGigs.length == 0) {
            container.innerHTML = "<p>No upcoming shows. More TBA soon!</p>"
        }

    } catch (error) {
        console.error("Error loading gigs:", error);
    }
}

// Format date from UK date to ISO date
function formatDate(date) {
    let day = date.substring(0, 2);
    let month = date.substring(3, 5);
    let year = date.substring(6, 10);
    console.log(year.concat("-", month, "-", day));
    return year.concat("-", month, "-", day);
}

loadGigs();