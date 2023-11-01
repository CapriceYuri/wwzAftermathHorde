import { userData_JapanH, userData_RomeH, userData_SKH, userData_NYH, userData_JH } from "./data.js";
import { userData_JapanN, userData_RomeN, userData_SKN, userData_NYN, userData_JN } from "./data.js";
import { data } from "./data.js"

const summary = document.querySelector("#btnradio0") as HTMLInputElement;
const summaryBox = document.querySelector(".BOX0") as HTMLInputElement;

const hardSelect = document.querySelector("#btnradio1") as HTMLInputElement;
const hardBox = document.querySelector(".BOX1") as HTMLInputElement;

const normalSelect = document.querySelector("#btnradio2") as HTMLInputElement;
const normalBox = document.querySelector(".BOX2") as HTMLInputElement;

// Content Tabs Logic
summary.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none';
    normalSelect.checked = false;;
    normalBox.style.display = 'none';
    summaryBox.style.display = 'block';
})
normalSelect.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none'
    summary.checked = false;
    summaryBox.style.display = 'none'
    normalBox.style.display = 'block'
})
hardSelect.addEventListener('click', () => {
    normalSelect.checked = false;
    normalBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    hardBox.style.display = 'block'
})

// Hard/Normal Maps
const japanH = document.querySelector(".h-japan") as HTMLTableSectionElement;
const romeH = document.querySelector(".h-rome") as HTMLTableSectionElement;
const skH = document.querySelector(".h-sk") as HTMLTableSectionElement;
const nyH = document.querySelector(".h-ny") as HTMLTableSectionElement;
const jH = document.querySelector(".h-j") as HTMLTableSectionElement;

const japanN = document.querySelector(".n-japan") as HTMLTableSectionElement;
const romeN = document.querySelector(".n-rome") as HTMLTableSectionElement;
const skN = document.querySelector(".n-sk") as HTMLTableSectionElement;
const nyN = document.querySelector(".n-ny") as HTMLTableSectionElement;
const jN = document.querySelector(".n-j") as HTMLTableSectionElement;

// LEADERBOARD
const xltH_board = document.querySelector('#leaderboard_xltH') as HTMLElement;
const xlrH_board = document.querySelector('#leaderboard_xlrH') as HTMLElement;
const skH_board = document.querySelector('#leaderboard_skH') as HTMLElement;
const nyH_board = document.querySelector('#leaderboard_nyH') as HTMLElement;
const jH_board = document.querySelector('#leaderboard_jH') as HTMLElement;

const xltHV = document.querySelector("#xltHV") as HTMLElement;
const xlrHV = document.querySelector("#xlrHV") as HTMLElement;
const skHV = document.querySelector("#skHV") as HTMLElement;
const nyHV = document.querySelector("#nyHV") as HTMLElement;
const jHV = document.querySelector("#jHV") as HTMLElement;


const xltN_board = document.querySelector('#leaderboard_xltN') as HTMLElement;
const xlrN_board = document.querySelector('#leaderboard_xlrN') as HTMLElement;
const skN_board = document.querySelector('#leaderboard_skN') as HTMLElement;
const nyN_board = document.querySelector('#leaderboard_nyN') as HTMLElement;
const jN_board = document.querySelector('#leaderboard_jN') as HTMLElement;

const xltNV = document.querySelector("#xltNV") as HTMLElement;
const xlrNV = document.querySelector("#xlrNV") as HTMLElement;
const skNV = document.querySelector("#skNV") as HTMLElement;
const nyNV = document.querySelector("#nyNV") as HTMLElement;
const jNV = document.querySelector("#jNV") as HTMLElement;



// Content Entry Logic
interface RecordInfo {
    player: string,
    wave: string,
    src: string,
    src2?: string,
    team?: string,
    medal?: string
    member?: Array<string>
    date?: string
}

