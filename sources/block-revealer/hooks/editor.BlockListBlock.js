/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import classnames from 'classnames';
import { useSelect } from '@wordpress/data';
import { store as preferencesStore } from '@wordpress/preferences';

/**
 * Add custom width classes and inline styles in the Editor.
 *
 * @param {Object} BlockListBlock
 */
function addClasses( BlockListBlock ) {
    return ( props ) => {
        const isReveal = useSelect(
            ( select ) => select( preferencesStore ).get( 'wp-block-revealer', 'enabled' ),
            []
        );
        const classes = classnames( props?.className, {
            'has-block-reveal': isReveal,
        });

        return <BlockListBlock { ...props } className={ classes } />;
    };
}

addFilter(
    'editor.BlockListBlock',
    'mxp-block-revealer/add-classes',
    addClasses
);