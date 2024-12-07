
import style from "./Button.module.css";

const Button = (props) => {

    const {isOutline, icon, text} = props;
  
  return (
    <button className= {isOutline ? style.outline_btn : style.primary_btn}>
      {/* {props.icon} */}
      {/* {props.text} */}
      {icon}
      {text}
    </button>
  );
};

export default Button;
