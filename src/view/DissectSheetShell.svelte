<svelte:options accessors={true} />

<script>
	import { getContext } from "svelte";
	import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
	import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

	export let elementRoot;

	const { application } = getContext("external");
	const { options } = application;
	const { name, img, caption } = options;
	const documents = CONST.DOCUMENT_TYPES.map((type) => [
		...(options[getDocumentClass(type).collectionName] ?? []),
	]).flat();
	console.log(options);
</script>

<ApplicationShell bind:elementRoot>
	<form class="flexrow" autocomplete="off">
		<header class="adventure-header">
			<h1>{name}</h1>
		</header>

		<figure class="adventure-banner">
			<img src={img} {name} height="300" />
			<figcaption>{caption}</figcaption>
		</figure>

		<section class="adventure-overview">
			<h2>Overview</h2>
			<p />
		</section>

		<section class="adventure-contents">
			<h2>Contents</h2>
			<ul>
				<li><i class="fas fa-user fa-fw" /> 4 Actors</li>
			</ul>
		</section>
<!--
		<ol class="directory-list">
			{#each documents as document}
				<li class="directory-item document flexrow">
					<input type="checkbox" checked="true" />
					<img
						class="thumbnail"
						src={document.img}
						alt={document.name}
					/>
					<h4 class="document-name">
						<a>{document.name} ({document.type})</a>
					</h4>
				</li>
			{/each}
		</ol> -->

		<footer class="adventure-footer">
			<button type="submit">
				<i class="fas fa-download" />
				Import Adventure
			</button>
		</footer>
	</form>
</ApplicationShell>
