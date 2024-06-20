export default function Cart() {

  function addToCart(e) {
    // Read the Form Data
    // Make the API call
    // Change the Component state
  }

  return (
    <form method="post" onSubmit={addToCart}>
      <label>
        Select your favorite brand:
        <select name="selectedBrand" defaultValue="apple">
          <option value="apple">Apple</option>
          <option value="oppo">Oppo</option>
          <option value="samsung">Samsung</option>
        </select>
      </label>
      <label>
        Enter the Count:
        <input
          type="number"
          name="count"
          placeholder="Specify how many do you want" />
      </label>
      <hr />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
}
