
// FUNCTIONS FOR TABS

function openSection(evt, sectionNum) {
    var i, tabinfo, tablinks;
    tabinfo = document.getElementsByClassName("tabinfo");
    for (i = 0; i < tabinfo.length; i++) {
        tabinfo[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionNum).style.display = "block";
    evt.currentTarget.className += " active";
    }