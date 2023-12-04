import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Stack spacing={2} direction="row" justifyContent={'center'}>
      {options.map(option => (
        <Button
          variant="contained"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </Stack>
  );
};
