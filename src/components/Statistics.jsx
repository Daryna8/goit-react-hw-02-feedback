import { StyledOption } from './Feedback.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StyledOption>Good: {good}</StyledOption>
      <StyledOption>Neutral: {neutral}</StyledOption>
      <StyledOption>Bad: {bad}</StyledOption>
      <StyledOption>Total: {total}</StyledOption>
      <StyledOption>Positive feedback: {positivePercentage}%</StyledOption>
    </div>
  );
};
