import domvm from '../node_modules/domvm/dist/nano/domvm.nano.min.js';

var el = domvm.defineElement,
	vw = domvm.defineView;

export function AppView(vm, comments) {
	return () =>
		el("section.app", [
			vw(PostView, comments)
		]);
}

function PostView(vm, comments) {
	return () =>
		el("section.post", [
			el("h1.post__title", "A post about priorities and scheduling"),
			el("a.post__link", {href: "#"}, "http://example.com/post"),
			el(".post__description", [
				el("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci mauris, euismod quis imperdiet eu, lacinia in leo. Mauris in orci sit amet eros finibus molestie. Vivamus laoreet, nibh eget ultrices consequat, leo mauris suscipit libero, eget feugiat enim turpis ac neque. Nam venenatis dolor ac posuere rhoncus."),
				el("p", "In eget finibus sapien, sit amet tempus augue. Pellentesque eu interdum nulla, sit amet dictum turpis. Sed ut lorem quis purus aliquet egestas. Nulla id risus ex. Morbi et lacinia risus. Integer eget ornare arcu. Donec purus est, dignissim a ante a, lacinia placerat massa. Donec quis lacinia lorem."),
			]),
			vw(CommentsView, comments),
		])
}

function CommentsView(vm, comments) {
	return () =>
		el("section.post__comments", [
			el("h1", "Comments"),
			comments.map((c, index) =>
			el(".post__comment", {_key: index}, [
				el("h2.post__comment-author", c.username + " wrote"),
				el("p.post__comment-text", c.text),
				vw(VoteButtonsView, c),
			])),
		]);
}

function VoteButtonsView(vm, comment) {
	function onVoteUp(e, n) {
		comment.score++;
		vm.redraw();
	}

	function onVoteDown(e, n) {
		comment.score--;
		vm.redraw();
	}

	const clickEvents = {
		".post__vote-down": onVoteDown,
		".post__vote-up":   onVoteUp,
	};

	return () =>
		el(".post__vote-buttons", {onclick: clickEvents}, [
			el("button.post__vote-down", "-"),
			el("span.post__vote-score",  comment.score === 0 ? '0' : comment.score > 0 ? '+' + comment.score : comment.score),
			el("button.post__vote-up", "+"),
		]);
}
