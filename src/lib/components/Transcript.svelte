<script lang="ts">
  export let text: string;
</script>

<form class="h-100">
  <div class="form-group pb-3 h-100">
    <textarea
      class="form-control h-100"
      id="exampleFormControlTextarea1"
      bind:value={text}
    />
  </div>
</form>