function addRecord(obj: RecordInfo, chapter: Element): void {
    const tempRow = document.createElement("tr") as HTMLTableRowElement;
    tempRow.classList.add("text-center", "align-middle")
    chapter.appendChild(tempRow);
    const map = document.createElement("td");
    let group = undefined;
    let whitespace = undefined;
    map.textContent = "";
    tempRow.appendChild(map);
    if (obj.medal !== undefined) {
        if (obj.medal === "First") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/firstPlace.png");
            map.appendChild(medalGold)
        }
        if (obj.medal === "Second") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/secondPlace.png");
            map.appendChild(medalGold)
        }
        if (obj.medal === "Third") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/thirdPlace.png");
            map.appendChild(medalGold)
        }
    }
    if (obj.team === "solo") {
        group = document.createElement("i");
        whitespace = document.createElement("span")
        whitespace.textContent = " "
        map.appendChild(whitespace)
        group.classList.add('fa-solid', 'fa-person-rifle', 'text-danger');
        map.appendChild(group);
    } else {
        group = document.createElement("i");
        whitespace = document.createElement("span")
        whitespace.textContent = " "
        map.appendChild(whitespace)
        group.classList.add('fa-solid', 'fa-people-group', 'text-success');
        map.appendChild(group);
    }
    if (obj.member !== undefined) {
        const teamBtn = document.createElement('button');
        teamBtn.classList.add("btn", "dropdown-toggle", "text-light", "rounded-pill");
        teamBtn.textContent = obj.player;
        teamBtn.style.backgroundColor = "#1e1e1e"
        teamBtn.style.borderRadius = "0"
        teamBtn.style.borderColor = "#1e1e1e"
        teamBtn.setAttribute("type", "btn")
        teamBtn.setAttribute("data-bs-toggle", "dropdown");
        const teamUL = document.createElement("ul");
        teamUL.classList.add("dropdown-menu", "z-3", "bg-dark", "text-center", "fw-bold");

        const member1 = document.createElement("li")
        member1.classList.add('dropdown-item-text', 'text-light')
        const member2 = document.createElement("li")
        member2.classList.add('dropdown-item-text', 'text-light')
        const member3 = document.createElement("li")
        member3.classList.add('dropdown-item-text', 'text-light')
        const member4 = document.createElement("li")
        member4.classList.add('dropdown-item-text', 'text-light')
        const member5 = document.createElement("li")
        member5.classList.add('dropdown-item-text', 'text-light')
        member1.textContent = obj.member[0];
        member2.textContent = obj.member[1];
        member3.textContent = obj.member[2];
        member4.textContent = obj.member[3];
        member5.textContent = obj.member[4];


        teamUL.appendChild(member1);
        teamUL.appendChild(member2);
        teamUL.appendChild(member3);
        teamUL.appendChild(member4);
        teamUL.appendChild(member5);
        teamBtn.appendChild(teamUL);
        tempRow.classList.add('dropup')
        tempRow.appendChild(teamBtn);

    } else {
        const player = document.createElement("td");
        player.textContent = obj.player;
        tempRow.appendChild(player);
    }
    const waves = document.createElement("td");
    waves.textContent = obj.wave;
    tempRow.appendChild(waves);

    const src = document.createElement("td");
    const link = document.createElement("a")
    const link2 = document.createElement("a")

    if (obj.src2 !== undefined) {
        link.textContent = 'P1'
        link.href = obj.src;
        link.target = "_blank"
        link2.textContent = ' P2'
        link2.href = obj.src2;
        link2.target = "_blank"
        src.appendChild(link)
        src.appendChild(link2)
        tempRow.appendChild(src);
    } else {
        link.textContent = 'Full'
        link.href = obj.src;
        link.target = "_blank"
        src.appendChild(link)
        tempRow.appendChild(src);
    }
}

// INITIAL ENTRY SORT,ORDER,CHECK
function recordSort(a: any, b: any) {
    return a.wave - b.wave;
}


function checkSameStanding(obj: Array<RecordInfo>) {
    let first: number = parseInt(obj[0].wave);
    let second = 0;
    let third = 0;

    for (let i = 1; i < obj.length; i++) {
        if (parseInt(obj[i].wave) > first) {
            second = first;
            first = parseInt(obj[i].wave);
        } else if (parseInt(obj[i].wave) > second && parseInt(obj[i].wave) < first) {
            third = second;
            second = parseInt(obj[i].wave);
        } else if (parseInt(obj[i].wave) > third && parseInt(obj[i].wave) < second) {
            third = parseInt(obj[i].wave);
        }
    }

    const finalizedfirst = first.toString();
    const finalizedsecond = second.toString();
    const finalizedthird = third.toString();

    for (let j = 0; j < obj.length; j++) {
        if (obj[j].wave === finalizedfirst) {
            obj[j].medal = 'First';
        }
        if (obj[j].wave === finalizedsecond) {
            obj[j].medal = 'Second';
        }
        if (obj[j].wave === finalizedthird) {
            obj[j].medal = 'Third';
        }
    }
}

// DATA ENTRY FUNCTION
function dataSubmission(arr: Array<RecordInfo>, location: Element): void {
    let sorting = arr.sort(recordSort).reverse();
    checkSameStanding(arr);
    for (let i = 0; i < sorting.length; i++) {
        addRecord(sorting[i], location);
    }
}

