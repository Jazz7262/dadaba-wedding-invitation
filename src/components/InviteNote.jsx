import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. Al-Haaj Khanbu Abdul Aleem Sahab</h2>

                <h5 className="address">
                    W/O Al-Haaj Khanbu Abdul Aleem Sahab,
                    <br />
                    Retd. Teacher and Pesh Imam
                </h5>
                <h5 className="address mb-3">
                    H.No.: 1/564, Bharpet,
                    <br /> Khooni Mohallah, Adoni,
                    <br /> Kurnool Dist., AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 94415 80407, <br />
                    +91 98856 34576.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
