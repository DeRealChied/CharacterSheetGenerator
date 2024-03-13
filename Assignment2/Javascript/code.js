// find all the ui elements
let nameInput = document.querySelector('#playerNameInput');
let playerDetails = document.querySelector('#playerDetails');

let birthdayInput = document.querySelector('#birthdayDateInput');
let birthdayDetails = document.querySelector('#birthdayDetails');

let stealth = document.querySelector('#stealthInput');
let combat = document.querySelector('#combatInput');
let SkillStarterDetails = document.querySelector('#SkillStarter');

let classInput = document.querySelector('#playerClassInput');
let classOutput = document.querySelector('#PlayerClass');

let HealthInput = document.querySelector('#PlayerHealthInput');
let HealthOutput = document.querySelector('#PlayerHealth');

let SpeedInput = document.querySelector('#PlayerSpeedInput');
let SpeedOutput = document.querySelector('#PlayerSpeed');

let StrengthInput = document.querySelector('#PlayerStrengthInput');
let StrengthOutput = document.querySelector('#PlayerStrength');

let StealthInput = document.querySelector('#PlayerStealthInput');
let StealthOutput = document.querySelector('#PlayerStealth');

let AlignmentInput = document.querySelector('#PlayerAlignmentInput');
let AlignmentOutput = document.querySelector('#PlayerAlignment');

// perform actions when player tells you to
function ProcessForm()
  { 
     // read player input
     let playerName = nameInput.value;
     let birthdayDate = birthdayInput.value;
     let skillsList = "";
     if(stealth.checked)
      {
        console.log("stealth")
         skillsList += "Stealth ";
      }
     if(combat.checked)
      {
        console.log("combat")
         skillsList += "Combat";
      }
      let playerClass = classInput.value;
      let PlayerHealth = HealthInput.value;
      let PlayerSpeed = SpeedInput.value;
      let PlayerStrength = StrengthInput.value;
      let PlayerStealth = StealthInput.value;
      let PlayerAlignment = document.querySelector('input[name="AlignmentInput"]:checked').value;


     // calcultate game state
     let output = "Hello, " + playerName;
     // update ui to show latest game state
     playerDetails.innerHTML = output;
     birthdayDetails.innerHTML = birthdayDate;
     SkillStarterDetails.innerHTML = skillsList;
     classOutput.innerHTML = playerClass;
     HealthOutput.innerHTML = PlayerHealth;
     SpeedOutput.innerHTML = PlayerSpeed;
     StrengthOutput.innerHTML = PlayerStrength;
     StealthOutput.innerHTML = PlayerStealth;
     AlignmentOutput.innerHTML = PlayerAlignment;
  }



