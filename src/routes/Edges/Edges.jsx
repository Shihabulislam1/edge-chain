// import styles from "./Edges.module.css";
import NetComponents from "../../components/NetComponents/NetComponents";
import PropTypes from "prop-types";

function Edges({api="http://127.0.1.1:3000"}) {
  return (
    <div>
      <NetComponents endpoint={`${api}/servers/count`} title="Edges Connected" responseKey="count"/>
    </div>
  );
}

export default Edges;

Edges.propTypes = {
  api: PropTypes.string,
};