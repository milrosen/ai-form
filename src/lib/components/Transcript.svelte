<script lang="ts">
  import { enhance } from "$app/forms";
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
  }}
>
  <div class="form-group pb-3 h-100">
    <textarea
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
