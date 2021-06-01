import styled from "styled-components";

const Input = styled.input`
  height: 20px;
  width: 20px;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  margin: 0.8rem 1rem;
  padding: 10px;
`;


function Checkbox({ checked, onChange, id, label }) {
  return (
    <Label htmlFor={id}>
      <Input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </Label>
  );
}

export default Checkbox;
