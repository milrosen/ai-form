import {
	writable,
} from "svelte/store"

export const transcribedText = writable('');
export const loadingTranscription = writable(false);