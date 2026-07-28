

<svelte:head>
	<title>About</title>
</svelte:head>


<!-- Core Elements to Include (in roughly this order)

A strong, personal opening sentence or short paragraph
Start with something warm and direct that tells visitors who you are in 1–2 lines.
Examples that perform well:
"I'm Sean, a one-man woodworking shop in Minnesota turning locally sourced walnut, cherry, and oak into furniture that will outlive us all."
"After 15 years of making sawdust, I still get the same rush from a perfectly fit dovetail as I did on day one."
"Woodworking isn't my job — it's how I slow the world down in a fast age."

Your story / origin (1–3 short paragraphs)
People buy from people. Share the why without writing a novel.
Common strong angles:
How you got started (grandfather's tools, career change, pandemic pivot, etc.)
What frustrates you about mass-produced furniture ("I got tired of particle-board nightstands falling apart after two moves")
The moment you decided to go full-time or semi-pro
Personal values: sustainability, heirloom quality, local wood, hand tools vs. machines, etc.

What you actually do / your specialty
Be specific — vague = forgettable.
Examples:
"I design and build custom dining tables, live-edge slabs, office desks, and bedroom pieces — mostly in solid hardwoods."
"Specializing in mid-century modern inspired furniture with hand-cut joinery and hand-rubbed oil finishes."
"I make both one-of-a-kind commissions and small-batch items like cutting boards, serving trays, and keepsake boxes."

Your values / approach / materials (very important for woodworkers)
This is where you differentiate from big-box or overseas furniture.
Wood sourcing (local, reclaimed, FSC, kiln-dried in-house, etc.)
Finish philosophy (food-safe, durable, natural oils vs. poly, etc.)
Joinery (mostly hand-cut, mortise & tenon, dovetails, floating tenons, etc.)
Sustainability / environmental stance (if genuine)
Made-to-order vs. ready-to-ship

A quick credibility / proof section (without sounding salesy)
Years making things
Number of pieces built / happy clients (rough numbers are fine)
"100% of my work is done in my Saint Michael shop — no dropshipping or out-of-state assembly"
Mention tools / training if relevant (e.g., "trained at the Minnesota Woodworking Center" or self-taught for 12 years)

A photo of you
Real photo in the shop (apron on, working on a piece, holding a plane, etc.) beats a professional headshot 10×.
Bonus: one or two detail shots of you doing something characteristic (sharpening, applying finish, fitting a joint).
Optional short extras (only if they fit your voice)
Family involvement ("built with help from my kids who now fight over who gets the offcuts")
Fun fact / personality ("I once rebuilt an entire kitchen using only hand tools — never again")
Future goals ("working toward a small showroom in 2027")
Call-to-action at the bottom ("If you're dreaming of a table that tells a story, let's talk → Contact page")


Quick Template You Can Adapt Right Now  -->
<div class="main">
	<h2>About Me</h2>
	<p>
		Hey, I'm Sean — woodworker, occasional perfectionist, and full-time Minnesotan. <br /> <br />

		I started making things because I wanted furniture that would last longer than a TikTok trend.
		What began as weekend projects in the garage will turn into a full shop where I spend most days
		surrounded by walnut shavings and the smell of fresh-planed cherry.
		<br /> <br />

		My focus is custom furniture — dining tables, desks, beds, and the occasional live-edge piece —
		all built one at a time with solid hardwoods sourced as close to home as possible. I lean toward
		clean lines, honest joinery (lots of hand-cut dovetails and mortise & tenon), and finishes that
		feel like wood instead of plastic.
		<br /> <br />

		Every piece that leaves here is built to become someone's "forever" furniture: the table their
		kids do homework on, the desk they retire at, the sideboard that holds holiday memories.
		<br /> <br />

		If that resonates, I'd love to hear about the piece you're dreaming of. Drop me a line — the
		sawdust and coffee are always fresh.
	</p>
</div>
<!-- Keep it 300–600 words max. Write like you're telling a friend over a beer, not writing a corporate bio. Readers can smell "marketing speak" from a mile away.
What direction are you going with the site — mostly commissions, selling ready pieces, tutorials/blog, or a mix? That can help fine-tune the tone even more. -->


<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.main h2 {
		padding: 0.5rem 1.5rem;
		background: #865040;
		color: #f5f5f5;
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
	.main p {
		text-align: start;
		width: 60%;
	}
</style>
