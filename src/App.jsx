import "./App.css";
import Grandpa from "./component/Grandpa/Grandpa";
// import ReuseableForm from "./component/ReusableForm/ReuseableForm";
// import HookForm from "./HookForm/HookForm";
// import RefForm from "./component/RefForm/RefForm";
// import StatefulForm from "./component/StatefulForm/StatefulForm";
// import SimpleForm from "./component/SimpleForm/SimpleForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("sign up data", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("update profile", data);
  // };
  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/* <ReuseableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
        </div>
      </ReuseableForm> */}
      {/* <ReuseableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText={"Update"}
      >
        <h2>Update Profile</h2>
        <p>keep your profile updated</p>
      </ReuseableForm> */}
    </>
  );
}

export default App;
