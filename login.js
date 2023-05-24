import '../pages/Registerpage.css'
import {Link} from "react-router-dom"


function App() {
  const [Name, setName] = useState('') // useState to store First Name
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  // Function which will validate the input data whenever submit button is clicked.

  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (Name.length == 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }
    if (!isNaN(Name)) {
      alert("Only entered numbers");
      document.myform.fname.select();
      return false;
    }

    if (email.length == 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }
    if (email === "") {
      alert("please, Enter your mail id!!!");
      document.myform.mail.focus();
      return false;
    }
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
      alert("please enter valid mail address!!!!");
      return false;
    }

    if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }
    if (password !== confirmpass) {
      alert("Password not matched please enter correct one!!!!");
      document.myform.cpass.focus();
      return false;
    }
   
  return (
    <div className="main">
      <form>
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="Login"
          onClick={() => {
            validateForm()
          }}
        >
          Login
        </button>
      </form>
    </div>
  )
}
}
export default App;
