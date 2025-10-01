
import { SVG, Path, Rect } from '@wordpress/primitives';

const BlockRevealerIcon = (
	<SVG
		width={24}
		height={24}
		viewBox="0 0 28 26"
		xmlns="http://www.w3.org/2000/svg"
	>
		{/* Rectangle principal */}
		<Rect
			x="4"
			y="4"
			width="20"
			height="6"
			fill="transparent"
			stroke="currentColor"
			strokeWidth="2"
		/>
		
		{/* Lignes de texte */}
		<Path
			d="M3 14h12"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		
		<Path
			d="M3 18h12"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		
		<Path
			d="M3 22h12"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		
		{/* Bloc de révélation */}
		<Rect
			x="18"
			y="14"
			width="6"
			height="8"
			fill="transparent"
			stroke="currentColor"
			strokeWidth="2"
		/>
	</SVG>
);

export { BlockRevealerIcon };