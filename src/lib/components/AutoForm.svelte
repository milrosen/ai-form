<script lang="ts">
  export let intakeForm: string;
  let parsedForm = {
    callerName: "",
    relationshipToPatient: "",
    immediateDanger: false,
    descriptionOfDangerIfYes: "",
    patientName: "",
    DOB: "",
    gender: "",
    language: "",
    address: "",
    zip: "",
    insuranceId: "",
    hasMedicade: false,
    beenToStVincents: false,
    mostRecentEpisode: "",
    diagnosis: "",
    isMinor: false,
    parentGuardian1NameAndNumber: "",
    parentGuardian2NameAndNumber: "",
    patientLivesWith: "",
    currentlyInSchool: false,
    nameOfSchoolAndGrade: "",
    specialEducationOrIEP: "",
    currentlyInTreatment: false,
    currentProviderNameAndNumber: "",
    lastAppointmentDate: "",
    nextAppointmentDate: "",
    hasCareCoordinator: false,
    agencyAndNumber: "",
    chiefComplaint: "",
    suicidalIdeation: "No",
    homicidalIdeation: "No",
    currentViolentBehaviors: "No",
    historyOfViolentBehaviors: "No",
    auditoryVerbalHallucinations: "No",
    paranoia: "No",
    accessToWeapons: "No",
    substanceUse: "No",
    selfinjuriousBehavior: "No",
    neglectActivitesofDailyLiving: "No",
    significantMedicalIssues: "No",
    PrescribedPsychiatricMedications: "No",
  };

  function setForm(form: any) {
    parsedForm = form;
  }

  $: if (intakeForm) {
    setForm(JSON.parse(intakeForm));
  }
</script>

