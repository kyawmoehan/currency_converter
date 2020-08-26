import React from "react";

function CurrencyRow({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChnageAmount,
}) {
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChnageAmount}
        onBlur={onChnageAmount}
      />
      <select
        value={selectedCurrency}
        onChange={onChangeCurrency}
        onBlur={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
