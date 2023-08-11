import productsList from "../../data/productsList"

export default function repetition2() {
  const border = '1';

  function renderLines() {
    return productsList.map((product) => {
      return (
        <tr key={product.id}>
          <td border={border}>{product.id}</td>
          <td border={border}>{product.name}</td>
          <td border={border}>{product.price}</td>
        </tr>
      )
    });
  }


  return (
    <div>
      <table border={border}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {renderLines()}
        </tbody>
      </table>
    </div>
  )
}