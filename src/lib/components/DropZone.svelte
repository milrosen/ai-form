<script lang="ts">
  import { enhance } from "$app/forms";
  import { fromEvent } from "file-selector";
  import { loadingTranscription } from "../../stores";

  let files: FileList;

  let state = {
    displayFile: false,
    file: null,
  } as State;

  type State = {
    displayFile: boolean;
    file: null | File;
  };

  $: {
    if (files) {
      state.displayFile = true;
      state.file = files.item(0);
    }
  }

  function handleEventThen(handleFn: (e: Event) => void) {
    return (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      handleFn(event);
    };
  }

  async function handledrop(event: Event) {
    let [f] = await fromEvent(event);
    let file = f as File;
    state.file = file;
    state.displayFile = true;
  }
</script>

<form
  method="POST"
  action="?/get_transcript"
  use:enhance={({ formData }) => {
    if (state.file == null) {
      throw "no file selected";
    }
    formData.append("audioFile", state.file);
    loadingTranscription.set(true);
  }}
>
  <fieldset
    class="upload_dropzone text-center mb-3 p-4 d-flex flex-column align-items-center"
    class:loading-file={$loadingTranscription}
    on:drop={handleEventThen(handledrop)}
    on:dragenter={handleEventThen(() => {})}
    on:dragover={handleEventThen(() => {})}
  >
    <legend class="visually-hidden">Audio uploader</legend>

    <svg class="upload_svg" width="60" height="60" aria-hidden="true">
      <use href="#icon-audioUpload" />
    </svg>

    <p class="small my-2 width flex-grow-1">
      {#if !state.displayFile}
        Drag &amp; and drop audio file<br /><i>or</i>
      {:else}
        <div class="text-truncate">
          {state.file?.name}
        </div>
      {/if}
    </p>

    <input
      id="upload_audio"
      class="position-absolute invisible"
      type="file"
      bind:files
      accept="audio/*"
    />

    <div class="mb-3">
      <label class="btn btn-dark btn-upload" for="upload_audio">Browse</label>
      {#if state.displayFile}
        <button class="btn btn-dark btn-upload" type="submit"> Upload </button>
      {/if}
    </div>

    <div
      class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"
    />
  </fieldset>
</form>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg style="display:none">
  <defs>
    <symbol id="icon-audioUpload" clip-rule="evenodd" viewBox="0 0 21 21">
      <g
        fill="none"
        fill-rule="evenodd"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6.5 8.5v4" />

        <path d="m8.5 6.5v9" />

        <path d="m10.5 9.5v2" />

        <path d="m12.5 7.5v6.814" />

        <path d="m14.5 4.5v12" />
      </g></symbol
    >
  </defs>
</svg>

<style>
  .upload_dropzone {
    background-color: lightgray;
    border: 3px solid black;
    border-radius: 0.25rem;
    min-height: 245px;
  }
  .width {
    width: 166px;
  }

  .loading-file {
    background-image: linear-gradient(90deg, silver 50%, transparent 50%),
      linear-gradient(90deg, silver 50%, transparent 50%),
      linear-gradient(0deg, silver 50%, transparent 50%),
      linear-gradient(0deg, silver 50%, transparent 50%);
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
    background-position: left top, right bottom, left bottom, right top;
    animation: border-dance 1s infinite linear;
  }
  @keyframes border-dance {
    0% {
      background-position: left top, right bottom, left bottom, right top;
    }
    100% {
      background-position: left 15px top, right 15px bottom, left bottom 15px,
        right top 15px;
    }
  }
</style>