// CALLING FOR HARD
dataSubmission(userData_JapanH, japanH);
dataSubmission(userData_RomeH, romeH);
dataSubmission(userData_SKH, skH);
dataSubmission(userData_NYH, nyH);
dataSubmission(userData_JH, jH);

// CALLING FOR NORMAL
dataSubmission(userData_JapanN, japanN);
dataSubmission(userData_RomeN, romeN);
dataSubmission(userData_SKN, skN);
dataSubmission(userData_NYN, nyN);
dataSubmission(userData_JN, jN);

// LEADERBOARD ENTRY
const skullType: NodeListOf<Element> = document.querySelectorAll(".skull");


const leaderboardRecord = [xltH_board, xlrH_board, skH_board, nyH_board, jH_board, xltN_board, xlrN_board, skN_board, nyN_board, jN_board]

const leaderboardRecordValue = [userData_JapanH[0].player, userData_RomeH[0].player, userData_SKH[0].player, userData_NYH[0].player, userData_JH[0].player, userData_JapanN[0].player, userData_RomeN[0].player, userData_SKN[0].player, userData_NYN[0].player, userData_JN[0].player]

for (let i = 0; i < leaderboardRecord.length; i++) {
    leaderboardRecord[i].textContent = leaderboardRecordValue[i];
}

// Simplified Entry
const leaderboardHardWave = [xltHV, xlrHV, skHV, nyHV, jHV, xltNV, xlrNV, skNV, nyNV, jNV];

const leaderboardHardWaveValue = [userData_JapanH[0].wave, userData_RomeH[0].wave, userData_SKH[0].wave, userData_NYH[0].wave, userData_JH[0].wave, userData_JapanN[0].wave, userData_RomeN[0].wave, userData_SKN[0].wave, userData_NYN[0].wave, userData_JN[0].wave]

for (let i = 0; i < leaderboardHardWave.length; i++) {
    if (parseInt(leaderboardHardWaveValue[i]) >= 90) {
        skullType[i].attributes[0].value = "images/yellowskull.png";
        skullType[i].classList.add("vibrate");
        leaderboardHardWave[i].classList.add("h2", "text-bold", "text-warning")
        leaderboardHardWave[i].textContent = leaderboardHardWaveValue[i]
    }
    else if (parseInt(leaderboardHardWaveValue[i]) >= 70) {
        skullType[i].attributes[0].textContent = "images/redskull.png";
        skullType[i].classList.add("flick");
        leaderboardHardWave[i].classList.add("h4", "text-bold", "text-danger")
        leaderboardHardWave[i].textContent = leaderboardHardWaveValue[i]
    } else {
        skullType[i].attributes[0].value = "images/whiteskull.png";
        leaderboardHardWave[i].textContent = leaderboardHardWaveValue[i]
    }
}

// LIGHT & DARK MODE
const lightModeBtn = document.querySelector("#light-mode") as HTMLButtonElement;
const darkModeBtn = document.querySelector("#dark-mode") as HTMLButtonElement;
const pageBody = document.querySelector("body") as HTMLBodyElement;

lightModeBtn.addEventListener('click', () => {
    pageBody.style.backgroundColor = "#696969";
    darkModeBtn.style.display = "block";
    lightModeBtn.style.display = "none";

    leaderboardRecord.forEach(ele => ele.classList.add("text-dark", "transition"))



})

darkModeBtn.addEventListener('click', () => {
    pageBody.style.backgroundColor = "#1e1e1e"
    darkModeBtn.style.display = "none";
    lightModeBtn.style.display = "block";

    leaderboardRecord.forEach(ele => ele.classList.remove("text-dark"))
    leaderboardRecord.forEach(ele => ele.classList.add("text-light"))

})

// Calculate Record Time
const timeAgo = document.querySelectorAll(".timeago");


const todayDate = new Date();

const getMonth = (todayDate.getMonth()) + 1;
const getDay = todayDate.getDate();
const getYear = todayDate.getFullYear();
const formattedToday = new Date(`${getMonth}/${getDay}/${getYear}`)


for (let x = 0; x < timeAgo.length; x++) {
    let temp = new Date(`${data[x][0].date}`)
    let tempNum = (Math.floor((formattedToday.getTime() - temp.getTime()) / (86400000))).toString()
    if (+tempNum > 60) {
        timeAgo[x].classList.add("text-danger", "h3");
    } else if (+tempNum > 30) {
        timeAgo[x].classList.add("text-warning", "h5");
    }
    timeAgo[x].textContent = tempNum
}
console.log(todayDate);
console.log(formattedToday);
console.log(data)