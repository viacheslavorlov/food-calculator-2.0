import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './Modal.module.scss';
import {ReactNode, useEffect, useState} from 'react';
import {Overlay} from 'shared/ui/Overlay/Overlay';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';

interface ModalProps {
	className?: string;
	children: ReactNode;
	visible?: boolean;
	autoClose?: boolean;
	autoCloseTimer?: number;
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
		if (autoClose && isVisible) {
			setTimeout(() => {
				onCloseModal();
			}, autoCloseTimer);
		}
	}, [autoClose, autoCloseTimer, isVisible]);


	return isVisible ? (
		<Overlay onClick={onCloseModal}>
			<div className={classNames(cls.Modal, className)}>
				<Button
					className={cls.closeBtn}
					variant={ButtonVariants.round}
					onClick={onCloseModal}
				>
					X
				</Button>
				{children}
			</div>
		</Overlay>) : null;
};
