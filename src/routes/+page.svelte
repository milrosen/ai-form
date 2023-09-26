<script lang="ts">
  import DropZone from "$lib/components/DropZone.svelte";
  import Transcript from "$lib/components/Transcript.svelte";

  import { transcribedText } from "../stores.js";
  import { loadingTranscription } from "../stores.js";

  let finishedTranscribing = false;

  export let form;
  $: if (form?.transcription) {
    transcribedText.set(form.transcription.text);
    loadingTranscription.set(false);
    finishedTranscribing = true;
  }
</script>

<div class="m-4">
  <h1 class="mb-4">Transcription</h1>
  <div class="container">
    <div class="row">
      <div class="col col-md-auto">
        <DropZone />
      </div>
      <div class="col col-lg">
        <Transcript text={$transcribedText} editable={finishedTranscribing} />
      </div>
    </div>
  </div>
</div>
