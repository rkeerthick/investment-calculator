import React from 'react'

const UserInput = ({ inputData, onInputChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={inputData.initialInvestment}
            onChange={onInputChange}
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={inputData.annualInvestment}
            onChange={onInputChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={inputData.expectedReturn}
            onChange={onInputChange}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name="duration"
            value={inputData.duration}
            onChange={onInputChange}
            required
          />
        </p>
      </div>
    </div>
  );
};

export default UserInput;