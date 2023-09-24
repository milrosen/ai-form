<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
  import { page } from "$app/stores";

  let email = "";
  let password = "";
  let validEmail = false;
  let validPassword = false;
  let isValidatingEmail = false;
  let isValidatingPassword = false;
  let loading = false;

  $: {
    validEmail = validateEmail(email);
    validPassword = validatePassword(password);
  }

  function validateEmail(email: string) {
    return !isValidatingEmail || email.length != 0;
  }
  function validatePassword(password: string) {
    return !isValidatingPassword || password.length >= 8;
  }
</script>

<div class="container mt-5">
  <div class="row d-flex justify-content-center">
    <div class="col-md-6">
      <form
        class="card px-5 py-5"
        id="form1"
        method="POST"
        use:enhance={() => {
          return async ({ result }) => {
            // `result` is an `ActionResult` object
            loading = false;
            applyAction(result);
          };
        }}
      >
        <div class="form-data">
          <fieldset class="forms-inputs mb-4">
            <span>Email</span>
            <input
              autocomplete="off"
              type="email"
              name="email"
              required
              class={validEmail ? "" : "is-invalid"}
              bind:value={email}
              on:focus={() => (isValidatingEmail = true)}
            />
            <div class="invalid-feedback">A valid email is required!</div>
          </fieldset>
          <fieldset class="forms-inputs mb-4">
            <span>Password</span>
            <input
              autocomplete="off"
              type="password"
              name="password"
              required
              class={validPassword ? "" : "is-invalid"}
              bind:value={password}
              on:focus={() => (isValidatingPassword = true)}
            />
            <div class="invalid-feedback">
              Password must be at least 8 characters long!
            </div>
          </fieldset>
          <div class="mb-3">
            <button
              type="submit"
              class="btn btn-dark w-100"
              on:click={() => (loading = true)}>Login</button
            >
          </div>
        </div>
        {#if $page.status === 400}<p class="error">Invalid credentials!</p>{/if}
        <div
          class="spinner-border"
          role="status"
          style={loading ? "" : "display: none"}
        >
          <span class="sr-only">Loading...</span>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  .sr-only {
    color: transparent;
  }
  .error {
    color: red;
  }
  .spinner-border {
    align-self: center;
  }
  .card {
    border: none;
    height: 320px;
  }
  .forms-inputs {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .forms-inputs span {
    position: absolute;
    top: -18px;
    left: 10px;
    background-color: #fff;
    padding: 5px 10px;
    font-size: 15px;
  }
  .forms-inputs input {
    height: 50px;
    border: 2px solid #eee;
  }
  .forms-inputs input:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #000;
  }
  .btn {
    height: 50px;
  }
</style>
