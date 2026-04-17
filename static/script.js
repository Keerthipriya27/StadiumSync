// Client-side logic for StadiumSync

// Simulated fetching of live data from the backend
async function fetchVenueStatus() {
    try {
        const response = await fetch('/api/venue-status');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        updateDashboard(data);
    } catch (error) {
        console.error("Failed to fetch venue status:", error);
    }
}

function updateDashboard(data) {
    // Update Crowd Heatmap
    const zones = {
        'A': 'zoneA',
        'B': 'zoneB',
        'C': 'zoneC'
    };

    for (let id in zones) {
        const statusElement = document.querySelector(`#zone-${id} .zone-status`);
        const value = data.crowd[zones[id]];
        
        statusElement.textContent = value;
        
        // Reset classes
        statusElement.classList.remove('status-low', 'status-medium', 'status-high');
        statusElement.parentElement.style.borderLeftColor = value === 'Low' ? 'var(--success)' : (value === 'Medium' ? 'var(--warning)' : 'var(--danger)');

        if (value === 'Low') statusElement.classList.add('status-low');
        else if (value === 'Medium') statusElement.classList.add('status-medium');
        else statusElement.classList.add('status-high');
    }

    // Update Queues
    document.getElementById('q-rest-n').textContent = `${data.queues.restrooms_north} min`;
    document.getElementById('q-rest-s').textContent = `${data.queues.restrooms_south} min`;
    document.getElementById('q-pizza').textContent = `${data.queues.food_pizza} min`;
    document.getElementById('q-drinks').textContent = `${data.queues.food_drinks} min`;
}

// Meetup Broadcast Logic
const broadcastBtn = document.getElementById('broadcast-btn');
const statusMsg = document.getElementById('meetup-status');
const locationSelect = document.getElementById('meetup-location');

broadcastBtn.addEventListener('click', () => {
    const loc = locationSelect.value;
    broadcastBtn.disabled = true;
    broadcastBtn.textContent = 'Broadcasting...';
    
    // Simulate network delay
    setTimeout(() => {
        statusMsg.textContent = `✅ Pin shared with friends: ${loc}!`;
        statusMsg.style.display = 'block';
        broadcastBtn.textContent = 'Broadcast Updated';
        broadcastBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            statusMsg.style.display = 'none';
            broadcastBtn.textContent = 'Broadcast to Friends';
        }, 5000);
    }, 1200);
});

// Poll for data every 5 seconds
setInterval(fetchVenueStatus, 5000);

// Initial fetch
fetchVenueStatus();