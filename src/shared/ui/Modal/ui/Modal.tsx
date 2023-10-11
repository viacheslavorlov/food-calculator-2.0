import {classNames} from 'shared/helpers/classNames/classNames';
import {IconSVG} from '../../Icon/Icon';
import cls from './Modal.module.scss';
import {ReactNode, useEffect} from 'react';
import {Overlay} from '../../Overlay/Overlay';
import {Button, ButtonBackground, ButtonVariants} from '../../Button/Button';
import Close from 'shared/assets/close.svg';

interface ModalProps {
	className?: string;
	children: ReactNode;
	visible?: boolean;
	autoClose?: boolean;
	autoCloseTimer?: number;
	closeModal: (bool: boolean) => void;
}

export const Modal = ({
	className,
	children,
	autoClose,
	autoCloseTimer,
	closeModal,
}: ModalProps) => {
	useEffect(() => {
		let autoCloseModal: NodeJS.Timeout | undefined;
		if (autoClose && autoCloseTimer) {
			autoCloseModal = setTimeout(() => {
				closeModal(false);
			}, autoCloseTimer);
		}
		return () => {
			if (autoCloseModal) {
				clearTimeout(autoCloseModal);
			}
		};
	}, [autoClose, autoCloseTimer, closeModal]);

	const handleModalClose = () => {
		closeModal(false);
	};

	return (
		<Overlay onClick={() => closeModal(false)}>
			<div className={classNames(cls.Modal, className)}>
				<Button
					className={cls.closeBtn}
					variant={ButtonVariants.round}
					onClick={handleModalClose}
					background={ButtonBackground.red}
				>
					<IconSVG Icon={Close} height={15} width={15} className={cls.closeBtnIcon}/>
				</Button>
				{children}
			</div>
		</Overlay>
	);
};
