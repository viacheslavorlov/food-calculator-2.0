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
	closeModal?: (bool: boolean) => void
}

export const Modal = (props: ModalProps) => {
	const {
		className, children, visible, autoClose, autoCloseTimer
	} = props;
	const [isVisible, setIsVisible] = useState<boolean>(visible || false);

	const onCloseModal = () => {
		setIsVisible(false);
	};

	useEffect(() => {
		if (autoClose && autoCloseTimer) {
			const autoCloseModal = setTimeout(() => {
				onCloseModal();
			}, autoCloseTimer);
			return clearTimeout(autoCloseModal);
		}
	}, [autoClose, autoCloseTimer]);
	if (isVisible) {
		return (
			<Overlay onClick={onCloseModal}>
				<div className={classNames(cls.Modal, className)}>
					<Button
						className={cls.closeBtn}
						variant={ButtonVariants.round}
						onClick={onCloseModal}
						background={ButtonBackground.red}
					>
						X
					</Button>
					{children}
				</div>
			</Overlay>);
	}
	return null;
};
