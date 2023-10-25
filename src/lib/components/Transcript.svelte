<script lang="ts">
  import { enhance } from "$app/forms";
  import { loadingParseForm } from "../../stores";
  export let text: string;
</script>

<form
  class="h-100 flex-column"
  method="POST"
  action="?/ask_gpt"
  use:enhance={({ formData }) => {
    if (text == null) {
      throw "empty text box";
    }
    formData.append("transcript", text);
    loadingParseForm.set(true);
    return async ({ update }) => {
      await update({ reset: false });
    };
  }}
>
  <div class="form-group pb-3 h-100">
    <textarea
      class:loading-parse={$loadingParseForm}
      class="form-control h-100"
      id="exampleFormControlTextarea1"
      bind:value={text}
    />
    <div class="w-100 d-flex flex-row-reverse">
      <button class="btn btn-dark btn-upload mt-3 ml-auto" type="submit">
        submit transcript
      </button>
    </div>
  </div>
</form>

<style>
  .loading-parse {
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
