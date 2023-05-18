const optionsCost = [
  {
    label: 'Cost for two',
    value: '',
  },
  {
    label: 'Less than $500',
    value: 'down',
  },
  {
    label: 'More than $500',
    value: 'up',
  },
];

const optionsLevel = [
  {
    label: 'Sort by rating',
    value: '',
  },
  {
    label: 'Highest',
    value: 'Highest',
  },
  {
    label: 'Lowest',
    value: 'Lowest',
  },
];

function Filter({
  checked,
  handleChecked,
  cost,
  handleSelectCost,
  level,
  handleSelectLevel,
  removeFilter,
}) {
  return (
    <div className="flex flex-col items-center justify-between border-y border-gray-200 py-4 sm:flex-row">
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0">
        <span className="text-sm font-light dark:text-white">Filter By:</span>
        <div className="flex items-center border-b border-black py-1 dark:border-white">
          <input
            onChange={handleChecked}
            checked={checked}
            id="link-checkbox"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="link-checkbox"
            className="ml-2 text-sm font-light dark:text-white"
          >
            Online Delivery
          </label>
        </div>
        <select
          value={cost}
          onChange={handleSelectCost}
          className="text-sm font-light bg-white border-b border-black p-1"
        >
          {optionsCost.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={level}
          onChange={handleSelectLevel}
          className="text-sm font-light bg-white border-b border-black p-1"
        >
          {optionsLevel.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button
        className="text-sm font-light text-gray-400 border border-gray-300 py-2 px-4 mt-4 md:mt-0 dark:text-gray-300"
        onClick={removeFilter}
      >
        Clear All
      </button>
    </div>
  );
}

export default Filter;
