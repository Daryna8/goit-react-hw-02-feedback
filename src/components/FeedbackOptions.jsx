export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option} name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
};

// 2. TODO make <button></button> as styled component
// with text - transform: capitalize; and margin for space between buttons
