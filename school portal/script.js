const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click", function(){

        localStorage.removeItem("loggedIn");

        window.location.href = "login.html";

    });

}


if(studentName){

    const sidebarName =
        document.getElementById("studentName");

    const topName =
        document.getElementById("topStudentName");

    if(sidebarName){
        sidebarName.textContent = studentName;
    }

    if(topName){
        topName.textContent = studentName;
    }

}

if(studentName){

    const avatar =
        document.getElementById("avatarLetter");

    if(avatar){
        avatar.textContent =
            studentName.charAt(0).toUpperCase();
    }

}

let notifications = [
    "Attendance Updated",
    "New Result Published",
    "New Notice"
];

const badge =
document.getElementById("notificationCount");

if(badge){

    if(notifications.length === 0){

        badge.style.display = "none";

    }else{

        badge.textContent =
        notifications.length;

    }

}


const studentName = localStorage.getItem("studentName");

if(studentName){

    const welcomeText =
    document.getElementById("welcomeText");

    const hour = new Date().getHours();

    let greeting = "";

    if(hour < 12){
        greeting = "Good Morning";
    }
    else if(hour < 17){
        greeting = "Good Afternoon";
    }
    else if(hour < 21){
        greeting = "Good Evening";
    }
    else{
        greeting = "Good Night";
    }

    if(welcomeText){
        welcomeText.textContent =
        greeting + ", " + studentName + " 👋";
    }
}

/admin 
const savedNotice =
localStorage.getItem("notice");

const latestNotice =
document.getElementById("latestNotice");

if(savedNotice && latestNotice){

    latestNotice.innerHTML =
    "📢 " + savedNotice;

}


/add notice

