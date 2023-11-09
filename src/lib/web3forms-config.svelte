  <script lang="ts">
    export let API_KEY = ""
  </script>
 
 <input
    type="hidden"
    name="access_key"
    value={API_KEY}
  />

  <input type="hidden" name="subject" value="New Proposal to Hire me" />

  <input type="hidden" name="from_name" value="Alan Valencia | HireMe" />

  <input
    type="checkbox"
    name="botcheck"
    class="hidden"
    style="display: none;"
  />
