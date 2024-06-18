document.addEventListener('DOMContentLoaded', function() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateTimeElement.textContent = now.toLocaleDateString('pl-PL', options) + ' ' + now.toLocaleTimeString('pl-PL');
});
