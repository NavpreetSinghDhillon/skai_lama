import React from "react";
import { useNavigate } from "react-router-dom";
import "./EditTranscript.css";

const EditTranscript = () => {
  const navigate = useNavigate();

  // Dummy transcript data
  const transcript = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam elus modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni`;

  return (
    <div className="edit-transcript-page">
      <div className="edit-transcript-container">
        <div className="transcript-header">
          <h1>Edit Transcript</h1>
        </div>

        <div className="transcript-content">
          <div className="speaker-section">
            <h2>Speaker</h2>
          </div>
          <div className="transcript-text">{transcript}</div>
        </div>
      </div>
    </div>
  );
};

export default EditTranscript;
