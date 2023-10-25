import { supabase, openai } from "$lib";
import { redirect } from "@sveltejs/kit";

export const config = {
	runtime: 'edge',
}

export async function load() {
	let session = await supabase.auth.getSession();
	if (session.data.session === null) {
		throw redirect(302, '/login')
	}
}


// actions is the sveltekit name for "code that is run after a form is submitted"
// so in the form itself, it says send my data to this function on submit. 
export const actions = {
	get_transcript: async ({ request }: { request: any}) => {
		const formData = await request.formData() as FormData;
		const audioFile = formData.get('audioFile') as File;
		const transcription = await openai.audio.transcriptions.create({
			file: audioFile,
			model: "whisper-1",
		});
		return {
			transcription: transcription,
		}
	},

	ask_gpt: async ({ request }: { request: any}) => {
		const formData = await request.formData() as FormData;
		const transcript = formData.get('transcript')?.valueOf()! as string;
		const response = await openai.chat.completions.create({
			model: "gpt-4",
			messages: [
				{
					"role": "system",
					"content": "Extract useful data from a transcription of an interview. You will be provided with an interview about a patient, when you are, fill each field with information corresponding to the patient, and return a correctly formatted JSON object. Here is an example of a correctly Formatted JSON object:\n{\n\"callerName\":\"name\",\n\"relationshipToPatient\":\"relationship\",\n\"immediateDanger\": false,\n\"descriptionOfDangerIfYes\":\"\",\n\"patientName\": \"name\",\n\"DOB\":\"july 20th 2002\",\n\"gender\":\"male\",\n\"language\":\"spanish\",\n\"address\":\"1234 street road\",\n\"zip\":\"10528\",\n\"insuranceId\":\"12345678\",\n\"hasMedicade\":false,\n\"beenToStVincents\":false,\n\"mostRecentEpisode\":\"a long description of a psychiatric episode\",\n\"diagnosis\":\"a psychiatric diagnosis\",\n\"isMinor\": false,\n\"parentGuardian1NameAndNumber\":\"9145551234\",\n\"parentGuardian2NameAndNumber\":\"9145551234\",\n\"patientLivesWith\":\"parent 1\",\n\"currentlyInSchool\":true,\n\"nameOfSchoolAndGrade\":\"St. Quiet 5th grade\",\n\"specialEducationOrIEP\":\"the patient is not in special education\",\n\"currentlyInTreatment\":false,\n\"currentProviderNameAndNumber\":\"John Smith 9145551234\",\n\"lastAppointmentDate\":\"date\",\n\"nextAppointmentDate\":\"date\",\n\"hasCareCoordinator\":true,\n\"agencyAndNumber\":\"Hospital Agency 9145551234\",\n\"chiefComplaint\":\"Daughter has been dealing with DX of anxiety or PTSD. Mother unsure if daughter was diagnosed with PTSD while in military. DX getting worse. Pt is often crying and tearful, often has nightmares, feeling anxiety, afraid to leave house, is suspicious of neighbors watching her. Pt will states she wouldn’t mind going to sleep and not waking up, though she wants to die, she has never attempted suicide, and no suicidal behaviors. \",\n\"suicidalIdeation\":\"No\",\n\"hommicidalIdeation\":\"No\",\n\"currentViolentBehaviors\":\"No\",\n\"historyOfViolentBehaviors\":\"No\",\n\"auditoryVerbalHallucinations\":\"No\",\n\"paranoia\":\"No\",\n\"accessToWeapons\":\"No\",\n\"substanceUse\":\"No\",\n\"selfinjuriousBehavior\":\"No\",\n\"neglectActivitesofDailyLiving\":\"No\",\n\"significantMedicalIssues\":\"No\",\n\"PrescribedPsychiatricMedications\":\"No\" \n}\nWhen presented with a transcription, respond with a correctly formatted JSON object and nothing else."
				  },
			  	{
					"role": "user",
					"content": transcript,
				}
			],
			temperature: 1,
			max_tokens: 1024,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});
		const responseRaw = response.choices[0].message.content;
		return {
			responseRaw: responseRaw,
		}
	}
}