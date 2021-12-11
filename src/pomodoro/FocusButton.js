import React from "react";
import {minutesToDuration} from "../utils/duration";

function FocusButton({focusDuration, focusSubtract, focusAdd, session}) {
    return (
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick = {focusSubtract}
              disabled = {focusDuration === 5 || !!session}
            >
            <span className="oi oi-minus" />
            </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick = {focusAdd}
              disabled = {focusDuration === 60 || !!session}
              >
            <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default FocusButton;