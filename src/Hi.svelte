<script>
    import {fade} from 'svelte/transition'
    function click() {
        show = !show;
    }
    let show = false;
</script>

{#if show}
    <div transition:fade>
        Hi!
    </div>
{/if}
<button transition:fade on:click={click}>click</button>