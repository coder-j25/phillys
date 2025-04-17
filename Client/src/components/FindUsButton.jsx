import { Link } from "react-router-dom";

export { Link } from "react-router-dom";
const FindUsButton = ({style}) => {
  return (
    <Link to="/findus" >
      <button className={style}>Find us</button>
    </Link>
  );
};
export default FindUsButton;
