import { supabase } from "$lib";
import { redirect } from "@sveltejs/kit";

export async function load() {
	let session = await supabase.auth.getSession();
	if (session.data.session === null) {
		throw redirect(302, '/login')
	}
}