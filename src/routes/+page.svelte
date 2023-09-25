<script lang="ts">
  import DropZone from "$lib/components/DropZone.svelte";
  import Transcript from "$lib/components/Transcript.svelte";
</script>

<div class="m-4">
  <h1 class="mb-4">Transcription</h1>
  <div class="container">
    <div class="row">
      <div class="col col-md-auto">
        <DropZone />
      </div>
      <div class="col col-lg">
        <Transcript />
      </div>
    </div>
  </div>
</div>
