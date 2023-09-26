import {
	writable,
	derived
} from "svelte/store"

export const transcribed_text = writable('');
export const transcribing = writable(false);
export const uploading = writable(false);
export const state = derived([transcribing, uploading], ([$transcribing, $uploading]) => {
	return {
		transcribing: $transcribing,
		uploading: $uploading,
	}
})