import Navigator from "./Navigator";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ContactIcon from "../Assets/smartphone.png";

const SuggestName = () => {
  return (
    <>
      <Navigator heading="Suggest Name" />
      <div className="flex items-center gap-2 box-border border-2 rounded-md w-5/6 m-auto mt-[30px]">
        <PersonAddIcon style={{ color: "#5E849C", fontSize: "20px" }} />
        <input
          className="placeholder-gray-500"
          style={{ outline: "none", height: "48px" }}
          type="text"
          placeholder="First Name"
        />
      </div>
      <div className="flex flex-col gap-8 text-center items-center mt-[100px]">
        <img src={ContactIcon} />
        <p style={{width:"85%",margin:"auto"}}>
          Please suggest correct first name only else your respect wouldn't get
          Counted
        </p>
      </div>
    </>
  );
};
export default SuggestName;
