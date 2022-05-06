import React from 'react';
import classNames from 'classnames';
import styles from './text.scss';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
	black = 'black',
	orange = 'orange',
	green = 'green',
	white = 'white',
	grayF4 = 'grayF4',
	greyF3 = 'greyF3',
	greyEC = 'greyEC',
	greyD9 = 'greyD9',
	greyC4 = 'greyC4',
	grey99 = 'grey99',
	grey66 = 'grey66',
}

interface ITextProps {
	As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p';
	children?: React.ReactNode;
	size: TSizes;
	mobileSize?: TSizes;
	tabletSize?: TSizes;
	desktopSize?: TSizes;
	color?: EColors;
}

export function Text(props: ITextProps) {
	const {
		As = 'span',
		color = EColors.black,
		children,
		size,
		mobileSize,
		tabletSize,
		desktopSize,
	} = props;
	const classes = classNames(
		styles[`s${size}`],
		styles[color],
		{ [styles[`m${mobileSize}`]]: mobileSize },
		{ [styles[`t${tabletSize}`]]: tabletSize },
		{ [styles[`d${desktopSize}`]]: desktopSize }
	);
	return <As className={classes}>{children}</As>;
}
