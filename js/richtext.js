// All rich text editor code
const quillInstances = [];
const richTextElements = document.querySelectorAll(".rich-text");

richTextElements.forEach((element, index) => {
	const label = element.querySelector(".rich-text__label");
	const editor = element.querySelector(".rt-editor");
	quillInstances[index] = new Quill(editor, {
		modules: {
			toolbar: [
				[
					"bold",
					"italic",
					"underline",
					{ list: "ordered" },
					{ list: "bullet" },
				],
			],
		},
		theme: "snow",
	});

	quillInstances[index].on(
		"selection-change",
		function (range, oldRange, source) {
			if (range || quillInstances[index].getLength() > 1) {
				label.style.top = "16px";
				label.style.fontSize = "16px";
			} else {
				label.style.top = "24px";
				label.style.fontSize = "18px";
			}
		}
	);
});
