<script>
	import '../app.scss';
</script>

<nav class="dropfade navbar">
	<a style="flex-grow: 1; text-align:center;" href="/">
		<span class="title dropfade">HABABISOFT</span>
	</a>
	<ul class="navitems">
		<li><a href="/">Home</a></li>
		<li><a href="/contact">Contact</a></li>
		<li><a href="https://GitHub.com/GitHababi">GitHub</a></li>
		<li><a href="/game">TofangGuessr</a></li>
	</ul>
</nav>
<div class="content dropfade">
	<slot />
</div>
<div class="footer risefade">
	<small><i> Copyleft Hababisoft Corporation © 2024. All rights unreserved. </i></small>
</div>

<style lang="scss">
	@keyframes dropin {
		0% {
			color: red;
			opacity: 0;
			transform: translateY(-100px);
		}

		100% {
			color: inherit;
			opacity: inherit;
			transform: translateY(0px);
		}
	}

	@keyframes risein {
		0% {
			color: red;
			opacity: 0;
			transform: translateY(100px);
		}

		100% {
			color: inherit;
			opacity: 0.2;
			transform: translateY(0px);
		}
	}

	nav {
		background-color: #222222;
		color: #ffffff;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		flex-direction: row;
		justify-content: flex-end;
		border-bottom: var(--foreground) solid 1px;

		li {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		ul {
			font-family: 'Roboto Mono', monospace;
			padding: 0px;
			a {
				border: 2px solid var(--background2);
				border-radius: 5px;
				&:hover {
					border: 2px solid var(--foreground);
				}
			}
		}
		.title {
			font-family: '5ahra';
			text-align: center;
			font-size: 1.5rem;
			padding-left: 1vw;
			padding-right: 1vw;
			user-select: none;
			transition: all 0.2s ease;
			&:hover {
				text-shadow: 0 0 10px var(--accent);
			}
		}
	}

	a {
		color: inherit;
		text-decoration: inherit;
		transition: all 0.2s ease;
		padding: 5px;
	}

	.content {
		margin: 1rem;
		font-family: 'Roboto Mono', monospace;
		font-size: 1.4rem;
	}

	.dropfade {
		animation: dropin 1s;
		animation-delay: 0.5s;
	}
	.risefade {
		animation: risein 1s;
		animation-delay: 0.5s;
	}
	.navitems {
		display: flex;
		flex-direction: row;
		flex-grow: 10;
		justify-content: center;
		list-style: none;
	}

	@media (min-width: 800px) {
		.navitems {
			justify-content: flex-end;
		}
	}

	.footer {
		position: fixed;
		text-align: right;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: var(--background2);
		opacity: 0.2;
		font-family: 'Roboto Mono', monospace;
	}
</style>
