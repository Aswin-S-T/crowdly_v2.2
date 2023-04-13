import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/ApplicationConstants";
import Swal from "sweetalert2";
function AddPost() {
	const [fileInputState, setFileInputState] = useState("");
	const [previewSource, setPreviewSource] = useState("");
	const [selectedFile, setSelectedFile] = useState();
	const [userDetails, setUserDetails] = useState("");
	const [caption, setCaption] = useState("");
	const [about, setAbout] = useState("");

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem("user"));
		setUserDetails(res);
	}, []);

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
		setSelectedFile(file);
		setFileInputState(e.target.value);
	};

	const handleSubmitFile = (e) => {
		e.preventDefault();
		if (!selectedFile) return;
		const reader = new FileReader();
		reader.readAsDataURL(selectedFile);
		reader.onloadend = () => {
			uploadImage(reader.result);
		};
		reader.onerror = () => {
			console.log("Error");
		};
	};

	const uploadImage = async (base64EncodedImage) => {
		let dataToSend = {
			userId: userDetails._id,
			data: base64EncodedImage,
			imageType: "feed",
			caption,
			about,
		};
		try {
			await fetch(`${BASE_URL}/api/v1/user/add-post`, {
				method: "POST",
				body: JSON.stringify(dataToSend),
				headers: { "Content-Type": "application/json" },
			}).then((response) => {
				Swal.fire({
					title: "Success!",
					text: "Post added successfully",
					icon: "success",
					confirmButtonText: "OK",
				}).then(() => {});
				// }
			});
			setFileInputState("");
			setPreviewSource("");
		} catch (error) {
			console.error(error);
		}
	};

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};
	return (
		<div>
			<button
				type="button"
				class="btn btn-primary followbtn"
				data-toggle="modal"
				data-target="#exampleModalCenter"
			>
				Add Post
			</button>

			<div
				class="modal fade"
				id="exampleModalCenter"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalCenterTitle"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">
								Add Post
							</h5>

							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<form onSubmit={handleSubmitFile}>
								<div class="form-group">
									<label for="formGroupExampleInput">Caption</label>
									<input
										type="text"
										class="form-control"
										id="formGroupExampleInput"
										placeholder="Caption"
										onChange={(e) => setCaption(e.target.value)}
									/>
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput2">About</label>
									<textarea
										type="text"
										class="form-control"
										id="formGroupExampleInput2"
										placeholder="More...."
										onChange={(e) => setAbout(e.target.value)}
									/>
								</div>
								<input
									id="fileInput"
									type="file"
									name="image"
									onChange={handleFileInputChange}
									value={fileInputState}
									className="form-input"
								/>
								<button className="btn authenticationBtn mt-2" type="submit">
									Submit
								</button>
							</form>
							{previewSource && (
								<img
									src={previewSource}
									alt="chosen"
									style={{ height: "300px" }}
								/>
							)}
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							{/* <button type="button" class="btn btn-primary">
								Save changes
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddPost;
