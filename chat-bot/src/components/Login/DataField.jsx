import React from "react";

function DataField(props) {
  const { label } = props;
  const { type } = props;
  const { holder } = props;

  return(
    <div
      className="flex flex-row gap-3 text-center justify-center items-center"
    >
      <label
        className="text-login-label font-bold"
      >
        {label}:
      </label>
      <input
        className="border-b "
        type={type}
        placeholder={holder}
      />
    </div>
  );
}

export default DataField;