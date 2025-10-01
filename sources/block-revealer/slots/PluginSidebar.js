import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { registerPlugin } from '@wordpress/plugins';
import { BlockRevealerIcon } from '../components/icon.js';
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, BaseControl, __experimentalVStack as VStack, __experimentalText as Text, __experimentalHeading as Heading, Icon, Flex, FlexItem } from '@wordpress/components';
import { info } from '@wordpress/icons';
import { useSelect, useDispatch } from '@wordpress/data';
import { keyboardShortcuts } from '../components/keyboardShortcuts.js';

const BlockRevealerPluginSidebar = () => {

    const defaultBlue = '#1989c1';

    const { set } = useDispatch( 'core/preferences' );

    // Shortcut 
    keyboardShortcuts();

    // Activation
    const isRevealEnabled = useSelect( ( select ) => {
        return select( 'core/preferences' ).get( 'wp-block-revealer', 'enabled' ) ?? false;
    }, [] );
    const handleToggleChange = ( newValue ) => {
        set( 'wp-block-revealer', 'enabled', newValue );
    };


    // Color
    const revealColor = useSelect( ( select ) => {
        return select( 'core/preferences' ).get( 'wp-block-revealer', 'color' ) ?? defaultBlue;
    }, [] );
    
    // Color slug
    const revealColorSlug = useSelect( ( select ) => {
        return select( 'core/preferences' ).get( 'wp-block-revealer', 'colorSlug' ) ?? 'blue';
    }, [] );
    
    const handleColorChange = ( newColor ) => {
        set( 'wp-block-revealer', 'color', newColor );
        
        // Trouve le slug correspondant à la couleur
        const colorMap = {
            [defaultBlue]: 'blue',
            '#b1b1b1': 'gray',
            '#444343': 'black',
        };
        
        const slug = colorMap[newColor] || 'custom';
        set( 'wp-block-revealer', 'colorName', slug );
    };

    return (
        <>
            <PluginSidebarMoreMenuItem target="wp-block-revealer-sidebar">
                { __( 'Block Revealer', 'wp-block-revealer' ) }
            </PluginSidebarMoreMenuItem>

            <PluginSidebar name="wp-block-revealer-sidebar" title={ __( 'Block Revealer', 'wp-block-revealer' ) }>

                <PanelBody>
                    <VStack spacing={4}>
                        <Heading level={4} size="small">
                            { __('Activation', 'wp-block-revealer') }
                        </Heading>
                        <ToggleControl
                            label={ __( 'Reveal Blocks', 'wp-block-revealer' ) }
                            help={ 
                                isRevealEnabled 
                                    ? __( 'Block Revealer is enabled', 'wp-block-revealer' )
                                    : __( 'Block Revealer is disabled', 'wp-block-revealer' )
                            }
                            checked={ isRevealEnabled }
                            onChange={ handleToggleChange }
                        />
                    </VStack>
                </PanelBody>

                <PanelColorSettings
                    title={ __( 'Appearance', 'wp-block-revealer' ) }
                    disableCustomColors={ false }
                    colors={ [
                        {
                            name: __( 'Blue', 'wp-block-revealer' ),
                            slug: 'blue',
                            color: defaultBlue,
                        },
                        {
                            name: __( 'Gray', 'wp-block-revealer' ),
                            slug: 'gray',
                            color: '#b1b1b1',
                        },
                        {
                            name: __( 'Black', 'wp-block-revealer' ),
                            slug: 'black',
                            color: '#444343',
                        },
                    ] }
                    colorSettings={ [
                        {
                            value: revealColor,
                            onChange: handleColorChange,
                            label: __( 'Color', 'wp-block-revealer' ),
                        },
                    ] }
                />

                <PanelBody>
                    <BaseControl>
                        <Flex align="flex-start" gap={4}>
                            <FlexItem>
                                <Icon icon={info} size={20} style={{color: '#0073aa'}} />
                            </FlexItem>
                            <FlexItem>
                                <VStack spacing={2}>
                                    <Heading level={5} size="small">
                                        { __('Keyboard Shortcut', 'wp-block-revealer') }
                                    </Heading>
                                    <Text variant="muted" size="small">
                                        { navigator.platform.toUpperCase().indexOf('MAC') >= 0
                                            ? __( 'Use Cmd+Shift+R to toggle the block revealer on/off.', 'wp-block-revealer' )
                                            : __( 'Use Ctrl+Shift+R to toggle the block revealer on/off.', 'wp-block-revealer' ) 
                                        }
                                    </Text>
                                </VStack>
                            </FlexItem>
                        </Flex>
                    </BaseControl>
                </PanelBody>

            </PluginSidebar>
        </>
    );
};

registerPlugin( 'mxp-block-revealer-sidebar', {
    icon: BlockRevealerIcon,
    render: BlockRevealerPluginSidebar,
} );
