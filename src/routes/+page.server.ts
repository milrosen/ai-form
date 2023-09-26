import { supabase, openai } from "$lib";
import { redirect } from "@sveltejs/kit";
import { uploading, transcribing } from "../stores.js";

export const config = {
	runtime: 'edge',
}

export async function load() {
	let session = await supabase.auth.getSession();
	if (session.data.session === null) {
		throw redirect(302, '/login')
	}
}

export const actions = {
	get_transcript: async ({ request }: { request: any}) => {
		uploading.set(true);
		const formData = await request.formData() as FormData;
		const audioFile = formData.get('audioFile') as File;
		transcribing.set(true);
		const transcription = await openai.audio.transcriptions.create({
			file: audioFile,
			model: "whisper-1",
		});
		return {
			transcription: transcription,
		}
	}
}