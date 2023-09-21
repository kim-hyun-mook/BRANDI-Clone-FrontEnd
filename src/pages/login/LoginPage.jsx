import { useState } from "react"

const LoginPage = () => {
	const [formData, setFormData] = useState({
    shopName: '',
    discount: 0,
    productName: '',
    productInfoImages: [],
    price: 0,
	});
	
	const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
	}
	return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="text" onChange={handleChange} />
        <input type="text" onChange={handleChange} />
        <input type="text" onChange={handleChange} />
        <input type="text" onChange={handleChange} />
        <input type="file" multiple onChange={handleChange} />
      </form>
    </div>
  );
}

export default LoginPage