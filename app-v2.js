const form = document.querySelector("#form");
const promptInput = document.querySelector("#prompt");
const model = document.querySelector("#model");
const status = document.querySelector("#status");
const result = document.querySelector("#result");
const download = document.querySelector("#download");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const prompt = promptInput.value.trim();
	if (!prompt) return;
	const button = form.querySelector("button");
	button.disabled = true;
	result.hidden = true;
	download.hidden = true;
	status.textContent = "Growing your image…";
	const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?model=${encodeURIComponent(model.value)}&width=1024&height=1024&nologo=true&seed=${Date.now()}`;
	result.onload = () => {
		result.hidden = false;
		download.href = url;
		download.hidden = false;
		status.textContent = "Your image has bloomed.";
		button.disabled = false;
	};
	result.onerror = () => {
		status.textContent =
			"That image could not be grown. Try Flux or try again in a moment.";
		button.disabled = false;
	};
	result.src = url;
});
