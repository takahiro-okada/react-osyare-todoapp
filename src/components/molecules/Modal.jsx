import styled from "styled-components";
import { ModalCloseButton } from "../atoms/ModalCloseButton";
import { memo } from "react";

export const Modal = memo((props) => {
	const { todoText, setTodoText, toggle, show, onClickAdd } = props;
	if (show) {
		return (
			<>
				<SModalOverray>
					<SModalContent>
						<ModalCloseButton toggle={toggle} />
						<SModalBox>
							<SModalItem>
								<SModalTitle>TODO</SModalTitle>
								<SModalInput
									value={todoText.title}
									onChange={(e) =>
										setTodoText({ ...todoText, title: e.target.value })
									}
								/>
							</SModalItem>
							<SModalItem>
								<SModalTitle>CATEGORY</SModalTitle>
								<SModalInput
									value={todoText.userId}
									onChange={(e) =>
										setTodoText({ ...todoText, userId: e.target.value })
									}
								/>
							</SModalItem>
							<SModalSend onClick={onClickAdd}>POST</SModalSend>
						</SModalBox>
					</SModalContent>
				</SModalOverray>
			</>
		);
	} else {
		return null;
	}
});
const SModalContent = styled.div`
	position: relative;
	z-index: 2;
	width: 70%;
	height: 80%;
	padding: 1em;
	background: #fff;
`;
const SModalOverray = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SModalBox = styled.div`
	padding: 60px 30px;
`;
const SModalItem = styled.div`
	margin-top: 20px;
`;
const SModalTitle = styled.p`
	font-family: "Staatliches", cursive;
	font-size: 40px;
	font-weight: bold;
	letter-spacing: 0.1em; ;
`;
const SModalInput = styled.input`
	font-weight: bold;
	background-color: #c4c4c4;
	font-size: 32px;
	line-height: 2;
	width: 100%;
	padding: 2px 10px;
`;
const SModalSend = styled.button`
	display: block;
	margin-top: 30px;
	margin-left: auto;
	max-width: 200px;
	text-align: center;
	font-weight: bold;
	background-color: orange;
	font-size: 32px;
	line-height: 2;
	width: 100%;
	padding: 2px 10px;
	:hover {
		opacity: 0.7;
	}
`;
