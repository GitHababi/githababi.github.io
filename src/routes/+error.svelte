<script>
	import { page } from '$app/stores';
</script>

<h1>You did a stupid.</h1>
<p>
	{$page.status}: {$page.error?.message}
</p>
