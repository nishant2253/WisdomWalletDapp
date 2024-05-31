import styled from "styled-components";
import { FormState } from "../Form"; // Import the context from the Form component
import { useContext } from "react"; // Import the useContext hook

// FormLeftWrapper component to handle the left side of the form
const FormLeftWrapper = () => {
  // Use the context to get the form state and handlers
  const Handler = useContext(FormState);

  return (
    <FormLeft>
      {/* Input for Campaign Title */}
      <FormInput>
        <label>Campaign Title</label>
        <Input
          onChange={Handler.FormHandler}
          value={Handler.form.campaignTitle}
          placeholder="Campaign Title"
          name="campaignTitle"
        />
      </FormInput>
      {/* Textarea for Story */}
      <FormInput>
        <label>Story</label>
        <TextArea
          onChange={Handler.FormHandler}
          value={Handler.form.story}
          name="story"
          placeholder="Describe Your Story"
        />
      </FormInput>
    </FormLeft>
  );
};

// Styled component for the left section of the form
const FormLeft = styled.div`
  width: 48%;
`;

// Styled component for form input sections
const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "poppins";
  margin-top: 10px;
`;

// Styled component for input fields
const Input = styled.input`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;
`;

// Styled component for textarea fields
const TextArea = styled.textarea`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  min-height: 160px;
`;

export default FormLeftWrapper;
