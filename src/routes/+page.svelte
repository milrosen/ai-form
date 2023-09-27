<script lang="ts">
  import DropZone from "$lib/components/DropZone.svelte";
  import Transcript from "$lib/components/Transcript.svelte";

  import { transcribedText } from "../stores.js";
  import { loadingTranscription } from "../stores.js";
  import { parsedForm } from "../stores.js";

  export let form;
  $: if (form?.transcription) {
    transcribedText.set(form.transcription.text);
    loadingTranscription.set(false);
  }
  $: if (form?.responseRaw) {
    parsedForm.set(form.responseRaw);
  }
</script>

<div class="m-4">
  <h1 class="mb-4">Transcription</h1>
  <div class="container mb-5">
    <div class="row">
      <div class="col col-md-auto">
        <DropZone />
      </div>
      <div class="col col-lg">
        <Transcript text={$transcribedText} />
      </div>
    </div>
  </div>
  <h1>
    Autocomplete powered by Chat-GPT3, who is a robot not a medical
    professional. Please triple check all of the boxes
  </h1>
</div>
