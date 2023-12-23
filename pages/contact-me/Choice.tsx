import { ChoiceBox } from "./contactme.components";

function Choice({ value, text, isSelected, onSelected }) {

       const onClick = () => {
              onSelected && onSelected(value);
       };

       return (
              <ChoiceBox value={value} onClick={onClick} className={isSelected ? "selected" : ""}>
                     {text}
              </ChoiceBox>
       )

}

export default Choice;