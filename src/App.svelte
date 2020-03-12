<script>
  let inputValue = "";
  let textPresent;
  let API_URL =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

  $: url = textPresent && API_URL + inputValue;

  function checkInputValue() {
    if (!textPresent) {
      return;
    }
    textPresent = !!inputValue ? true : false;
  }

  function dataSubmit(e) {
    if (!inputValue) {
      textPresent = false;
    }
    textPresent = true;
  }
</script>

<style>
  .wrapper {
    max-width: 700px;
    margin: 0 auto;
  }

  .textInput {
    width: 70%;
    height: 40px;
    color: #484848;
    border-width: 1.5px;
    border-style: solid;
    border-color: black;
    padding: 3px;
    font-weight: 700;
  }

  .btn {
    border-radius: 3px;
    background-color: black;
    color: whitesmoke;
    font-weight: 700;
    cursor: pointer;
  }

  img {
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 30px;
	display: block
  }

  a {
    text-align: center;
	display: block;
    font-weight: 700px;
    font-size: 30px;
    color: black;
  }
</style>

<div class="wrapper">
  <h1>QR Code Generator</h1>

  <form on:submit|preventDefault={dataSubmit}>
    <input
      bind:value={inputValue}
      on:input={checkInputValue}
      class="textInput"
      type="text"
      placeholder="Enter any text or url..." />
    <input class="btn" type="submit" value="Submit" />
  </form>

  {#if textPresent}
    <img src={API_URL + inputValue} alt="QR code" />
    <a href={url}>Download</a>
  {:else}
    <p>No QR code yet! ☹️</p>
  {/if}
</div>
