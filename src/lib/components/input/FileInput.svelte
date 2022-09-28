<script lang="ts">
    export let csrf: string;
    export let name = "file";
</script>

<input id="input-image-profile" type="file" {name}/>
<label for="input-image-profile" data-accept=".jpg, .png"></label>
<input type="hidden" name="csrf" value={csrf}/>