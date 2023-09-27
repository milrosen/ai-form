<script lang="ts">
  export let parsedForm: string;
  let jsonForm: any;

  $: if (parsedForm) {
    jsonForm = JSON.parse(parsedForm);
  }
</script>

<div />
