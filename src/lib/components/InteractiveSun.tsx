import { onMount, type ParentProps } from "solid-js";
import { css } from "@acab/ecsstatic";

export default function InteractiveSun({ children }: ParentProps) {
	let div: HTMLDivElement;

	onMount(() => {
		window.addEventListener("mousemove", (e) => handleMouseMove(e, div));
	});

	return (
		<div ref={div!} class={divStyles}>
			{children}
		</div>
	);
}

function handleMouseMove(event: MouseEvent, element: HTMLDivElement) {
	// Get the element's bounding rectangle
	const rect = element.getBoundingClientRect();

	// Get the mouse position relative to the element
	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;

	// Get the percentage of the mouse position within the element
	const xPercent = x / rect.width;
	const yPercent = y / rect.height;

	if (Math.abs(xPercent) > 1 && Math.abs(yPercent) > 1) {
		element.style.setProperty("--x", `${xPercent * 10 - 5}%`);
		element.style.setProperty("--y", `${yPercent * 10 - 5}%`);
	}
}

const divStyles = css`
    --x: 0;
    --y: 0;

    /*translate: var(--x) var(--y);
    transition: translate 0.1s ease-in-out;*/

    --size: max(100px, 13vw);
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    background: var(--sun-color);

    background-position: 100% 0;
`;
