import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './Modal.module.scss';
import {ReactNode, useEffect, useState} from 'react';
import {Overlay} from '../../Overlay/Overlay';
import {Button, ButtonBackground, ButtonVariants} from '../../Button/Button';

interface ModalProps {
	className?: string;
	children: ReactNode;
	visible?: boolean;
	autoClose?: boolean;
	autoCloseTimer?: number;
	closeModal: (bool: boolean) => void;
}

export const Modal = (props: ModalProps) => {
	const {
		className,
		children,
		autoClose,
		autoCloseTimer,
		closeModal
	} = props;
	
	useEffect(() => {
		if (autoClose && autoCloseTimer) {
			const autoCloseModal = setTimeout(() => {
				closeModal(false);
			}, autoCloseTimer);
			return clearTimeout(autoCloseModal);
		}
	}, [autoClose, autoCloseTimer, closeModal]);
	return (
		<Overlay onClick={()=> closeModal(false)}>
			<div className={classNames(cls.Modal, className)}>
				<Button
					className={cls.closeBtn}
					variant={ButtonVariants.round}
					onClick={() => closeModal(false)}
					background={ButtonBackground.red}
				>
					X
				</Button>
				{children}
			</div>
		</Overlay>);
};
