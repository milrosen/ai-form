import { supabase } from "$lib";
import { redirect, fail } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	let session = await supabase.auth.getSession();
	if (session.data.session !== null) {
		throw redirect(302, '/')
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }: {request:any}) => {
		const formData = await request.formData();
		const {data, error} = await supabase.auth.signInWithPassword({
			email: formData.get('email'),
			password: formData.get('password'),
		})
		if (error) {
			return fail(400, { incorrect: true });
		}
		throw redirect(307, '/');
	}
}