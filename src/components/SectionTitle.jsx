import { StyledTitle } from './Feedback.styled';

export const Section = ({ title, children }) => (
  <section>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </section>
);
