import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { PanelColorSettings } from '@wordpress/block-editor';
import { registerPlugin } from '@wordpress/plugins';
import { BlockRevealerIcon } from '../components/icon.js';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	PanelBody,
	ToggleControl,
	BaseControl,
	Dashicon,
	Flex,
	FlexItem,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { keyboardShortcuts } from '../components/keyboardShortcuts.js';

const BlockRevealerPluginSidebar = () => {
	const defaultBlue = '#3858e9';
	const defaultColorName = 'blue';

	const { set } = useDispatch('core/preferences');

	// Shortcut
	keyboardShortcuts();

	// Activation
	const isRevealEnabled = useSelect((select) => {
		return (
			select('core/preferences').get('wp-block-revealer', 'enabled') ??
			false
		);
	}, []);
	const handleToggleChange = (newValue) => {
		set('wp-block-revealer', 'enabled', newValue);
	};

	// Color
	const revealColor = useSelect((select) => {
		return select('core/preferences').get('wp-block-revealer', 'color');
	}, []);

	const handleColorChange = (newColor) => {
		// Laisser la valeur vide lors du reset pour que le sélecteur reste bien synchronisé.
		if (!newColor) {
			set('wp-block-revealer', 'color', undefined);
			set('wp-block-revealer', 'colorName', defaultColorName);
			return;
		}

		set('wp-block-revealer', 'color', newColor);

		// Trouve le slug correspondant à la couleur
		const colorMap = {
			[defaultBlue]: 'blue',
			'#b1b1b1': 'gray',
			'#444343': 'black',
		};

		const slug = colorMap[newColor] || 'custom';

		set('wp-block-revealer', 'colorName', slug);
	};

	return (
		<Fragment>
			<PluginSidebarMoreMenuItem target="wp-block-revealer-sidebar">
				{__('Block Revealer', 'wp-block-revealer')}
			</PluginSidebarMoreMenuItem>

			<PluginSidebar
				name="wp-block-revealer-sidebar"
				title={__('Block Revealer', 'wp-block-revealer')}
			>
				<PanelBody>
					<h3>{__('Activation', 'wp-block-revealer')}</h3>
						<ToggleControl
							label={__('Reveal Blocks', 'wp-block-revealer')}
							help={
								isRevealEnabled
									? __(
											'Block Revealer is enabled',
											'wp-block-revealer'
										)
									: __(
											'Block Revealer is disabled',
											'wp-block-revealer'
										)
							}
							checked={isRevealEnabled}
							onChange={handleToggleChange}
						/>
				</PanelBody>

				<PanelColorSettings
					title={__('Appearance', 'wp-block-revealer')}
					disableCustomColors={false}
					colors={[
						{
							name: __('Blue', 'wp-block-revealer'),
							slug: 'blue',
							color: defaultBlue,
						},
						{
							name: __('Gray', 'wp-block-revealer'),
							slug: 'gray',
							color: '#b1b1b1',
						},
						{
							name: __('Black', 'wp-block-revealer'),
							slug: 'black',
							color: '#444343',
						},
					]}
					colorSettings={[
						{
							value: revealColor,
							onChange: handleColorChange,
							label: __('Color', 'wp-block-revealer'),
						},
					]}
				/>

				<PanelBody>
					<BaseControl>
						<Flex align="flex-start" gap={4}>
							<FlexItem>
								<Dashicon icon="info-outline" style={{ color: '#3858e9' }} />
							</FlexItem>
							<FlexItem>
								<h4 style={{ marginTop: 0 }}>
									{__('Keyboard Shortcut', 'wp-block-revealer')}
								</h4>
								<p>
									{__(
										'Use Ctrl+Shift+R to toggle the block revealer on/off.',
										'wp-block-revealer'
									)}
								</p>
							</FlexItem>
						</Flex>
					</BaseControl>
				</PanelBody>
			</PluginSidebar>
		</Fragment>
	);
};

registerPlugin('mxp-block-revealer-sidebar', {
	icon: BlockRevealerIcon,
	render: BlockRevealerPluginSidebar,
});
