import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classNames from 'classnames';
import styles from './styles/button.module.scss';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = (props: ButtonProps) => (
	<button type="button" {...props} className={classNames(styles.button, props.className)}/>
);

export default Button;
