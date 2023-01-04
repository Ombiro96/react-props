import Meme from "./meme";
import test from "./data-test";
import Donation from "./donation";
import data from "./memesData"
export default function Main() {
  // const meme = data.map(function (items) {
  //   return <Meme key={items.id} memesdata={items} />;
  // });
  const donation = test.map(function (items) {
    return <Donation key={items.key} donations={items} />;
  });
  return (
    <div className="main-content">
      {/* {meme} */}
      <Meme/>
      <div className="donation-container">{donation}</div>
    </div>
  );
}
