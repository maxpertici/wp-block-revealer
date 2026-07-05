const BlockRevealerIcon = (
	<svg
		width={24}
		height={24}
		viewBox="0 0 28 26"
		xmlns="http://www.w3.org/2000/svg"
	>
		{/* Rectangle principal */}
		<rect
			x="4"
			y="4"
			width="20"
			height="6"
			fill="transparent"
			stroke="currentColor"
			strokeWidth="2"
		/>

		{/* Lignes de texte */}
		<path
			d="M3 14h12"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>

		<path
			d="M3 18h12"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>

		<path
			d="M3 22h12"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>

		{/* Bloc de révélation */}
		<rect
			x="18"
			y="14"
			width="6"
			height="8"
			fill="transparent"
			stroke="currentColor"
			strokeWidth="2"
		/>
	</svg>
);

export { BlockRevealerIcon };
