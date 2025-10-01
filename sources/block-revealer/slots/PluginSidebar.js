// Using ESNext syntax
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { more } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

const BlockRevealerPluginSidebar = () => (
    <>
        <PluginSidebarMoreMenuItem target="wp-block-revealer-sidebar">
            { __( 'Block Revealer', 'wp-block-revealer' ) }
        </PluginSidebarMoreMenuItem>
        <PluginSidebar name="wp-block-revealer-sidebar" title={ __( 'Block Revealer', 'wp-block-revealer' ) }>
            <ul>
                <li>couleur</li>
                <li>toggle</li>
                <li>shortcut</li>
            </ul>
        </PluginSidebar>
    </>
);

registerPlugin( 'mxp-block-revealer-sidebar', {
    icon: more,
    render: BlockRevealerPluginSidebar,
} );
