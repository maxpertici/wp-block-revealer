import { registerPlugin } from '@wordpress/plugins';
import { PluginMoreMenuItem } from '@wordpress/editor';
import { check } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as preferencesStore } from '@wordpress/preferences';

const BlockRevealerMenuItem = () => {
    
    const isActive = useSelect(
        ( select ) => select( preferencesStore ).get( 'wp-block-revealer', 'enabled' ),
        []
    );

    const { set } = useDispatch( preferencesStore );

    return (
        <PluginMoreMenuItem
            icon={ isActive ? check : null }
            onClick={ () => set( 'wp-block-revealer', 'enabled', ! isActive ) }
            role="menuitemcheckbox"
            shortcut="Ctrl+Alt+R"
            isSelected={ isActive }
        >
            { __( 'Reveal Blocks', 'wp-block-revealer' ) }
        </PluginMoreMenuItem>
    );
};

registerPlugin( 'mxp-block-revealer-menu-item', {
    render: BlockRevealerMenuItem,
} );
