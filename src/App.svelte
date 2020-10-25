<script>
    import Hi from './Hi.svelte';

    export let name = 'sveltee';
    const renderingTypes = [
        'Client Side Rendering',
        'Server Side Rendering',
        'Pre Rendering'
    ]
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>Rendering types</p>
    <ul>
        {#each renderingTypes as renderingType}
            <li>{renderingType}</li>
        {/each}
    </ul>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <Hi />
</main>

<svelte:head>
    <title>Prerender please</title>
</svelte:head>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

    li {
        list-style-type: none;
        font-size: 2rem;
    }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>