<form class="container mt-5">
  <h1>
    Autocomplete powered by Chat-GPT4, who is a robot not a medical
    professional. Please triple check all of the boxes
  </h1>
  <div class="form-group">
    <label for="callerName">Caller Name:</label>
    <input
      type="text"
      id="callerName"
      name="callerName"
      class="form-control"
      bind:value={parsedForm.callerName}
    />
  </div>

  <div class="form-group">
    <label for="relationshipToPatient">Relationship to Patient:</label>
    <input
      type="text"
      id="relationshipToPatient"
      name="relationshipToPatient"
      class="form-control"
      bind:value={parsedForm.relationshipToPatient}
    />
  </div>

  <div class="form-group form-check">
    <input
      type="checkbox"
      id="immediateDanger"
      name="immediateDanger"
      class="form-check-input"
      bind:checked={parsedForm.immediateDanger}
    />
    <label class="form-check-label" for="immediateDanger"
      >Immediate Danger:</label
    >
  </div>

  <div class="form-group">
    <label for="descriptionOfDangerIfYes">Description of Danger (if yes):</label
    >
    <textarea
      id="descriptionOfDangerIfYes"
      name="descriptionOfDangerIfYes"
      class="form-control"
      bind:value={parsedForm.descriptionOfDangerIfYes}
    />
  </div>

  <div class="form-group">
    <label for="patientName">Patient Name:</label>
    <input
      type="text"
      id="patientName"
      name="patientName"
      class="form-control"
      bind:value={parsedForm.patientName}
    />
  </div>

  <div class="form-group">
    <label for="DOB">Date of Birth:</label>
    <input
      type="text"
      id="DOB"
      name="DOB"
      class="form-control"
      bind:value={parsedForm.DOB}
    />
  </div>

  <div class="form-group">
    <label for="gender">Gender:</label>
    <input
      type="text"
      id="gender"
      name="gender"
      class="form-control"
      bind:value={parsedForm.gender}
    />
  </div>

  <div class="form-group">
    <label for="language">Language:</label>
    <input
      type="text"
      id="language"
      name="language"
      class="form-control"
      bind:value={parsedForm.language}
    />
  </div>

  <div class="form-group">
    <label for="address">Address:</label>
    <input
      type="text"
      id="address"
      name="address"
      class="form-control"
      bind:value={parsedForm.address}
    />
  </div>

  <div class="form-group">
    <label for="zip">Zip Code:</label>
    <input
      type="text"
      id="zip"
      name="zip"
      class="form-control"
      bind:value={parsedForm.zip}
    />
  </div>

  <div class="form-group">
    <label for="insuranceId">Insurance ID:</label>
    <input
      type="text"
      id="insuranceId"
      name="insuranceId"
      class="form-control"
      bind:value={parsedForm.insuranceId}
    />
  </div>

  <div class="form-group form-check">
    <input
      type="checkbox"
      id="hasMedicade"
      name="hasMedicade"
      class="form-check-input"
      bind:checked={parsedForm.hasMedicade}
    />
    <label class="form-check-label" for="hasMedicade">Has Medicaid:</label>
  </div>

  <div class="form-group form-check">
    <input
      type="checkbox"
      id="beenToStVincents"
      name="beenToStVincents"
      class="form-check-input"
      bind:checked={parsedForm.beenToStVincents}
    />
    <label class="form-check-label" for="beenToStVincents"
      >Has Been to St. Vincent's:</label
    >
  </div>

  <div class="form-group">
    <label for="mostRecentEpisode">Most Recent Episode:</label>
    <textarea
      id="mostRecentEpisode"
      name="mostRecentEpisode"
      class="form-control"
      bind:value={parsedForm.mostRecentEpisode}
    />
  </div>

  <div class="form-group">
    <label for="diagnosis">Diagnosis:</label>
    <input
      type="text"
      id="diagnosis"
      name="diagnosis"
      class="form-control"
      bind:value={parsedForm.diagnosis}
    />
  </div>

  <div class="form-group form-check">
    <input
      type="checkbox"
      id="isMinor"
      name="isMinor"
      class="form-check-input"
      bind:checked={parsedForm.isMinor}
    />
    <label class="form-check-label" for="isMinor">Is Minor:</label>
  </div>

  <div class="form-group">
    <label for="parentGuardian1NameAndNumber"
      >Parent/Guardian 1 Name and Number:</label
    >
    <input
      type="text"
      id="parentGuardian1NameAndNumber"
      name="parentGuardian1NameAndNumber"
      class="form-control"
      bind:value={parsedForm.parentGuardian1NameAndNumber}
    />
  </div>

  <div class="form-group">
    <label for="parentGuardian2NameAndNumber"
      >Parent/Guardian 2 Name and Number:</label
    >
    <input
      type="text"
      id="parentGuardian2NameAndNumber"
      name="parentGuardian2NameAndNumber"
      class="form-control"
      bind:value={parsedForm.parentGuardian2NameAndNumber}
    />
  </div>

  <div class="form-group">
    <label for="patientLivesWith">Patient Lives With:</label>
    <input
      type="text"
      id="patientLivesWith"
      name="patientLivesWith"
      class="form-control"
      bind:value={parsedForm.patientLivesWith}
    />
  </div>

  <div class="form-group form-check">
    <input
      type="checkbox"
      id="currentlyInSchool"
      name="currentlyInSchool"
      class="form-check-input"
      bind:checked={parsedForm.currentlyInSchool}
    />
    <label class="form-check-label" for="currentlyInSchool"
      >Currently in School:</label
    >
  </div>

  <div class="form-group">
    <label for="nameOfSchoolAndGrade">Name of School and Grade:</label>
    <input
      type="text"
      id="nameOfSchoolAndGrade"
      name="nameOfSchoolAndGrade"
      class="form-control"
      bind:value={parsedForm.nameOfSchoolAndGrade}
    />
  </div>

  <div class="form-group">
    <label for="specialEducationOrIEP">Special Education or IEP:</label>
    <input
      type="text"
      id="specialEducationOrIEP"
      name="specialEducationOrIEP"
      class="form-control"
      bind:value={parsedForm.specialEducationOrIEP}
    />
  </div>

  <div class="form-group form-check">
    <input
      type="checkbox"
      id="currentlyInTreatment"
      name="currentlyInTreatment"
      class="form-check-input"
      bind:checked={parsedForm.currentlyInTreatment}
    />
    <label class="form-check-label" for="currentlyInTreatment"
      >Currently in Treatment:</label
    >
  </div>

  <div class="form-group">
    <label for="currentProviderNameAndNumber"
      >Current Provider Name and Number:</label
    >
    <input
      type="text"
      id="currentProviderNameAndNumber"
      name="currentProviderNameAndNumber"
      class="form-control"
      bind:value={parsedForm.currentProviderNameAndNumber}
    />
  </div>

  <div class="form-group">
    <label for="lastAppointmentDate">Date of Last Appointment:</label>
    <input
      type="text"
      id="lastAppointmentDate"
      name="lastAppointmentDate"
      class="form-control"
      bind:value={parsedForm.lastAppointmentDate}
    />
  </div>

  <div class="form-group">
    <label for="nextAppointmentDate">Date of Next Appointment:</label>
    <input
      type="text"
      id="nextAppointmentDate"
      name="nextAppointmentDate"
      class="form-control"
      bind:value={parsedForm.nextAppointmentDate}
    />
  </div>

  <div class="form-group form-check">
    <input
      type="checkbox"
      id="hasCareCoordinator"
      name="hasCareCoordinator"
      class="form-check-input"
      bind:checked={parsedForm.hasCareCoordinator}
    />
    <label class="form-check-label" for="hasCareCoordinator"
      >Has Care Coordinator:</label
    >
  </div>

  <div class="form-group">
    <label for="agencyAndNumber">Agency and Number:</label>
    <input
      type="text"
      id="agencyAndNumber"
      name="agencyAndNumber"
      class="form-control"
      bind:value={parsedForm.agencyAndNumber}
    />
  </div>

  <div class="form-group">
    <label for="chiefComplaint">Chief Complaint:</label>
    <textarea
      id="chiefComplaint"
      name="chiefComplaint"
      class="form-control"
      bind:value={parsedForm.chiefComplaint}
    />
  </div>

  <div class="form-group">
    <label for="suicidalIdeation">Suicidal Ideation:</label>
    <select
      id="suicidalIdeation"
      name="suicidalIdeation"
      class="form-control"
      bind:value={parsedForm.suicidalIdeation}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="homicidalIdeation">Homicidal Ideation:</label>
    <select
      id="homicidalIdeation"
      name="homicidalIdeation"
      class="form-control"
      bind:value={parsedForm.homicidalIdeation}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="currentViolentBehaviors">Current Violent Behaviors:</label>
    <select
      id="currentViolentBehaviors"
      name="currentViolentBehaviors"
      class="form-control"
      bind:value={parsedForm.currentViolentBehaviors}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="historyOfViolentBehaviors">History of Violent Behaviors:</label>
    <select
      id="historyOfViolentBehaviors"
      name="historyOfViolentBehaviors"
      class="form-control"
      bind:value={parsedForm.historyOfViolentBehaviors}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="auditoryVerbalHallucinations"
      >Auditory Verbal Hallucinations:</label
    >
    <select
      id="auditoryVerbalHallucinations"
      name="auditoryVerbalHallucinations"
      class="form-control"
      bind:value={parsedForm.auditoryVerbalHallucinations}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="paranoia">Paranoia:</label>
    <select
      id="paranoia"
      name="paranoia"
      class="form-control"
      bind:value={parsedForm.paranoia}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="accessToWeapons">Access to Weapons:</label>
    <select
      id="accessToWeapons"
      name="accessToWeapons"
      class="form-control"
      bind:value={parsedForm.accessToWeapons}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="substanceUse">Substance Use:</label>
    <select
      id="substanceUse"
      name="substanceUse"
      class="form-control"
      bind:value={parsedForm.substanceUse}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="selfinjuriousBehavior">Self-Injurious Behavior:</label>
    <select
      id="selfinjuriousBehavior"
      name="selfinjuriousBehavior"
      class="form-control"
      bind:value={parsedForm.selfinjuriousBehavior}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="neglectActivitesofDailyLiving"
      >Neglect Activities of Daily Living:</label
    >
    <select
      id="neglectActivitesofDailyLiving"
      name="neglectActivitesofDailyLiving"
      class="form-control"
      bind:value={parsedForm.neglectActivitesofDailyLiving}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="significantMedicalIssues">Significant Medical Issues:</label>
    <select
      id="significantMedicalIssues"
      name="significantMedicalIssues"
      class="form-control"
      bind:value={parsedForm.significantMedicalIssues}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div class="form-group">
    <label for="PrescribedPsychiatricMedications"
      >Prescribed Psychiatric Medications:</label
    >
    <select
      id="PrescribedPsychiatricMedications"
      name="PrescribedPsychiatricMedications"
      class="form-control"
      bind:value={parsedForm.PrescribedPsychiatricMedications}
    >
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
