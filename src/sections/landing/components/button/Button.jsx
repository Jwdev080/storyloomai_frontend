import './button.scss';

// eslint-disable-next-line react/button-has-type, react/destructuring-assignment, react/prop-types
const Button = (props) => <button className={`btn ${props.className}`}>{props.children}</button>;

export default Button;
