import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
// import pix from "./babe.jpeg";
import { useSelector } from "react-redux";

const CreateProduct = () => {
	const user = useSelector((state) => state.persistedReducer.user);
	const navigate = useNavigate();
	const [ image, setImage ] = useState("");
	const [ avatar, setAvatar ] = useState("/images/IMG-20220512-WA0023.jpg");

	const formSchema = yup.object().shape({
		title: yup.string().required("This field cannot be empty"),
		description: yup.string().required("This field cannot be empty"),
		category: yup.number().required("This field cannot be empty"),
	});

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const handleImage = (e) => {
		const file = e.target.files[ 0 ];
		const save = URL.createObjectURL(file);
		setAvatar(save);
		setImage(file);
	};

	const onSubmit = handleSubmit(async (value) => {
		console.log(value);
		const { title, description, category } = value;

		const localURL = "https://mr-gent-backend.herokuapp.com";

		const url = `${localURL}/api/user/${user._id}/upload`;

		const formData = new FormData();
		formData.append("title", title);
		formData.append("category", category);
		formData.append("description", description);
		formData.append("image", image);

		const config = {
			"content-type": "multipart/form-data",
			onUploadProgress: (ProgressEvent) => {
				const { loaded, total } = ProgressEvent;
				const percent = Math.floor((loaded * 100) / total);
				console.log(percent);
			},
		};

		await axios.post(url, formData, config).then((res) => {
			console.log("Error Data: ", res);
		});

		navigate("/");
	});

	return (
		<Container>
			<Wrapper>
				<Card>
					<div>
						{ " " }
						<ImageHolder>
							<Image src={ avatar } />
							<ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
							<ImageInput
								id="pix"
								onChange={ handleImage }
								type="file"
								accept="image/*"
							/>
						</ImageHolder>
						<Form onSubmit={ onSubmit } type="multipart/form-data">
							<Holder>
								<Label>Product Title</Label>
								<Input placeholder="Title" { ...register("title") } />
								{/* <Error>{ errors?.title?.message }</Error> */ }
							</Holder>
							<Holder>
								<Label>Product description</Label>
								<Input placeholder="Product description" { ...register("description") } />
								{/* <Error>{ errors?.description?.message }</Error> */ }
							</Holder>
							<Holder>
								<Label>Product category</Label>
								<Input placeholder="Product category" { ...register("category") } />
								<Error>{ errors?.category?.message }</Error>
							</Holder>
							<br />
							<Button type="submit" bg="red">
								Add To Collection
							</Button>
						</Form>
					</div>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default CreateProduct;

const BarButton = styled.div`
	flex: 1;
	background-color: ${({ bg }) => bg};
	display: flex;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	align-items: center;
	text-transform: uppercase;
	transition: all 350ms;

	:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.7);
	}
`;

const Bar = styled.div`
	width: 100%;
	height: 60px;
	color: white;
	margin-bottom: 30px;
	display: flex;
`;

const Span = styled(Link)`
	margin-left: 5px;
	text-decoration: none;
	color: darkorange;
	cursor: pointer;
`;

const Div = styled.div`
	display: flex;
	margin-top: 10px;
`;

const Button = styled.button`
	width: 82%;
	margin-top: 5px;
	height: 50px;
	font-family: Poppins;
	font-size: 20px;
	text-transform: uppercase;
	color: white;
	font-weight: 300;
	outline: none;
	border: 0;
	background-color: ${({ bg }) => bg};

	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
`;

const Error = styled.div`
	color: red;
	font-weight: 500;
	font-size: 12px;
`;

const Input = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 3px;
	padding-left: 5px;
	::placeholder {
		font-family: Poppins;
	}
	border: 1px solid silver;
	outline: none;
`;

const Label = styled.label`
	font-weight: 500;
`;

const Holder = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	align-items: flex-start;
	margin-top: 10px;
`;

const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 28px;
`;

const ImageInput = styled.input`
	display: none;
`;

const ImageLabel = styled.label`
	padding: 10px 20px;
	background-color: #004080;
	color: white;
	border-radius: 3px;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
`;

const ImageHolder = styled.div`
	width: 100%;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
	background-color: darkorange;
	margin-bottom: 20px;

	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const Card = styled.div`
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	width: 500px;
	min-height: 650px;
	border-radius: 5px;
	display: flex;
	/* justify-content: center; */
	padding-bottom: 20px;
	flex-direction: column;
	overflow: hidden;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	justify-content: center;
	display: flex;
	align-items: center;
`;

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 70px);
	padding-top: 70px;
`;
