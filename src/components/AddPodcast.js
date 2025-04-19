import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPodcast.css";

const AddPodcast = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [file, setFile] = useState(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle submission logic
    navigate("/edit-transcript");
  };

  //   const handleSubmit = () => {
  //     // Handle submission based on selected option
  //     if (selectedOption === "upload" && file) {
  //       // Handle file upload
  //       navigate("/editor");
  //     } else if (selectedOption === "youtube" && youtubeUrl) {
  //       // Handle YouTube URL
  //       navigate("/editor");
  //     } else if (selectedOption === "rss") {
  //       // Handle RSS feed
  //       navigate("/editor");
  //     }
  //   };
  //changes to commit

  return (
    <div className="add-podcast-page">
      <div className="add-podcast-container">
        <h1>Add Podcast</h1>

        <div className="options-container">
          <div
            className={`option-card ${
              selectedOption === "rss" ? "selected" : ""
            }`}
            onClick={() => setSelectedOption("rss")}
          >
            <h2>RSS Feed</h2>
            <p>Import from podcast RSS feed</p>
            <p>Automatic episode updates</p>
          </div>

          <div
            className={`option-card ${
              selectedOption === "youtube" ? "selected" : ""
            }`}
            onClick={() => setSelectedOption("youtube")}
          >
            <h2>YouTube Video</h2>
            <p>Import from YouTube URL</p>
            <p>Video to podcast conversion</p>
          </div>

          <div
            className={`option-card ${
              selectedOption === "upload" ? "selected" : ""
            }`}
            onClick={() => setSelectedOption("upload")}
          >
            <h2>Upload Files</h2>
            <p>Upload audio or text files</p>
            <p>Full editing control</p>
          </div>
        </div>

        {selectedOption === "upload" && (
          <div className="upload-container">
            <div className="dropzone">
              <p>Select a file or drag and drop here</p>
              <p className="small-text">
                (Podcast Media or Transcription Text)
              </p>
              <p className="file-types">
                MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
              </p>
              <input
                type="file"
                id="podcast-file"
                onChange={handleFileChange}
                accept=".mp4,.mov,.mp3,.wav,.pdf,.docx,.txt"
              />
              <label htmlFor="podcast-file" className="file-button">
                Select File
              </label>
              {file && <p className="file-name">{file.name}</p>}
            </div>
          </div>
        )}

        {selectedOption === "youtube" && (
          <div className="youtube-container">
            <div className="url-input-container">
              <input
                type="text"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="Paste YouTube link here"
                className="url-input"
              />
              <p className="hint-text">
                Example: https://www.youtube.com/watch?v=VIDEO_ID
              </p>
            </div>
          </div>
        )}

        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={
            (selectedOption === "upload" && !file) ||
            (selectedOption === "youtube" && !youtubeUrl)
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddPodcast;
