function startClock() {
    function updateTime() {
        const d = new Date();

        // Time logic
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let session = "AM";

        if (h === 0) {
            h = 12;
            session = "AM";
        } else if (h === 12) {
            session = "PM";
        } else if (h > 12) {
            h = h - 12;
            session = "PM";
        } else {
            session = "AM";
        }

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        const time = `${h} : ${m} : ${s} ${session}`;
        document.getElementById("clock").innerText = time;

        // Date logic
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
        const dayName = days[d.getDay()];
        const monthName = months[d.getMonth()];
        const dayNumber = d.getDate();
        const year = d.getFullYear();

        const dateString = `${dayName}, ${monthName} ${dayNumber}, ${year}`;
        document.getElementById("date").innerText = dateString;
    }

    updateTime();
    setInterval(updateTime, 1000);
}
