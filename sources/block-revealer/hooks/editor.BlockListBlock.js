/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import classnames from 'classnames';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * Add custom width classes and inline styles in the Editor.
 *
 * @param {Object} BlockListBlock
 */
function addClasses(BlockListBlock) {
	return (props) => {
		const isReveal = useSelect(
			(select) =>
				select('core/preferences').get('wp-block-revealer', 'enabled'),
			[]
		);
		const revealColorName = useSelect(
			(select) =>
				select('core/preferences').get('wp-block-revealer', 'colorName') ??
				'blue',
			[]
		);
		const revealColor = useSelect(
			(select) =>
				select('core/preferences').get('wp-block-revealer', 'color'),
			[]
		);

		const classes = classnames(props?.className, {
			'has-block-reveal': isReveal,
			[`has-block-reveal-color-${revealColorName}`]: revealColorName,
		});

		// Gérer l'injection CSS avec useEffect pour compatibilité iframe
		useEffect(() => {
			const styleElementId = 'wp-block-revealer-custom-color';

			const removeCustomCSS = (targetDocument) => {
				const customStyleElement = targetDocument.getElementById(
					styleElementId
				);
				if (customStyleElement) {
					customStyleElement.remove();
				}
			};

			if (isReveal && revealColorName === 'custom' && revealColor) {
				// Injecter le CSS dans tous les documents possibles (iframe + document principal)
				const injectCustomCSS = (targetDocument) => {
					let customStyleElement = targetDocument.getElementById(
						styleElementId
					);
					if (!customStyleElement) {
						customStyleElement =
							targetDocument.createElement('style');
						customStyleElement.id = styleElementId;
						targetDocument.head.appendChild(customStyleElement);
					}
					customStyleElement.textContent = `
                        .has-block-reveal-color-custom {
                            --wpbr--color: ${revealColor} !important;
                        }
                    `;
				};

				// Injecter dans le document principal
				injectCustomCSS(document);

				// Injecter dans les iframes (éditeur de site)
				const iframes = document.querySelectorAll(
					'iframe[name="editor-canvas"]'
				);
				iframes.forEach((iframe) => {
					if (iframe.contentDocument) {
						injectCustomCSS(iframe.contentDocument);
					}
				});
			} else {
				// Nettoyage si on n'est plus en couleur custom.
				removeCustomCSS(document);
				const iframes = document.querySelectorAll(
					'iframe[name="editor-canvas"]'
				);
				iframes.forEach((iframe) => {
					if (iframe.contentDocument) {
						removeCustomCSS(iframe.contentDocument);
					}
				});
			}
		}, [isReveal, revealColorName, revealColor]);

		return <BlockListBlock {...props} className={classes} />;
	};
}

addFilter(
	'editor.BlockListBlock',
	'mxp-block-revealer/add-classes',
	addClasses
);
