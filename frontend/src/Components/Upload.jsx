import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [comment, setComment] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image1", selectedFile);
    formData.append("comment", comment);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/product/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("error in uploading file:", error);
    }
  };

  return (
    <form
      className="flex justify-center items-center h-screen bg-gray-100"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center items-center border border-blue-400 rounded-lg shadow-lg bg-white p-10 space-y-6">
        <div className="flex flex-col justify-center items-center space-y-4">
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:border-blue-400 focus:outline-none focus:border-blue-400"
            type="file"
            onChange={handleFileChange}
            alt="Submit"
          />
          <div>
            <p className="flex flex-col items-center text-center text-4xl font-bold text-gray-800 mb-2">
              ADD COMMENT
            </p>
            <input
              className="border border-blue-400 rounded-lg text-2xl p-2 transition duration-300 ease-in-out focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter comment here"
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Upload;
