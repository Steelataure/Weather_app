import Forms from "../styles/Forms.css"

function Forms_main() {
    return (
<div className="formulaire">   
<form>
  <label>
    Nom :
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Envoyer" />
</form>
</div>     

    )
}

export default Forms
