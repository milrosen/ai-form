<script lang="ts">
  import AutoForm from "$lib/components/AutoForm.svelte";
  import DropZone from "$lib/components/DropZone.svelte";
  import Transcript from "$lib/components/Transcript.svelte";

  import { transcribedText } from "../stores.js";
  import { loadingTranscription, loadingParseForm } from "../stores.js";
  import { intakeForm } from "../stores.js";

  export let form;
  $: if (form?.transcription) {
    transcribedText.set(form.transcription.text);
    loadingTranscription.set(false);
  }
  $: if (form?.responseRaw) {
    intakeForm.set(form.responseRaw);
    loadingParseForm.set(false);
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
    <AutoForm intakeForm={$intakeForm} />
  </div>
  <div />
</div>
