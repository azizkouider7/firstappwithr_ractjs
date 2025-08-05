import "./bouto.css";
function BOTOU() {
  return (
    <div className={"boutountag"}>
      <SinglBouton />
      <SinglBouton />
      <SinglBouton />
      <SinglBouton />
      <SinglBouton />
      <SinglBouton />
      <SinglBouton />
      <SinglBouton />
      <SinglBouton />
    </div>
  );
}
function SinglBouton() {
  return <button className="boutou">Bouton</button>;
}
export { SinglBouton };
export default BOTOU;
