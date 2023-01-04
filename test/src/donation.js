export default function Donation(props) {
  function changeDiscount() {
    document.querySelector(".discount").style.backgroundColor = "red";
  }
  function changeBig() {
    document.querySelector(".discount").style.backgroundColor = "green";
  }
  const { person, institution } = props.donations;
  return (
    <div className="donation">
      {person.bloodtype == "A+" && (
        <div
          className="discount"
          onMouseEnter={changeDiscount}
          onMouseLeave={changeBig}
        >
          Donor
        </div>
      )}
      <h1>{person.name}</h1>
      <h1>{person.id}</h1>
      <h1>{person.bloodtype}</h1>
      <h1>{institution.name}</h1>
      <h1>{institution.position}</h1>
    </div>
  );
}
